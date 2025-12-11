self.addEventListener("install", (event) => {
  console.log("Service Worker instalando...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Permite que todo pase sin cachear (PWA mínima)
});
