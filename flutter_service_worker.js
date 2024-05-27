'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af6d91912e465af76da48a840f824ada",
"assets/AssetManifest.bin.json": "e97224ce25ceba1f8bab02958bc06b47",
"assets/AssetManifest.json": "8824287d35c5585e6dd87e169e002a44",
"assets/assets/agriculture.png": "fab971ea62521d286fdc3ed5148ad218",
"assets/assets/android.png": "674321f23be64978faedc61b2f83c141",
"assets/assets/androidb.png": "30b6c43d159f4e03fb9637e13fa008c0",
"assets/assets/apple.png": "b7dea37fe80a8c8167078c55e9c6323d",
"assets/assets/appleb.png": "b058454d79a1e9f53249785c3d08ea6b",
"assets/assets/calendor.png": "9d2f915b4a81da75a9f3e75cf8e1b4f4",
"assets/assets/cancel_image.png": "344267ce8a6d67102e33f918535afa5c",
"assets/assets/drone.png": "aa04e1d2d228b04f6548fd0659a496d3",
"assets/assets/drone_image.png": "393ec9243d09fd0bc3cd8e9d6bfce16c",
"assets/assets/fly_logo.png": "539a2f74e592ccfad3bdbca4e8ae5310",
"assets/assets/location_pin.png": "db2a714c559d9cd5a82723ad653af978",
"assets/assets/location_pin2.png": "1faae6a5bf57a31cc737d3e7e390564a",
"assets/assets/location_result_image.png": "a6d863064ef7c3333ade28a5f80fad44",
"assets/assets/login1.png": "bd2854831f1b27ef2ec6a05977dd8257",
"assets/assets/logindrone.png": "085c55cdb5398702c1f5d42df8ea639c",
"assets/assets/login_profile.png": "31d594029084c7df8fe90c0d7cb0c53c",
"assets/assets/login_profile2.png": "6fa34fc7c5f15662e2a75454162916b6",
"assets/assets/mapping.png": "eec6f4d1aaeae64f99c2b80354c38939",
"assets/assets/propellor.png": "242978477288d3cc00b1fee53e248e0c",
"assets/assets/sad_image.png": "fb64d876ed9e12bbceffdf660af17499",
"assets/assets/soaron.png": "d835dae92434c1ac83edc6bfb213d7ba",
"assets/assets/surveillance.png": "c24c424726b0f95ebc06eac42366b68c",
"assets/assets/videography.png": "0e41e82841bdc188fbb529c55c3f2ed1",
"assets/FontManifest.json": "9366b12cd42e8d7eaeff87fd0a58cf7d",
"assets/fonts/DmSans.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/fonts/Inter.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/MaterialIcons-Regular.otf": "49aa0acb0a7f39c0b49f6215b00792a3",
"assets/fonts/OpenSans.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/fonts/Roboto.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/WorkSans.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
"assets/NOTICES": "58dfd25e4baf10c9510a9230dc13fd1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dafb461b84aa572465724efb18021545",
"/": "dafb461b84aa572465724efb18021545",
"main.dart.js": "7cd1cdbf46e846c2bf9135b35112acd3",
"manifest.json": "71f7693d1aaaeab98f132631df91fcf7",
"version.json": "8a178cb9f1e4f96dac77bcf4df9f9445"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
