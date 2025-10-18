self.addEventListener('install', event=>console.log('SW Installed'));
self.addEventListener('fetch', event=>event.respondWith(fetch(event.request).catch(()=>caches.match(event.request))));
