const CACHE_NAME = 'karake-golf-v74';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names =>
            Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Network-first for HTML, with 3s timeout fallback to cache
    if (event.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
        event.respondWith(
            new Promise(resolve => {
                let settled = false;
                // Timeout: fall back to cache after 3 seconds
                const timer = setTimeout(() => {
                    if (!settled) {
                        settled = true;
                        caches.match(event.request).then(cached => {
                            resolve(cached || new Response('Offline', { status: 503 }));
                        });
                    }
                }, 3000);
                fetch(event.request)
                    .then(response => {
                        if (!settled) {
                            settled = true;
                            clearTimeout(timer);
                            const clone = response.clone();
                            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                            resolve(response);
                        }
                    })
                    .catch(() => {
                        if (!settled) {
                            settled = true;
                            clearTimeout(timer);
                            caches.match(event.request).then(cached => {
                                resolve(cached || new Response('Offline', { status: 503 }));
                            });
                        }
                    });
            })
        );
        return;
    }

    // Cache-first for other assets
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            });
        })
    );
});
