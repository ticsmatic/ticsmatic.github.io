/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","30f6a54d473a41e4b09b6485300e5c6e"],["/about/index.html","de321a8b2d755d8fc755299cef7c3b5c"],["/archives/2020/04/index.html","f5fddeb7712b99045848c13edc344164"],["/archives/2020/05/index.html","fb25a2f74508681b3d857b330d06f1dc"],["/archives/2020/05/page/2/index.html","0fe265d0b839af09cc6f6f4ff62f1295"],["/archives/2020/index.html","00a2788775b23f22ee3fe78032722b3d"],["/archives/2020/page/2/index.html","3fd71e41c39a6066bc73760c2f177cef"],["/archives/2020/page/3/index.html","6cf8740cc938514113c9313809876879"],["/archives/index.html","3083b6edd77b676cf58d0e234f43697a"],["/archives/page/2/index.html","3083b6edd77b676cf58d0e234f43697a"],["/archives/page/3/index.html","3083b6edd77b676cf58d0e234f43697a"],["/baidu_verify_TchHVSjADz.html","7070965f63bad81a52cacf0dbba88357"],["/baidu_verify_WIV2O9P8jO.html","29a171bf2c3b87b657af631c46430c4d"],["/categories/index.html","8ebb8fd4b31723689f8d9229b2fc91ed"],["/categories/ios/index.html","37605600a276bac0123f9866f1ba89b5"],["/css/style.css","7a05a7a0bdb8ec6520ed8240b6d22615"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/google381672dcc63a6da1.html","4c080f4dc49b5f7c43d4dc859b7ab090"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","7d2b49a3592f382b84090c566a9fb02e"],["/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","79a35208f6299bba0be2c81174b25bd6"],["/p/1abf6ce/index.html","3bd23972d917c99507b95a51f267f20f"],["/p/22f526fc/index.html","1749580889e34fed52f4892e860e4e23"],["/p/24a6731c/index.html","d94cc9ea59a9b1237f68bf6e71219117"],["/p/2c49c232/index.html","61e2bd8b4d19866d06e5fdc3c016370e"],["/p/34aa13dd/index.html","b243077633215efe21bea7d2425ffa7c"],["/p/4235a91d/index.html","5109968a3314f3a9b769b759edcd14ea"],["/p/4bdf012b/index.html","23a387d6967fe14f294106ba49c24065"],["/p/4dec9c48/index.html","f5d0f815b54bf9114fd9688e32abfc17"],["/p/5a039b46/index.html","d63cdd3c20058c0ad49a6030afe787d3"],["/p/5ee3d56b/index.html","47e9497581a90b285a839b9ab389242a"],["/p/63797d9b/index.html","e4796e8dea2a3b0e9101f0ba27608202"],["/p/6cb5ab8a/index.html","f140e80043f3e693f6f3c527f520701a"],["/p/6fefa1e2/index.html","f0b209af3e0b7169bd911f3dc3d1e974"],["/p/74ed6556/index.html","b0f9de0c6d36253fe0f3bef1bf31bfa8"],["/p/78c95faf/index.html","4d7222296644acd93e8dbe0ae56830b4"],["/p/95e305cc/index.html","f5542d2c48e037899eb4295f94304511"],["/p/9aa1f76b/index.html","62fbf4e51e5420d1324e0dda68876d85"],["/p/9aea9f9/index.html","d01957c0a3a278ed73940b28a4c3fed3"],["/p/a073543c/index.html","7529e905a15a1c9639692578fb5a97b6"],["/p/a123b137/index.html","84af6f914b95dcb43eb58ab17e466a50"],["/p/a3ade774/index.html","85e98fd296b19c39928180d005fb2be7"],["/p/bff81d76/index.html","ccae8811d6be642be7bab03a4917fcf4"],["/p/d4d0b04c/index.html","0023d3cb3254ea846f61a82aa949067c"],["/p/e15d38f8/index.html","bbe3ea385a4a01cf8b199a4306de71ce"],["/p/e8e2068/index.html","2c42197afcafc791061eb80004b88ef2"],["/p/eb656981/index.html","0cb68ef9711c032965e2b0d5e7371d94"],["/p/ed4b199f/index.html","65649f249002143858a75f6d318fb328"],["/p/ffcce99c/index.html","005222b86625b5b4c1631b672b1c27ff"],["/page/2/index.html","5f09cfc22af3bb0e8e0885d955125161"],["/page/3/index.html","9e245c8e94d6d844692d3567d1109f5f"],["/tags/index.html","b387d724f0381b2de4ac6ba0e4e0cf20"],["/tags/底层/index.html","9cf4fd6f2d6cadd2a8401f0d5ddf320c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







