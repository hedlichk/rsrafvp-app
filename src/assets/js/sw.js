var cacheName = 'rsrafvp';
var filesToCache = [
    '/',
    'index.html',
    'main.html',
    'myassessment.html',
    'assets/css/style.css',
    'assets/bootstrap/css/bootstrap.min.css', 
    'assets/js/index.js',
    'assets/js/sw.js',
    'assets/bootstrap/js/bootstrap.min.js' 
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});