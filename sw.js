const CACHE = "wijiedu-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

// Passthrough: siempre pide a la red (el formulario necesita internet),
// esto solo existe para cumplir el requisito técnico de "instalable".
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
