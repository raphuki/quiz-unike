const CACHE = "quiz-unike-598753760c";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "fonts/figtree-latin-400-normal.woff2",
 "fonts/figtree-latin-600-normal.woff2",
 "fonts/figtree-latin-800-normal.woff2",
 "fonts/unbounded-latin-600-normal.woff2",
 "fonts/unbounded-latin-800-normal.woff2",
 "icons/icon-180.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "media/aurora.jpg",
 "media/aurora.mp4",
 "media/creator1.jpg",
 "media/creator1.mp4",
 "media/fabiana.jpg",
 "media/fabiana.mp4",
 "media/fabrini.jpg",
 "media/fabrini.mp4",
 "media/jaqueline.jpg",
 "media/jaqueline.mp4",
 "media/kekeu.jpg",
 "media/kekeu.mp4",
 "media/lidiane.jpg",
 "media/lidiane.mp4",
 "media/matheus.jpg",
 "media/matheus.mp4",
 "media/nicollas-batalha.mp4",
 "media/nicollas.jpg",
 "media/zuleide.jpg",
 "media/zuleide.mp4"
];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).catch(() => caches.match("index.html"))));
});
