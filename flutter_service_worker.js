'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "72ab20a9d98c7f56025ddd522d1bd4bc",
"assets/AssetManifest.json": "666aa3ce524269bca58c536efbb51235",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/img/avatar.png": "bf440fa614654572c9bb9a25ff51db82",
"assets/assets/img/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"assets/NOTICES": "a9a0b6f963ace5b79990857215ac81b4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".git/objects/72/24b1c9e228fd8d629d200a665a5f8d33ab3c69": "3802f77f75ce14d45e0260b8d05d93d7",
".git/objects/c0/58639c3dde97b2a2f4a140810e06af6c04d665": "95060762de2902b968ee75ce33276096",
".git/objects/11/5cdd3b25c2992084c4f387bad3978419a34388": "95110eee01aa4af27b43bb76873f1bd2",
".git/objects/d3/6f297fdfc18763f9bce1be1b3dec77f9dd5ceb": "fc86c233ece5fa4edc63b64cb4c90d13",
".git/objects/9a/6cb7aae9c71e95e1b52a23083f97dcfc63dd47": "2eafccc7ccefcce7711afff16d632e24",
".git/objects/9a/f4cce6346a96424bcd783ec3d522a576f38b9b": "30e5fc7ddb212e4a25a6af7a12dc348c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/71/370ec8c07b433784903daf73ca818758a10147": "72660ed835c8bed5d7c38e2d302f27b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8bd8a788f7ace02dd4387370b9e92aea121b62": "36626febed6b0b448737f32567c73e1b",
".git/objects/83/54f0f63ec3c3eea322132c0d1565941b9e517b": "2b631079cec6cbc0799117dd326d341b",
".git/objects/23/6f7c095455bca6012e1f95c185589380a203f5": "0ecaf6f7b4808dd99b1605c0e4ba960d",
".git/objects/d6/214c5b85204d44e3694c47732138c187813e33": "6dce3185af57ab7d37d3d0ea0903c26f",
".git/objects/d6/41b64781b3593d743b2bf4569f818a7dca49bc": "0adbb14ea342a87d5a0917ef3b977cd2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/db/3f3ad922936e748b76699324f317f09f8d5f6b": "03559329f0f7665a54097470b9c93360",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/98/09a713228b5af557baf5088e93b79d7624d349": "2d286c4c21e593e09d3dbf1ed7259f6d",
".git/objects/a9/5a5a4874555475112619952e04b6bdfd4d1aa7": "2d7804fbca1a296ba3a978adb02fff04",
".git/objects/f6/8a3e83a25d17ff1a1fef3c5e9891b5599bd4e8": "b01da8d3613e9c4d6d4166823f2736d1",
".git/objects/02/eae2f9d1904ee350f8d76cc23a8d6e767df6c8": "c85f9a2d92d619c63e13413df2ce1687",
".git/objects/67/8fd5eb42567e057cd2a86b916bbbc34169ff8d": "fa8225abb3330f46c48ed05015109982",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/c2/db5227754d7f0219f8060c563a9f831a6caaf4": "ed45e6c1d2a3c2d5042f4bf4c9c1188c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e7/e1e265e2a1ad07371e0977337a78b09520a5db": "41a83629ebc2da8ea6dce870af0450f5",
".git/objects/e7/1a726136a47ed24125c7efc79d68a4a01961b4": "80db442fabe042294a3d9008f975ed57",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/5f/47a155b13a78254493e53a70c952dc3b419f9d": "917453bab2833fd3b3e439a805b07738",
".git/objects/91/7efa6a0477a6742d8665fa5a0e478474240ebf": "67f2cb232842499c664cfcbbe2049e03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/893a1616f19fd970ca2dc8f5a6d11273214406": "6553986eeac08533c4c7d98398bd19d1",
".git/objects/e3/e5c80fb3264bc58720f4e770561bc2fd706f0a": "fc4a78a22549bcd5e1100183e5c89912",
".git/objects/80/15cab110b0d13ed1712dc6d6e2a678e56f4f59": "8f66c115c4372db3ef8d17c1fead3eb2",
".git/objects/8a/133d0b5b02a4d421673d41a8097b7de3b3f98d": "58a1d49d8ed14136ddae0b1b53f02f06",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e0/48358641ae3befabbcea83f70c58293154162b": "f5d450fd144b84549620af4a168abf10",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/bf/8406a8197a84f7023bea6c9954c540f85d8bea": "15fd478e8c55cb07d75b3d28dbd9e1bc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/logs/refs/remotes/origin/master": "a83018c769425482abb46fab430ed2ad",
".git/logs/refs/heads/master": "9ac7da3d90868af0379839e920bd2219",
".git/logs/HEAD": "9ac7da3d90868af0379839e920bd2219",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "8e620db6c257a30d338463386c81f72c",
".git/refs/remotes/origin/master": "ed4b3373c3bbed0af47b4d92f6c682ae",
".git/refs/heads/master": "ed4b3373c3bbed0af47b4d92f6c682ae",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "704e4abb20e30ad0b77ba22cdfae4689",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "48555a751c945c262ef7754a594e78b3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"index.html": "3fd06ab1676538a50ebdc6acf409e0c8",
"/": "3fd06ab1676538a50ebdc6acf409e0c8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "23b67aa0b3185bf629d2f5e67ec4e986",
"manifest.json": "e41d3f1a502dc3c11aa72bf0ae6fd2cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
