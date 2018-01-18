var staticCacheName = 'wittr-static-8fe4b8f';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'js/main_0fe4b8f.js',
        'css/main_1gz4b5k.css',
        'imgs/icon_7wq4b8f.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {

    event.waitUntil(
        caches.keys().then(names => {
            return Promise.all(names.filter(name => {
                    return name.startsWith('wittr-') && name != staticCacheName;
                }).map(name => {
                    return caches.delete(name);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});