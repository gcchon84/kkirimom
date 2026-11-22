/* 끼리맘 서비스 워커 — 홈 화면에 추가(설치) 요건만 채운다.
   캐시를 쓰지 않고 네트워크 그대로 흘려보내므로, 새 배포가 바로 반영된다. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) { event.waitUntil(self.clients.claim()); });
/* 빈 fetch 핸들러: 브라우저 기본 동작(네트워크)을 그대로 쓴다 */
self.addEventListener("fetch", function () {});
