var CACHENAME = 'rsrafvp';

var CACHEDURLS = [
    '/',
    'index.html',
    'main.html',
    'myassessment.html',
    'assets/js/index.js',
    'assets/js/main.js',
    'assets/js/myassessment.js',
    'assets/js/class_assessment.js',
    'assets/bootstrap/js/bootstrap.min.js', 
    'assets/css/style.css',
    'assets/bootstrap/css/bootstrap.min.css' 
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('assets/js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
};

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHENAME)
      .then(function(cache) {
        console.log('Opened cache');
        return true;
        //return cache.add(CACHEDURLS);
      })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});