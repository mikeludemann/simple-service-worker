var cacheName = "Version_1.0";
var cachingFiles = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(cachingFiles);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request)
                .then(function (response) {
                    let responseClone = response.clone();

                    caches.open(cacheName).then(function (cache) {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                }).catch(function () {
                    return caches.match('');
                });
        }
    }));
});