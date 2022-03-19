'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1c6ca04b653a12ff7e62c000f5aad1e8",
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
".git/index": "558e11514a72f8ade76cab40fb07c2cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b61d68b4e6fc67feacbd90f7bf3a9b6b",
".git/logs/refs/heads/master": "b61d68b4e6fc67feacbd90f7bf3a9b6b",
".git/logs/refs/remotes/origin/HEAD": "8e19f4eba795f96426cdc50401eb8090",
".git/logs/refs/remotes/origin/master": "448dff16d1a2b57cdc69252bd0a6a6b2",
".git/objects/06/d2d6787ef505cbeed8f3e023e1e3106ea2f832": "8e2751abe0f5ad2b8dad5a8551c915db",
".git/objects/07/5b28fb04779a7fc0a2d1931ef45403318dff79": "62391e600bd3f4bb18c4e3b36c8045d9",
".git/objects/08/636244b886c49a66bb16190931a0a9416685a8": "6c3b20929adea0e88083581d2019bfee",
".git/objects/09/60454899ad619105704a60cb10ed84a4181ee9": "1b893e3c79dc69778ce2527a99e6e130",
".git/objects/0b/0a3b24be746c092f240f24082d60c09f124f84": "69cbdd2db6a1b1578e93ebc0846ed2f9",
".git/objects/0b/40b7c7e2c30109988367135eb0e20685c9cbaf": "74794e64866069aa1ed92657fd29fb19",
".git/objects/16/f6b4546099afd23ec96de9176f6b11bc85bbbe": "7c1cc79c65b021ead581f231c18384ba",
".git/objects/20/aeeb3af4c45027420301c653bab77c380c68b2": "23c4cccfe2552d49c502bd412f18d3e4",
".git/objects/24/4f3b4a9d8fe32f7d5b07c653e311b950abf33d": "72a86d0bad8a6016e2facfea090fa484",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/27/c9ccfa1ce65028002342ad2079ffb44d5fefb7": "c6cf804941ddb8305f03114ee2c8ab5f",
".git/objects/2d/0aaa9f6f152d694a63a253ee107a1fee191f08": "5d9a00c86f9baaf655c74c5e7f1a48c6",
".git/objects/45/f607188a3b7b8f7fc9d3b24074858b0fe654f2": "e796604d3e44501d6f56230552751e09",
".git/objects/4f/8b5cd7fa4685bde5c08321dbd94e81619c2ee2": "0261790d93b0e375636289161427644b",
".git/objects/4f/92e34f826bd9f342f69577613759ee43974d4c": "b82fd6a182b7693b26aa0aadabf4a394",
".git/objects/51/a2f04d50e35e6d10f778fdbabc6b9b35214c6a": "012c846997356ecb95d8a722e47edd15",
".git/objects/51/e5b5af92ab94d9e48d7055e3d85c168461df89": "ddd3bee51fe294c61baa8fdd647aceb1",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/969dc34609fc69ef18bb49aa9bcbd0fd19992d": "c9d8675eff777cfc5a57d43f2db10cc9",
".git/objects/57/4f5fa93bcda54d1cbb0bec1afda954337d18fe": "ee74e9c368b4abd17477caa2a77b4f4c",
".git/objects/65/becc460d01baaa299cb55b053b39cdc03f1f11": "7859db178a1ff24c1a479f46a8fcd88d",
".git/objects/6c/117b64a05e3d1dde41b54968f681307e3ced63": "5927773460ab11dc9497bc9e960729e9",
".git/objects/6e/91283acb013dc274d9b55b66341cca44b8eeb2": "67ac668968dbeed67b3211f62b8dfab5",
".git/objects/6f/4cb5f289e56267b944dda3477c8ed9e84c7178": "467832804f29723b9af6cc9f96b5a3c7",
".git/objects/74/9b4fc81c9772035e00f5010e05f12475f9159c": "09f9baefc8f036f8c3601b70098570ca",
".git/objects/78/26a235687f4d91212f5beee9c084e7aa75f5ae": "c6f6fe00b03d4b8bd6df669a3f05cf68",
".git/objects/79/695686a4517db94b451dc5c38a92f9b7278029": "8348ee631044ea161b80366c37e50367",
".git/objects/7b/8b4988779bae0f13c1aa4aa84863669dd2fff1": "d16a84d53bb66a0f457ccdb9a5586a2a",
".git/objects/81/8e35b25ab6ff692ab2a8d72495998746c197b1": "e90309c7ba43707667cec5ec69ef676b",
".git/objects/82/a723af316ff5d87da1fa0502fcb33632d9b67d": "dc1370050695af3f11c6b5afdd3c32cf",
".git/objects/83/6dba5813c141bfa6795f1df520dc4675e52ade": "5517d6c36afd6bfc8e45b616c522cbf5",
".git/objects/8b/d116387597f917e8c865cdad191e20e68f4519": "3254bc446184ebdee2440f2f1a15292c",
".git/objects/8f/2a7d050360491867438fef0412d3261717f3e0": "157d3a33c586c96fd8dc5dcb7a99aec4",
".git/objects/92/2261b536f4bf93bc55086e27bd69a743f286b0": "ceb2a193013e4d9c2ac69571188dcf4c",
".git/objects/94/ff2e250d762beb2fe2684768f7e02a63958485": "f93ed5fe67bbbdd8d17a9bb956a6df0d",
".git/objects/95/41032021477155ebe6858e09546009af89f010": "93a8752f76343b9a21e40e6ae565263e",
".git/objects/95/a121da0e6f230824dc1990902401a6ca121166": "62a08617328f3f457c0a66030e5c3860",
".git/objects/95/f4358624f98ab99fe5d21af9d91fc4b6a2fe26": "ddeb0c52296ad84e1ff866020e8e0ced",
".git/objects/96/a895f30b0a1a1cec74131f2b24ee5882ee67f5": "452c51b94535b2b2eac7c42abc8a4859",
".git/objects/99/a5125e8603f6532ae3041d0afaad2eac0ee452": "155eb10e857cc4d4e9596abea2743229",
".git/objects/9e/3b56038b741d4bcabfccbcedf9eef3e6705597": "0ee3e2fa62298af55a3e69d2c842d267",
".git/objects/a0/b8e781ba1e92badd0f04961385e325a0ea558f": "eb3a2c667d85c32b05f474f2ecfaa84b",
".git/objects/a4/2d24a6781461e20064b9f8ce69bb6ac91c22ff": "ca43a1cf50ae0684934a04b353806068",
".git/objects/a4/bb4c4d136dd2c14a3b3cccb50d29c4f33e18df": "c6a4fa592ecea119b7fd75631e23e9f9",
".git/objects/a6/e7754faca99b7a1995f86f67dbd8e8abd7b69a": "929fb785b682260112ce75ed54ca213f",
".git/objects/b5/5a9c1d9be4fb95583f6ced7feb3ea0cfdcaccd": "451ea3ad4650221f8704d3bcc13e4736",
".git/objects/b5/e9b6a372f135409e080f22002cfce3631839da": "a462e938bd2efdbd8cd583a959712b84",
".git/objects/bc/29207fdb100de6d30200564fbbf6c5a030e60e": "4b84a26cd7888c7b7bcb784663ee63ad",
".git/objects/be/58292bbb0891047bac51e8e7ee876baa7aed57": "a2253de9c834b92c29181e519c8c4c86",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/a378c9b069a1b933291e1a48fce9efba9e8f6e": "5344d33e2496c926fc1a63b2b0aecc96",
".git/objects/c9/dafc193434dc82b2858af8afc6125233415099": "63f6144160abdacde82ab3ab86754f22",
".git/objects/d2/3fb5187f17a2c45b9c6d6f4cf7f2da98270a9b": "9b3edbea22769d695fcfedf38e3fdcd7",
".git/objects/e1/4c3a6f65a1523d29bd56d51d448f49ffaabcb3": "ba49ff05469950d5704d8478dd51bf50",
".git/objects/e2/0d227a9e9997d459418c3f80904a99aff995be": "4f0ce5256f815ba4e899b61ead05a3a2",
".git/objects/e3/0da9341aef481a97a51ab544375711bc765071": "844e526ab94a9d524448349aac8c8bfb",
".git/objects/e4/594c939ca8fcab87497ab806fcb89ddb4603a9": "5b015ccc15e3edf8ff17850974318d74",
".git/objects/e7/38ba3433ff29027731b67b228920d771a7c762": "098aeab99e87348c1f168981d550f3b3",
".git/objects/e7/5c86ff760149ded27439a6c1a99046be3d3cb9": "e3fa324daa67bf01fbe365abc02eb631",
".git/objects/e7/ea7a4bf10b3a8f8cc8aa1a9c788f229fe9178b": "8dbbcf1c0dda004a6bd0ff81753a9813",
".git/objects/e8/ff8d0b0a01543efe7a1f086890b9e0ae79ff6e": "0dd2f6e867fcc0a59c18a97ac714a7cc",
".git/objects/ee/0adc176db62f2bedad548e02f9cd6a2e2d904f": "7f4f8da3ab05bdcd21f856f103ec984f",
".git/objects/f0/190756af38210190d2befc5314460a6a505273": "e98fdaa10adebe0ed48f799f1bebdbbf",
".git/objects/f1/de76e913030f472425ecc922eeaf2012ae73bf": "6f981c8716289b19d66bf97fbf39f71b",
".git/objects/f9/1ba522e4c4d87677b7966a479f23f645cac6a5": "ae13e2690e25783467aac2958691ae22",
".git/objects/pack/pack-3d5514853ccb407ccf695f1292fe52fd5d15c2ee.idx": "81b4d4079cf5aec9c9a0b736feed15b1",
".git/objects/pack/pack-3d5514853ccb407ccf695f1292fe52fd5d15c2ee.pack": "2fc74e82b5caa501d3959b86568b580a",
".git/packed-refs": "cfd4d0c956cd3c75ce633a1052419218",
".git/refs/heads/master": "1881b1231cee095b011ccca3c8020cdd",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1881b1231cee095b011ccca3c8020cdd",
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
"icons/loading.gif": "c8f69f50d3dc11ddc9b42ef3bdffa916",
"index.html": "dc4c3ab926480d8f4d9ee96ff2b0a062",
"/": "dc4c3ab926480d8f4d9ee96ff2b0a062",
"loading.gif": "c8f69f50d3dc11ddc9b42ef3bdffa916",
"main.dart.js": "f4cccd4091769e0c049836e708f5945c",
"manifest.json": "741fee8c46968190a7ceb7d1cb6b4298",
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
