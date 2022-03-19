'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "6133692b81404083e6cb059ed6671085",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "48dc2c331f3c04c02dc307a36bd1f47b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b461d50b843d880d790df03ace46d48f",
".git/logs/refs/heads/master": "b461d50b843d880d790df03ace46d48f",
".git/logs/refs/remotes/origin/HEAD": "8e19f4eba795f96426cdc50401eb8090",
".git/logs/refs/remotes/origin/master": "3e288b7b188cd96956e1397060cace10",
".git/objects/24/4f3b4a9d8fe32f7d5b07c653e311b950abf33d": "72a86d0bad8a6016e2facfea090fa484",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/27/c9ccfa1ce65028002342ad2079ffb44d5fefb7": "c6cf804941ddb8305f03114ee2c8ab5f",
".git/objects/51/e5b5af92ab94d9e48d7055e3d85c168461df89": "ddd3bee51fe294c61baa8fdd647aceb1",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/6e/91283acb013dc274d9b55b66341cca44b8eeb2": "67ac668968dbeed67b3211f62b8dfab5",
".git/objects/78/26a235687f4d91212f5beee9c084e7aa75f5ae": "c6f6fe00b03d4b8bd6df669a3f05cf68",
".git/objects/79/695686a4517db94b451dc5c38a92f9b7278029": "8348ee631044ea161b80366c37e50367",
".git/objects/81/8e35b25ab6ff692ab2a8d72495998746c197b1": "e90309c7ba43707667cec5ec69ef676b",
".git/objects/8b/d116387597f917e8c865cdad191e20e68f4519": "3254bc446184ebdee2440f2f1a15292c",
".git/objects/95/41032021477155ebe6858e09546009af89f010": "93a8752f76343b9a21e40e6ae565263e",
".git/objects/96/a895f30b0a1a1cec74131f2b24ee5882ee67f5": "452c51b94535b2b2eac7c42abc8a4859",
".git/objects/a0/b8e781ba1e92badd0f04961385e325a0ea558f": "eb3a2c667d85c32b05f474f2ecfaa84b",
".git/objects/a4/2d24a6781461e20064b9f8ce69bb6ac91c22ff": "ca43a1cf50ae0684934a04b353806068",
".git/objects/b5/5a9c1d9be4fb95583f6ced7feb3ea0cfdcaccd": "451ea3ad4650221f8704d3bcc13e4736",
".git/objects/bc/29207fdb100de6d30200564fbbf6c5a030e60e": "4b84a26cd7888c7b7bcb784663ee63ad",
".git/objects/be/58292bbb0891047bac51e8e7ee876baa7aed57": "a2253de9c834b92c29181e519c8c4c86",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e2/0d227a9e9997d459418c3f80904a99aff995be": "4f0ce5256f815ba4e899b61ead05a3a2",
".git/objects/e3/0da9341aef481a97a51ab544375711bc765071": "844e526ab94a9d524448349aac8c8bfb",
".git/objects/e7/38ba3433ff29027731b67b228920d771a7c762": "098aeab99e87348c1f168981d550f3b3",
".git/objects/e8/ff8d0b0a01543efe7a1f086890b9e0ae79ff6e": "0dd2f6e867fcc0a59c18a97ac714a7cc",
".git/objects/ee/0adc176db62f2bedad548e02f9cd6a2e2d904f": "7f4f8da3ab05bdcd21f856f103ec984f",
".git/objects/pack/pack-3d5514853ccb407ccf695f1292fe52fd5d15c2ee.idx": "81b4d4079cf5aec9c9a0b736feed15b1",
".git/objects/pack/pack-3d5514853ccb407ccf695f1292fe52fd5d15c2ee.pack": "2fc74e82b5caa501d3959b86568b580a",
".git/packed-refs": "cfd4d0c956cd3c75ce633a1052419218",
".git/refs/heads/master": "b29b2b168281526565fb6f06e055a3c1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b29b2b168281526565fb6f06e055a3c1",
"assets/AssetManifest.json": "666aa3ce524269bca58c536efbb51235",
"assets/assets/img/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"assets/assets/img/avatar.png": "bf440fa614654572c9bb9a25ff51db82",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ef87c602dbaf8c89ac7298e34536bcbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6f4da71f202ba74432833321268a4416",
"/": "6f4da71f202ba74432833321268a4416",
"main.dart.js": "82cacfb8d94739be3480b280721cb1d3",
"manifest.json": "5a5d2c5918e640714e1097b0dce45fd7",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"
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
