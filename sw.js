const CACHE = "wijiedu-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

// Passthrough: solo se mete con los archivos de esta misma página.
// Todo lo que venga de otro sitio (como el formulario) lo deja pasar sin tocarlo.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return; // no interceptar nada externo (formulario, íconos externos, fuentes, etc.)
  }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
