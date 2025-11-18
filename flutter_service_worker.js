'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ff84b19e512221314558506e3bbddd78",
"assets/AssetManifest.bin.json": "5dc1b68ee8ced0cf0454ee926b9edb92",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/adaptive_foreground_icon.png": "623e308a31828ec7de467bd1b5fb81f7",
"assets/assets/images/aht_reduction.png": "7a7ec50c1c3e1ed72380b4cc8125376f",
"assets/assets/images/app_launcher_icon.png": "623e308a31828ec7de467bd1b5fb81f7",
"assets/assets/images/ChatGPT_Image_20251019_15_45_30.png": "ab9e26a29386e10b291fb4063b73769d",
"assets/assets/images/ChatGPT_Image_20251019_16_02_00.png": "88b89376f22ce8cfaf7ee8fd8fbd2e69",
"assets/assets/images/ChatGPT_Image_20251030_10_23_12.png": "c67096129e2991396ab86d5d46b56ed5",
"assets/assets/images/ChatGPT_Image_2025111_15_39_04.png": "2d46ccf77221a3d79cf2879087287f4d",
"assets/assets/images/ChatGPT_Image_2025112_13_51_26.png": "538867947a7d56eb694a64d4f70212eb",
"assets/assets/images/ChatGPT_Image_Sep_21,_2025,_08_30_06_PM.png": "f1737ef91af09457eb782c5033c600bb",
"assets/assets/images/csat_improvement.png": "26c5ad4a5214f01cf4677367a23f2be5",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Gemini_Generated_Image_1v96y41v96y41v96.png": "f1fbd51347aead17f63c02d43d9c1ede",
"assets/assets/images/Gemini_Generated_Image_5oo76k5oo76k5oo7.png": "3ae898996ba84491c3980dc0bfe02464",
"assets/assets/images/Gemini_Generated_Image_vnyecwvnyecwvnye.png": "b2bb7b0b5579d1684826b1fa572e4e27",
"assets/assets/images/GetItOnGooglePlay_Badge_Web_color_English.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/images/GMail_New_Icon.png": "2b87449c056ed35b6e0869723dd456dd",
"assets/assets/images/Google-Logo-Transparent-File_(1).png": "08a2c989f4d608253ae20b873436a35f",
"assets/assets/images/IMG_0749.jpg": "56f03666b17307694354be2adf4427b5",
"assets/assets/images/onevow.fabcon.png": "623e308a31828ec7de467bd1b5fb81f7",
"assets/assets/images/onevowimage1.png": "afdda1440d5dfadd2cc0bf8bc21dde6f",
"assets/assets/images/onevowimage2.png": "48c3fbb613b7d732d107336e9ca69e06",
"assets/assets/images/outlooklogo.png": "1d111a65b058f74d389feb47ca998e0f",
"assets/assets/images/plaxispng.png": "dc7261e9df07ded117e074c440ee16f5",
"assets/assets/images/service_level.png": "6231415b47427e511735f5e387da004c",
"assets/assets/images/socialshareimage.png": "34cf9a9117848ccb049dbdcb90682f9a",
"assets/assets/images/voxclonepng.png": "a5d9c4749a06dea9ccd01374db8a56cd",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/202511021259_(2).mp4": "bc40c8882184fb62418ca5d3071940cb",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "e519b33dfcaa308eb78c20f61c060c7e",
"assets/NOTICES": "8950fc4808608fa1b827b82fc87e3378",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5fdcdd5d8469da29bc48f4d4c526c8f9",
"icons/app_launcher_icon.png": "623e308a31828ec7de467bd1b5fb81f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "acc4d359e8caa9ddcd87c9fd0cf55cba",
"/": "acc4d359e8caa9ddcd87c9fd0cf55cba",
"main.dart.js": "26e21744bf3edf572f8f6ec3054fbd20",
"manifest.json": "ba3cf3773a55f517859628fb57658874",
"onevow.fabcon.png": "623e308a31828ec7de467bd1b5fb81f7",
"socialshareimage.png": "34cf9a9117848ccb049dbdcb90682f9a",
"version.json": "7f5dbb833ea35594f4d8182d639a2cfd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
