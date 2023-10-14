globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3f2-IWngBN6R+r1KY5f9LjwbH/Ewmck\"",
    "mtime": "2023-10-14T13:43:07.261Z",
    "size": 1010,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/13r.bd6d7f0a.png": {
    "type": "image/png",
    "etag": "\"21b32-ouYaSkxkGAn1bdSw1IJGQnf14+Q\"",
    "mtime": "2023-10-14T13:43:07.260Z",
    "size": 138034,
    "path": "../public/_nuxt/13r.bd6d7f0a.png"
  },
  "/_nuxt/14r.081ec35d.png": {
    "type": "image/png",
    "etag": "\"1fe7d-cy3IV/ZDLXN5L8jtv6/m2EJ7ClA\"",
    "mtime": "2023-10-14T13:43:07.259Z",
    "size": 130685,
    "path": "../public/_nuxt/14r.081ec35d.png"
  },
  "/_nuxt/14r.fc111c3b.js": {
    "type": "application/javascript",
    "etag": "\"68-tFnVTldIIUFy0vdhL1+hXjFflyU\"",
    "mtime": "2023-10-14T13:43:07.259Z",
    "size": 104,
    "path": "../public/_nuxt/14r.fc111c3b.js"
  },
  "/_nuxt/404.83e52800.png": {
    "type": "image/png",
    "etag": "\"15a70-GJGfc+yAczr5zuFZCAVYfItDU9M\"",
    "mtime": "2023-10-14T13:43:07.259Z",
    "size": 88688,
    "path": "../public/_nuxt/404.83e52800.png"
  },
  "/_nuxt/Ruberoid-Bold.41a97f86.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2670c-DsPwc0zF7+x9cQXp2bR5AWVGiAs\"",
    "mtime": "2023-10-14T13:43:07.258Z",
    "size": 157452,
    "path": "../public/_nuxt/Ruberoid-Bold.41a97f86.eot"
  },
  "/_nuxt/Ruberoid-Bold.88352391.woff2": {
    "type": "font/woff2",
    "etag": "\"c1d0-4nNAg57bB/q3mzjjYJyNfvxP21Y\"",
    "mtime": "2023-10-14T13:43:07.258Z",
    "size": 49616,
    "path": "../public/_nuxt/Ruberoid-Bold.88352391.woff2"
  },
  "/_nuxt/Ruberoid-Bold.b7e9b113.ttf": {
    "type": "font/ttf",
    "etag": "\"2665c-v/oUrtH0VKsFJpVT61gbdRNRTm8\"",
    "mtime": "2023-10-14T13:43:07.258Z",
    "size": 157276,
    "path": "../public/_nuxt/Ruberoid-Bold.b7e9b113.ttf"
  },
  "/_nuxt/Ruberoid-Bold.d4d2392b.woff": {
    "type": "font/woff",
    "etag": "\"11670-9T+KlkMFO/UrPMQhzac+Bj1Q0CQ\"",
    "mtime": "2023-10-14T13:43:07.257Z",
    "size": 71280,
    "path": "../public/_nuxt/Ruberoid-Bold.d4d2392b.woff"
  },
  "/_nuxt/Ruberoid-BoldOblique.44fe8361.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"29634-hWJTNICVcQ97Jpt4peleIOLAJUc\"",
    "mtime": "2023-10-14T13:43:07.257Z",
    "size": 169524,
    "path": "../public/_nuxt/Ruberoid-BoldOblique.44fe8361.eot"
  },
  "/_nuxt/Ruberoid-BoldOblique.7c9a8784.woff": {
    "type": "font/woff",
    "etag": "\"129e8-9ZoTNvMsaPake4SmRZhN1dxFS2g\"",
    "mtime": "2023-10-14T13:43:07.256Z",
    "size": 76264,
    "path": "../public/_nuxt/Ruberoid-BoldOblique.7c9a8784.woff"
  },
  "/_nuxt/Ruberoid-BoldOblique.94ceda01.woff2": {
    "type": "font/woff2",
    "etag": "\"cda0-sdU/vtng0939DZEvSE6kkAMlL14\"",
    "mtime": "2023-10-14T13:43:07.256Z",
    "size": 52640,
    "path": "../public/_nuxt/Ruberoid-BoldOblique.94ceda01.woff2"
  },
  "/_nuxt/Ruberoid-BoldOblique.ef28e681.ttf": {
    "type": "font/ttf",
    "etag": "\"29564-5HrWSjQJOHN0vPgT7J+ds5wcBvQ\"",
    "mtime": "2023-10-14T13:43:07.255Z",
    "size": 169316,
    "path": "../public/_nuxt/Ruberoid-BoldOblique.ef28e681.ttf"
  },
  "/_nuxt/Ruberoid-ExtraBold.4ca19db8.ttf": {
    "type": "font/ttf",
    "etag": "\"274ec-vX7oqS7EC/u/DfWqA5lQsB6RaR8\"",
    "mtime": "2023-10-14T13:43:07.255Z",
    "size": 161004,
    "path": "../public/_nuxt/Ruberoid-ExtraBold.4ca19db8.ttf"
  },
  "/_nuxt/Ruberoid-ExtraBold.7091aef7.woff": {
    "type": "font/woff",
    "etag": "\"11318-WScjn9+P7J2SfhoBn+yZcIPZias\"",
    "mtime": "2023-10-14T13:43:07.255Z",
    "size": 70424,
    "path": "../public/_nuxt/Ruberoid-ExtraBold.7091aef7.woff"
  },
  "/_nuxt/Ruberoid-ExtraBold.765e4d75.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"275b4-GtkhOWOQvoHdZGaBLdutZbe7iSo\"",
    "mtime": "2023-10-14T13:43:07.254Z",
    "size": 161204,
    "path": "../public/_nuxt/Ruberoid-ExtraBold.765e4d75.eot"
  },
  "/_nuxt/Ruberoid-ExtraBold.f22a7cde.woff2": {
    "type": "font/woff2",
    "etag": "\"bcc0-iyrb/NeSF/AHW1TpGnMxiugBcew\"",
    "mtime": "2023-10-14T13:43:07.254Z",
    "size": 48320,
    "path": "../public/_nuxt/Ruberoid-ExtraBold.f22a7cde.woff2"
  },
  "/_nuxt/Ruberoid-ExtraBoldOblique.1de58ddb.ttf": {
    "type": "font/ttf",
    "etag": "\"29990-rq9hzE5Zp/Wxy+Iwqnob+w8WVLI\"",
    "mtime": "2023-10-14T13:43:07.254Z",
    "size": 170384,
    "path": "../public/_nuxt/Ruberoid-ExtraBoldOblique.1de58ddb.ttf"
  },
  "/_nuxt/Ruberoid-ExtraBoldOblique.7247f0ad.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"29a78-yGx6BoHaRevEZYAF/BcmZnOwdHQ\"",
    "mtime": "2023-10-14T13:43:07.254Z",
    "size": 170616,
    "path": "../public/_nuxt/Ruberoid-ExtraBoldOblique.7247f0ad.eot"
  },
  "/_nuxt/Ruberoid-ExtraBoldOblique.c230f3f4.woff": {
    "type": "font/woff",
    "etag": "\"12328-GhY3RCpxFXgF+X8i/7QOWormOk8\"",
    "mtime": "2023-10-14T13:43:07.253Z",
    "size": 74536,
    "path": "../public/_nuxt/Ruberoid-ExtraBoldOblique.c230f3f4.woff"
  },
  "/_nuxt/Ruberoid-ExtraBoldOblique.e98fb959.woff2": {
    "type": "font/woff2",
    "etag": "\"c568-EHs5hh8Xtm+frU2aNDeNkycBVCY\"",
    "mtime": "2023-10-14T13:43:07.253Z",
    "size": 50536,
    "path": "../public/_nuxt/Ruberoid-ExtraBoldOblique.e98fb959.woff2"
  },
  "/_nuxt/Ruberoid-ExtraLight.075024c3.ttf": {
    "type": "font/ttf",
    "etag": "\"24924-EhV11wSN0SZRRboklVlNPqCmQ7Y\"",
    "mtime": "2023-10-14T13:43:07.253Z",
    "size": 149796,
    "path": "../public/_nuxt/Ruberoid-ExtraLight.075024c3.ttf"
  },
  "/_nuxt/Ruberoid-ExtraLight.0810fe02.woff2": {
    "type": "font/woff2",
    "etag": "\"bdc4-hUz3sPoBI8trTNU/Jg1zNSt4lds\"",
    "mtime": "2023-10-14T13:43:07.253Z",
    "size": 48580,
    "path": "../public/_nuxt/Ruberoid-ExtraLight.0810fe02.woff2"
  },
  "/_nuxt/Ruberoid-ExtraLight.bdfdaf09.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"249f0-6Iqb190cN8UXZ74UBtYBTI/Iq9Q\"",
    "mtime": "2023-10-14T13:43:07.252Z",
    "size": 150000,
    "path": "../public/_nuxt/Ruberoid-ExtraLight.bdfdaf09.eot"
  },
  "/_nuxt/Ruberoid-ExtraLight.e19357f2.woff": {
    "type": "font/woff",
    "etag": "\"10f94-gE7GnAWnh8DSPFHdkiwySndQEWo\"",
    "mtime": "2023-10-14T13:43:07.252Z",
    "size": 69524,
    "path": "../public/_nuxt/Ruberoid-ExtraLight.e19357f2.woff"
  },
  "/_nuxt/Ruberoid-ExtraLightOblique.0346b98b.woff": {
    "type": "font/woff",
    "etag": "\"11e58-xmk9KYRpPCU47WL5AAys3w3JzSA\"",
    "mtime": "2023-10-14T13:43:07.252Z",
    "size": 73304,
    "path": "../public/_nuxt/Ruberoid-ExtraLightOblique.0346b98b.woff"
  },
  "/_nuxt/Ruberoid-ExtraLightOblique.05d39653.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"26558-bexWLT0nde3HbEz6hUCFar8tZaE\"",
    "mtime": "2023-10-14T13:43:07.251Z",
    "size": 157016,
    "path": "../public/_nuxt/Ruberoid-ExtraLightOblique.05d39653.eot"
  },
  "/_nuxt/Ruberoid-ExtraLightOblique.19eba030.woff2": {
    "type": "font/woff2",
    "etag": "\"c7d0-wEABgVL8YZenDde8YUIuiHjtnLE\"",
    "mtime": "2023-10-14T13:43:07.251Z",
    "size": 51152,
    "path": "../public/_nuxt/Ruberoid-ExtraLightOblique.19eba030.woff2"
  },
  "/_nuxt/Ruberoid-ExtraLightOblique.69a6409d.ttf": {
    "type": "font/ttf",
    "etag": "\"2646c-zJHi3QqQCyWYjAusEEMlvA1TgGw\"",
    "mtime": "2023-10-14T13:43:07.251Z",
    "size": 156780,
    "path": "../public/_nuxt/Ruberoid-ExtraLightOblique.69a6409d.ttf"
  },
  "/_nuxt/Ruberoid-Light.421e66a4.ttf": {
    "type": "font/ttf",
    "etag": "\"25c3c-4susLqTWr3ioCTUXXaeOMcy5aBo\"",
    "mtime": "2023-10-14T13:43:07.251Z",
    "size": 154684,
    "path": "../public/_nuxt/Ruberoid-Light.421e66a4.ttf"
  },
  "/_nuxt/Ruberoid-Light.d5ba6997.woff": {
    "type": "font/woff",
    "etag": "\"112e8-T13G3WqwmppFPtdxSjhM1ZwEBBU\"",
    "mtime": "2023-10-14T13:43:07.250Z",
    "size": 70376,
    "path": "../public/_nuxt/Ruberoid-Light.d5ba6997.woff"
  },
  "/_nuxt/Ruberoid-Light.d6224b72.woff2": {
    "type": "font/woff2",
    "etag": "\"c010-x4GQ0zZOtOgq9APEl1HfGW/BuqY\"",
    "mtime": "2023-10-14T13:43:07.250Z",
    "size": 49168,
    "path": "../public/_nuxt/Ruberoid-Light.d6224b72.woff2"
  },
  "/_nuxt/Ruberoid-Light.f54928a6.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"25cf0-Ynm5tcP8VtYt5zEXHoYAu5utXVw\"",
    "mtime": "2023-10-14T13:43:07.250Z",
    "size": 154864,
    "path": "../public/_nuxt/Ruberoid-Light.f54928a6.eot"
  },
  "/_nuxt/Ruberoid-LightOblique.74f6d4c2.ttf": {
    "type": "font/ttf",
    "etag": "\"27ff8-AKkfGnOyqDreRQqbf7DVq7wiw04\"",
    "mtime": "2023-10-14T13:43:07.249Z",
    "size": 163832,
    "path": "../public/_nuxt/Ruberoid-LightOblique.74f6d4c2.ttf"
  },
  "/_nuxt/Ruberoid-LightOblique.80869ee6.woff": {
    "type": "font/woff",
    "etag": "\"1235c-ZoIn6OaGNDke+L3BXjwoyzZ/wv0\"",
    "mtime": "2023-10-14T13:43:07.249Z",
    "size": 74588,
    "path": "../public/_nuxt/Ruberoid-LightOblique.80869ee6.woff"
  },
  "/_nuxt/Ruberoid-LightOblique.9b591d6f.woff2": {
    "type": "font/woff2",
    "etag": "\"ca9c-J42K6rX0Mwd9QsPNQn4sYDbJglE\"",
    "mtime": "2023-10-14T13:43:07.249Z",
    "size": 51868,
    "path": "../public/_nuxt/Ruberoid-LightOblique.9b591d6f.woff2"
  },
  "/_nuxt/Ruberoid-LightOblique.c16f248c.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"280cc-w3Lp0vW3F3LM/T91yRH9Vl9/qFw\"",
    "mtime": "2023-10-14T13:43:07.249Z",
    "size": 164044,
    "path": "../public/_nuxt/Ruberoid-LightOblique.c16f248c.eot"
  },
  "/_nuxt/Ruberoid-Medium.389afd65.ttf": {
    "type": "font/ttf",
    "etag": "\"24f48-0DHazhfyaoL2z5gdtcWWWZWch+Y\"",
    "mtime": "2023-10-14T13:43:07.248Z",
    "size": 151368,
    "path": "../public/_nuxt/Ruberoid-Medium.389afd65.ttf"
  },
  "/_nuxt/Ruberoid-Medium.7b09d0a2.woff2": {
    "type": "font/woff2",
    "etag": "\"bbac-V/rerdk0Ar0Z7Cv04Bql2nWmxvU\"",
    "mtime": "2023-10-14T13:43:07.248Z",
    "size": 48044,
    "path": "../public/_nuxt/Ruberoid-Medium.7b09d0a2.woff2"
  },
  "/_nuxt/Ruberoid-Medium.8f487459.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"25000-4jc2a601p8A4kFujgBiQ5ZPS8fs\"",
    "mtime": "2023-10-14T13:43:07.248Z",
    "size": 151552,
    "path": "../public/_nuxt/Ruberoid-Medium.8f487459.eot"
  },
  "/_nuxt/Ruberoid-Medium.c2e94d3e.woff": {
    "type": "font/woff",
    "etag": "\"10ed0-0jEFDaNrdJgLJDfAYOZifxMxEi8\"",
    "mtime": "2023-10-14T13:43:07.248Z",
    "size": 69328,
    "path": "../public/_nuxt/Ruberoid-Medium.c2e94d3e.woff"
  },
  "/_nuxt/Ruberoid-MediumOblique.5e87c786.ttf": {
    "type": "font/ttf",
    "etag": "\"2738c-pgfTE/PGcNlEZoYoGVzS0cRryBY\"",
    "mtime": "2023-10-14T13:43:07.247Z",
    "size": 160652,
    "path": "../public/_nuxt/Ruberoid-MediumOblique.5e87c786.ttf"
  },
  "/_nuxt/Ruberoid-MediumOblique.6557cb7f.woff": {
    "type": "font/woff",
    "etag": "\"11fd0-QfTr8CMhtEEcvi7opevtc17bgMQ\"",
    "mtime": "2023-10-14T13:43:07.247Z",
    "size": 73680,
    "path": "../public/_nuxt/Ruberoid-MediumOblique.6557cb7f.woff"
  },
  "/_nuxt/Ruberoid-MediumOblique.cabdbf97.woff2": {
    "type": "font/woff2",
    "etag": "\"c720-DXLtDwjmWlYqqATjG+7Pvo+v3MI\"",
    "mtime": "2023-10-14T13:43:07.247Z",
    "size": 50976,
    "path": "../public/_nuxt/Ruberoid-MediumOblique.cabdbf97.woff2"
  },
  "/_nuxt/Ruberoid-MediumOblique.de139091.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"27464-GjJVkXNXNvXgfL5EjNx8Cl8W2ng\"",
    "mtime": "2023-10-14T13:43:07.247Z",
    "size": 160868,
    "path": "../public/_nuxt/Ruberoid-MediumOblique.de139091.eot"
  },
  "/_nuxt/Ruberoid-Oblique.18a9181c.ttf": {
    "type": "font/ttf",
    "etag": "\"2845c-FjSoaoEy3GT7ANPI+qEvhe/FHvc\"",
    "mtime": "2023-10-14T13:43:07.246Z",
    "size": 164956,
    "path": "../public/_nuxt/Ruberoid-Oblique.18a9181c.ttf"
  },
  "/_nuxt/Ruberoid-Oblique.5acf819a.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"28518-vE+Kt7BP6yT1s2V5M+RtPOiFcpQ\"",
    "mtime": "2023-10-14T13:43:07.246Z",
    "size": 165144,
    "path": "../public/_nuxt/Ruberoid-Oblique.5acf819a.eot"
  },
  "/_nuxt/Ruberoid-Oblique.8f140733.woff2": {
    "type": "font/woff2",
    "etag": "\"c98c-t3m7wsurs/kbYQhgyLOdS4pKmTI\"",
    "mtime": "2023-10-14T13:43:07.246Z",
    "size": 51596,
    "path": "../public/_nuxt/Ruberoid-Oblique.8f140733.woff2"
  },
  "/_nuxt/Ruberoid-Oblique.9aa9caf8.woff": {
    "type": "font/woff",
    "etag": "\"12334-ooTp3WgeX5eUWAcg4HTZd0DdNM0\"",
    "mtime": "2023-10-14T13:43:07.246Z",
    "size": 74548,
    "path": "../public/_nuxt/Ruberoid-Oblique.9aa9caf8.woff"
  },
  "/_nuxt/Ruberoid-Regular.315ced76.woff2": {
    "type": "font/woff2",
    "etag": "\"bfbc-gVqjLtfn8uF26AYensxF/zVZJ8c\"",
    "mtime": "2023-10-14T13:43:07.245Z",
    "size": 49084,
    "path": "../public/_nuxt/Ruberoid-Regular.315ced76.woff2"
  },
  "/_nuxt/Ruberoid-Regular.a8e0a099.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"25954-BfmyCNvgDkSENg4uSJDV77PPUz4\"",
    "mtime": "2023-10-14T13:43:07.245Z",
    "size": 153940,
    "path": "../public/_nuxt/Ruberoid-Regular.a8e0a099.eot"
  },
  "/_nuxt/Ruberoid-Regular.df23c590.woff": {
    "type": "font/woff",
    "etag": "\"11284-9OW/UMWeno+safmMAqCud6QGCwA\"",
    "mtime": "2023-10-14T13:43:07.245Z",
    "size": 70276,
    "path": "../public/_nuxt/Ruberoid-Regular.df23c590.woff"
  },
  "/_nuxt/Ruberoid-Regular.e918757c.ttf": {
    "type": "font/ttf",
    "etag": "\"258b4-R6gkd1fTsmJfjioEJ81NcvwK8Ig\"",
    "mtime": "2023-10-14T13:43:07.244Z",
    "size": 153780,
    "path": "../public/_nuxt/Ruberoid-Regular.e918757c.ttf"
  },
  "/_nuxt/Ruberoid-SemiBold.59318e4e.woff2": {
    "type": "font/woff2",
    "etag": "\"c270-z7Qo95VGvkEcGjJRNykDkSERy1g\"",
    "mtime": "2023-10-14T13:43:07.244Z",
    "size": 49776,
    "path": "../public/_nuxt/Ruberoid-SemiBold.59318e4e.woff2"
  },
  "/_nuxt/Ruberoid-SemiBold.773d830c.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2648c-frQEctOQi5GIkHSfZdKgjlWsldk\"",
    "mtime": "2023-10-14T13:43:07.243Z",
    "size": 156812,
    "path": "../public/_nuxt/Ruberoid-SemiBold.773d830c.eot"
  },
  "/_nuxt/Ruberoid-SemiBold.96a6562e.woff": {
    "type": "font/woff",
    "etag": "\"11770-2i1Vwc7xe0u6tjnVTXk1lyxF14w\"",
    "mtime": "2023-10-14T13:43:07.243Z",
    "size": 71536,
    "path": "../public/_nuxt/Ruberoid-SemiBold.96a6562e.woff"
  },
  "/_nuxt/Ruberoid-SemiBold.a5ba9f83.ttf": {
    "type": "font/ttf",
    "etag": "\"263c8-Awtr6q4fCls0qT7NgQqC/T/ZAE4\"",
    "mtime": "2023-10-14T13:43:07.243Z",
    "size": 156616,
    "path": "../public/_nuxt/Ruberoid-SemiBold.a5ba9f83.ttf"
  },
  "/_nuxt/Ruberoid-SemiBoldOblique.a4c2272f.ttf": {
    "type": "font/ttf",
    "etag": "\"28d1c-tXeXbCVQjcO3g6oQlXtI0DkFP1U\"",
    "mtime": "2023-10-14T13:43:07.242Z",
    "size": 167196,
    "path": "../public/_nuxt/Ruberoid-SemiBoldOblique.a4c2272f.ttf"
  },
  "/_nuxt/Ruberoid-SemiBoldOblique.a7b92317.woff2": {
    "type": "font/woff2",
    "etag": "\"cbb8-L1HW9Dm5mWlYpqO7aw0cwhTV7IM\"",
    "mtime": "2023-10-14T13:43:07.242Z",
    "size": 52152,
    "path": "../public/_nuxt/Ruberoid-SemiBoldOblique.a7b92317.woff2"
  },
  "/_nuxt/Ruberoid-SemiBoldOblique.b66c2499.woff": {
    "type": "font/woff",
    "etag": "\"1280c-vRD/itT09FI7Ce4onQjCcllfTA8\"",
    "mtime": "2023-10-14T13:43:07.242Z",
    "size": 75788,
    "path": "../public/_nuxt/Ruberoid-SemiBoldOblique.b66c2499.woff"
  },
  "/_nuxt/Ruberoid-SemiBoldOblique.d775ff5e.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"28e00-oqc3VJk0Rt5Lm4lHpfA7pXCWDOg\"",
    "mtime": "2023-10-14T13:43:07.241Z",
    "size": 167424,
    "path": "../public/_nuxt/Ruberoid-SemiBoldOblique.d775ff5e.eot"
  },
  "/_nuxt/Ruberoid-Thin.1b5d088c.ttf": {
    "type": "font/ttf",
    "etag": "\"2455c-Lxk8E0OQRO+vyMw4BkJTh4yifDs\"",
    "mtime": "2023-10-14T13:43:07.241Z",
    "size": 148828,
    "path": "../public/_nuxt/Ruberoid-Thin.1b5d088c.ttf"
  },
  "/_nuxt/Ruberoid-Thin.6f40322a.woff2": {
    "type": "font/woff2",
    "etag": "\"b47c-CGe/7uXiP3+gt3jRZH6pnx0yS+c\"",
    "mtime": "2023-10-14T13:43:07.240Z",
    "size": 46204,
    "path": "../public/_nuxt/Ruberoid-Thin.6f40322a.woff2"
  },
  "/_nuxt/Ruberoid-Thin.70266b04.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2460c-dV37O30utswt+JimikX5iMDO0iQ\"",
    "mtime": "2023-10-14T13:43:07.240Z",
    "size": 149004,
    "path": "../public/_nuxt/Ruberoid-Thin.70266b04.eot"
  },
  "/_nuxt/Ruberoid-Thin.caac774c.woff": {
    "type": "font/woff",
    "etag": "\"104f8-Dguo6vs6+N9ej3o17w9PuHvMcu8\"",
    "mtime": "2023-10-14T13:43:07.240Z",
    "size": 66808,
    "path": "../public/_nuxt/Ruberoid-Thin.caac774c.woff"
  },
  "/_nuxt/Ruberoid-ThinOblique.557bcfdc.ttf": {
    "type": "font/ttf",
    "etag": "\"25eb8-ATPP3+yKoyX0U+4lhX8Pgd+XiJY\"",
    "mtime": "2023-10-14T13:43:07.239Z",
    "size": 155320,
    "path": "../public/_nuxt/Ruberoid-ThinOblique.557bcfdc.ttf"
  },
  "/_nuxt/Ruberoid-ThinOblique.55d9ce57.woff2": {
    "type": "font/woff2",
    "etag": "\"bc54-LrOiJiWG/o8xSDrAJ0e0DHyJVSs\"",
    "mtime": "2023-10-14T13:43:07.239Z",
    "size": 48212,
    "path": "../public/_nuxt/Ruberoid-ThinOblique.55d9ce57.woff2"
  },
  "/_nuxt/Ruberoid-ThinOblique.9f98f02a.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"25f88-LiCp36/dfz+x+rQ44VmV2yQQhk8\"",
    "mtime": "2023-10-14T13:43:07.239Z",
    "size": 155528,
    "path": "../public/_nuxt/Ruberoid-ThinOblique.9f98f02a.eot"
  },
  "/_nuxt/Ruberoid-ThinOblique.d30957fe.woff": {
    "type": "font/woff",
    "etag": "\"11268-vfRmRu3BacIQByjo1e0HM2RvUTg\"",
    "mtime": "2023-10-14T13:43:07.238Z",
    "size": 70248,
    "path": "../public/_nuxt/Ruberoid-ThinOblique.d30957fe.woff"
  },
  "/_nuxt/Ruberoid-UltraLight.457d7d68.ttf": {
    "type": "font/ttf",
    "etag": "\"25230-oJTdXnEjhvEwWGIodwaA4sqinQg\"",
    "mtime": "2023-10-14T13:43:07.238Z",
    "size": 152112,
    "path": "../public/_nuxt/Ruberoid-UltraLight.457d7d68.ttf"
  },
  "/_nuxt/Ruberoid-UltraLight.4f747045.woff2": {
    "type": "font/woff2",
    "etag": "\"c0ac-bZdGGGysno/1y2O0EzyzjI6b7P4\"",
    "mtime": "2023-10-14T13:43:07.238Z",
    "size": 49324,
    "path": "../public/_nuxt/Ruberoid-UltraLight.4f747045.woff2"
  },
  "/_nuxt/Ruberoid-UltraLight.a25ef4ed.woff": {
    "type": "font/woff",
    "etag": "\"11364-+UlGpwRW/h+328LXdxJdnz8vo+k\"",
    "mtime": "2023-10-14T13:43:07.238Z",
    "size": 70500,
    "path": "../public/_nuxt/Ruberoid-UltraLight.a25ef4ed.woff"
  },
  "/_nuxt/Ruberoid-UltraLight.fc1a72b1.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"252fc-1RPK95Xpa/FHRvS9OaqCqka1QpQ\"",
    "mtime": "2023-10-14T13:43:07.237Z",
    "size": 152316,
    "path": "../public/_nuxt/Ruberoid-UltraLight.fc1a72b1.eot"
  },
  "/_nuxt/Ruberoid-UltraLightOblique.6b086e09.ttf": {
    "type": "font/ttf",
    "etag": "\"26d68-6cHijVuJ0q53pABArZrSzF8Plgk\"",
    "mtime": "2023-10-14T13:43:07.237Z",
    "size": 159080,
    "path": "../public/_nuxt/Ruberoid-UltraLightOblique.6b086e09.ttf"
  },
  "/_nuxt/Ruberoid-UltraLightOblique.c04da7c1.woff": {
    "type": "font/woff",
    "etag": "\"11fbc-C+QccAh8rXs2bH27MwEGTNdn8lg\"",
    "mtime": "2023-10-14T13:43:07.237Z",
    "size": 73660,
    "path": "../public/_nuxt/Ruberoid-UltraLightOblique.c04da7c1.woff"
  },
  "/_nuxt/Ruberoid-UltraLightOblique.df371174.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"26e54-FeRzUvb3uD7ZHZPBSWwylHoV+1Q\"",
    "mtime": "2023-10-14T13:43:07.236Z",
    "size": 159316,
    "path": "../public/_nuxt/Ruberoid-UltraLightOblique.df371174.eot"
  },
  "/_nuxt/Ruberoid-UltraLightOblique.f9102cef.woff2": {
    "type": "font/woff2",
    "etag": "\"c8a0-v07VDkX8JbE2jihv9RwoJRVklok\"",
    "mtime": "2023-10-14T13:43:07.236Z",
    "size": 51360,
    "path": "../public/_nuxt/Ruberoid-UltraLightOblique.f9102cef.woff2"
  },
  "/_nuxt/TheCont.099e8059.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"da-SuoazBfW3Pg52e5cnPYEtWgZFcc\"",
    "mtime": "2023-10-14T13:43:07.236Z",
    "size": 218,
    "path": "../public/_nuxt/TheCont.099e8059.css"
  },
  "/_nuxt/TheCont.8cbc6c4e.js": {
    "type": "application/javascript",
    "etag": "\"10a6-G6XE5gS9IcNy6iUlmGR0F1w+KKQ\"",
    "mtime": "2023-10-14T13:43:07.235Z",
    "size": 4262,
    "path": "../public/_nuxt/TheCont.8cbc6c4e.js"
  },
  "/_nuxt/TheGallery.2ebb110d.js": {
    "type": "application/javascript",
    "etag": "\"c20-8gLcKyl5kpcueE2FWLb/yvoq164\"",
    "mtime": "2023-10-14T13:43:07.215Z",
    "size": 3104,
    "path": "../public/_nuxt/TheGallery.2ebb110d.js"
  },
  "/_nuxt/TheNums.ce119ffb.js": {
    "type": "application/javascript",
    "etag": "\"469-0zFvbZ+5MrhANxIYQVy6ETOKJAw\"",
    "mtime": "2023-10-14T13:43:07.214Z",
    "size": 1129,
    "path": "../public/_nuxt/TheNums.ce119ffb.js"
  },
  "/_nuxt/XY.982e4df9.jpeg": {
    "type": "image/jpeg",
    "etag": "\"23623-gZjARp4+vTSItAlNB3I7TeX81vc\"",
    "mtime": "2023-10-14T13:43:07.213Z",
    "size": 144931,
    "path": "../public/_nuxt/XY.982e4df9.jpeg"
  },
  "/_nuxt/about.d7732311.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6d3-7vzPaF6nUCL3Q9dXsDTgZVMDyTY\"",
    "mtime": "2023-10-14T13:43:07.213Z",
    "size": 1747,
    "path": "../public/_nuxt/about.d7732311.css"
  },
  "/_nuxt/about.f1158c86.js": {
    "type": "application/javascript",
    "etag": "\"278e-l0Kq/tUieTosbfdtG6rnWK5pluk\"",
    "mtime": "2023-10-14T13:43:07.212Z",
    "size": 10126,
    "path": "../public/_nuxt/about.f1158c86.js"
  },
  "/_nuxt/avatar.7cb5f1b7.png": {
    "type": "image/png",
    "etag": "\"2914d-zi0WVihckTaIlGGd0r5vKm+LE94\"",
    "mtime": "2023-10-14T13:43:07.212Z",
    "size": 168269,
    "path": "../public/_nuxt/avatar.7cb5f1b7.png"
  },
  "/_nuxt/body.f9ce0388.svg": {
    "type": "image/svg+xml",
    "etag": "\"4142-cDss1hZnlDeSQMVaJRvR4nl7lSw\"",
    "mtime": "2023-10-14T13:43:07.212Z",
    "size": 16706,
    "path": "../public/_nuxt/body.f9ce0388.svg"
  },
  "/_nuxt/bot.47fc9e0c.svg": {
    "type": "image/svg+xml",
    "etag": "\"43a1-Sof7ctd4K2dfOXLLXK9xb1hWr/A\"",
    "mtime": "2023-10-14T13:43:07.211Z",
    "size": 17313,
    "path": "../public/_nuxt/bot.47fc9e0c.svg"
  },
  "/_nuxt/boy.5492cc36.png": {
    "type": "image/png",
    "etag": "\"1b0d-b+rq7CXmXTvsSRzCYGdgfwzx34Y\"",
    "mtime": "2023-10-14T13:43:07.211Z",
    "size": 6925,
    "path": "../public/_nuxt/boy.5492cc36.png"
  },
  "/_nuxt/contacts.3e9169a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e-5HQ5V3o6FNwU8MjUvsW32n4rJ+4\"",
    "mtime": "2023-10-14T13:43:07.211Z",
    "size": 126,
    "path": "../public/_nuxt/contacts.3e9169a2.css"
  },
  "/_nuxt/contacts.5012f28a.js": {
    "type": "application/javascript",
    "etag": "\"144-/fO1XedTuF8HDstpMO7RRniPnqA\"",
    "mtime": "2023-10-14T13:43:07.211Z",
    "size": 324,
    "path": "../public/_nuxt/contacts.5012f28a.js"
  },
  "/_nuxt/design.0cfe0b0f.js": {
    "type": "application/javascript",
    "etag": "\"1bfd-X4V95kQ+9otJBAaEuJZBpiAeX9Y\"",
    "mtime": "2023-10-14T13:43:07.211Z",
    "size": 7165,
    "path": "../public/_nuxt/design.0cfe0b0f.js"
  },
  "/_nuxt/design.eaa6b619.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"371-RLRjdQZt/Ll/UyPWbbLmAVaDktI\"",
    "mtime": "2023-10-14T13:43:07.210Z",
    "size": 881,
    "path": "../public/_nuxt/design.eaa6b619.css"
  },
  "/_nuxt/dev.7177d937.js": {
    "type": "application/javascript",
    "etag": "\"4fa9-PqLkYCeyygJvvFUGFLYgskHjCqU\"",
    "mtime": "2023-10-14T13:43:07.210Z",
    "size": 20393,
    "path": "../public/_nuxt/dev.7177d937.js"
  },
  "/_nuxt/dev.7f0708ab.jpg": {
    "type": "image/jpeg",
    "etag": "\"153fe-gQ2OrMSmxVlXl932kR1XSC35VWQ\"",
    "mtime": "2023-10-14T13:43:07.210Z",
    "size": 87038,
    "path": "../public/_nuxt/dev.7f0708ab.jpg"
  },
  "/_nuxt/dev.81adec18.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7c5-XHRoqLcQ0pikKKHqu57zQy1sfrU\"",
    "mtime": "2023-10-14T13:43:07.208Z",
    "size": 1989,
    "path": "../public/_nuxt/dev.81adec18.css"
  },
  "/_nuxt/entry.50674d38.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"93c6-3l2r2zLl92BuxKo+oAqxyqj+y9k\"",
    "mtime": "2023-10-14T13:43:07.208Z",
    "size": 37830,
    "path": "../public/_nuxt/entry.50674d38.css"
  },
  "/_nuxt/entry.bd6f954d.js": {
    "type": "application/javascript",
    "etag": "\"26bec-0OVy1YT6t2jefP8J9AnaazlR83I\"",
    "mtime": "2023-10-14T13:43:07.208Z",
    "size": 158700,
    "path": "../public/_nuxt/entry.bd6f954d.js"
  },
  "/_nuxt/error-component.5b6d69df.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"165-cRKwcVjdOftasZqBBjLGgCd0A68\"",
    "mtime": "2023-10-14T13:43:07.208Z",
    "size": 357,
    "path": "../public/_nuxt/error-component.5b6d69df.css"
  },
  "/_nuxt/error-component.f58251e9.js": {
    "type": "application/javascript",
    "etag": "\"383-RUSvXJHWa9V5w43NKtNW9unvMgs\"",
    "mtime": "2023-10-14T13:43:07.208Z",
    "size": 899,
    "path": "../public/_nuxt/error-component.f58251e9.js"
  },
  "/_nuxt/features.c9a6db6a.svg": {
    "type": "image/svg+xml",
    "etag": "\"1220-yYRDnTt3WFx5/c6bKvekl/psG5Y\"",
    "mtime": "2023-10-14T13:43:07.206Z",
    "size": 4640,
    "path": "../public/_nuxt/features.c9a6db6a.svg"
  },
  "/_nuxt/fig.71286a88.png": {
    "type": "image/png",
    "etag": "\"d164-XWYe9BKj52yeBDR6qF9oyvoDdI8\"",
    "mtime": "2023-10-14T13:43:07.205Z",
    "size": 53604,
    "path": "../public/_nuxt/fig.71286a88.png"
  },
  "/_nuxt/graphic.41bfbb7e.svg": {
    "type": "image/svg+xml",
    "etag": "\"f3ac-kbALCKKYLH7NFg6rjZPmVK1aNoU\"",
    "mtime": "2023-10-14T13:43:07.205Z",
    "size": 62380,
    "path": "../public/_nuxt/graphic.41bfbb7e.svg"
  },
  "/_nuxt/headphones.247f513f.png": {
    "type": "image/png",
    "etag": "\"2497-x6I5/szPldNZi2lw3HO318b4iN4\"",
    "mtime": "2023-10-14T13:43:07.205Z",
    "size": 9367,
    "path": "../public/_nuxt/headphones.247f513f.png"
  },
  "/_nuxt/index.a8f47da9.js": {
    "type": "application/javascript",
    "etag": "\"24b4-Pj6MKDaUqCX/lXYb7xbsMZoca2Q\"",
    "mtime": "2023-10-14T13:43:07.205Z",
    "size": 9396,
    "path": "../public/_nuxt/index.a8f47da9.js"
  },
  "/_nuxt/index.eb3b1287.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b86-tYseYe0jO1MSWf1ffFStSda1iZ4\"",
    "mtime": "2023-10-14T13:43:07.204Z",
    "size": 2950,
    "path": "../public/_nuxt/index.eb3b1287.css"
  },
  "/_nuxt/money.72750db5.png": {
    "type": "image/png",
    "etag": "\"221e-c8ul1s+ouYYuPG9HxX5/xko+hAQ\"",
    "mtime": "2023-10-14T13:43:07.204Z",
    "size": 8734,
    "path": "../public/_nuxt/money.72750db5.png"
  },
  "/_nuxt/nods.ce3059a2.png": {
    "type": "image/png",
    "etag": "\"40b00-nj+w4xenfw+O7kM3zeNI2Fx+X18\"",
    "mtime": "2023-10-14T13:43:07.204Z",
    "size": 264960,
    "path": "../public/_nuxt/nods.ce3059a2.png"
  },
  "/_nuxt/only.26064ab4.js": {
    "type": "application/javascript",
    "etag": "\"22b-jC1CtyOdB3i5NTALBdGR6UAqdLg\"",
    "mtime": "2023-10-14T13:43:07.203Z",
    "size": 555,
    "path": "../public/_nuxt/only.26064ab4.js"
  },
  "/_nuxt/only.67f0a36e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"373-otfKHVv0s2/OljTEcGztF/l7x+8\"",
    "mtime": "2023-10-14T13:43:07.203Z",
    "size": 883,
    "path": "../public/_nuxt/only.67f0a36e.css"
  },
  "/_nuxt/origi.30c431ad.jpg": {
    "type": "image/jpeg",
    "etag": "\"f9776-e6CxrLtPZ5NIP0h4qzIbN/y1Hog\"",
    "mtime": "2023-10-14T13:43:07.203Z",
    "size": 1021814,
    "path": "../public/_nuxt/origi.30c431ad.jpg"
  },
  "/_nuxt/page.01339442.js": {
    "type": "application/javascript",
    "etag": "\"988-fveQxPhOH7N0rqQ2e0YvFbafZpk\"",
    "mtime": "2023-10-14T13:43:07.202Z",
    "size": 2440,
    "path": "../public/_nuxt/page.01339442.js"
  },
  "/_nuxt/phone.e2c58a5e.png": {
    "type": "image/png",
    "etag": "\"11d70-CtU3q3A93tjlODAh2DCfAqWk4E8\"",
    "mtime": "2023-10-14T13:43:07.202Z",
    "size": 73072,
    "path": "../public/_nuxt/phone.e2c58a5e.png"
  },
  "/_nuxt/portfolio.d8e35ce7.js": {
    "type": "application/javascript",
    "etag": "\"e6-GiH+aDdmvwX2Aobnzta7ZcwC8NA\"",
    "mtime": "2023-10-14T13:43:07.201Z",
    "size": 230,
    "path": "../public/_nuxt/portfolio.d8e35ce7.js"
  },
  "/_nuxt/portfolio_1.7847ffa0.png": {
    "type": "image/png",
    "etag": "\"4250-huiY5/r5F3sYILy8A3HWSTq3dcU\"",
    "mtime": "2023-10-14T13:43:07.201Z",
    "size": 16976,
    "path": "../public/_nuxt/portfolio_1.7847ffa0.png"
  },
  "/_nuxt/portfolio_2.1baef46f.svg": {
    "type": "image/svg+xml",
    "etag": "\"1fd3dd-f5mh8RYfki3E8XLaJdGm//eOuWs\"",
    "mtime": "2023-10-14T13:43:07.201Z",
    "size": 2085853,
    "path": "../public/_nuxt/portfolio_2.1baef46f.svg"
  },
  "/_nuxt/portfolio_3.d5973c19.svg": {
    "type": "image/svg+xml",
    "etag": "\"19257f-ADom3t1WRxMrWZ1oZkBxE7348lA\"",
    "mtime": "2023-10-14T13:43:07.199Z",
    "size": 1647999,
    "path": "../public/_nuxt/portfolio_3.d5973c19.svg"
  },
  "/_nuxt/portfolio_4.332c75e7.svg": {
    "type": "image/svg+xml",
    "etag": "\"137c91-d1Z7m9flEPI6PYxg1u5tZ0GGySc\"",
    "mtime": "2023-10-14T13:43:07.197Z",
    "size": 1277073,
    "path": "../public/_nuxt/portfolio_4.332c75e7.svg"
  },
  "/_nuxt/price.346e1925.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"aae-X3won+6xRmpIHwqkQzL8BpY90oQ\"",
    "mtime": "2023-10-14T13:43:07.196Z",
    "size": 2734,
    "path": "../public/_nuxt/price.346e1925.css"
  },
  "/_nuxt/price.7562409d.js": {
    "type": "application/javascript",
    "etag": "\"4a92-UeTp5hoZgoWHlDrmJr8bEuJBmt8\"",
    "mtime": "2023-10-14T13:43:07.196Z",
    "size": 19090,
    "path": "../public/_nuxt/price.7562409d.js"
  },
  "/_nuxt/secbg.7c52505c.jpg": {
    "type": "image/jpeg",
    "etag": "\"eff19-ZujcG8gfs77+GCCLXfbbDXUuFmg\"",
    "mtime": "2023-10-14T13:43:07.196Z",
    "size": 982809,
    "path": "../public/_nuxt/secbg.7c52505c.jpg"
  },
  "/_nuxt/services.06b61ec8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bd-IPR6olYeY6OOqe5lKVFkioJDIFU\"",
    "mtime": "2023-10-14T13:43:07.195Z",
    "size": 189,
    "path": "../public/_nuxt/services.06b61ec8.css"
  },
  "/_nuxt/services.76a4725c.js": {
    "type": "application/javascript",
    "etag": "\"dbf-aHvpbhEKhQ1ZxHPn4HpjY/n+BJg\"",
    "mtime": "2023-10-14T13:43:07.195Z",
    "size": 3519,
    "path": "../public/_nuxt/services.76a4725c.js"
  },
  "/_nuxt/table.45c697b0.png": {
    "type": "image/png",
    "etag": "\"2e51-ZkPrjR+2k9q74zSNomeBpWT8xWc\"",
    "mtime": "2023-10-14T13:43:07.194Z",
    "size": 11857,
    "path": "../public/_nuxt/table.45c697b0.png"
  },
  "/_nuxt/time.34bb9ad2.png": {
    "type": "image/png",
    "etag": "\"2a31-Jcajt1jA9Ww3sr9GI9jT0ereYcg\"",
    "mtime": "2023-10-14T13:43:07.194Z",
    "size": 10801,
    "path": "../public/_nuxt/time.34bb9ad2.png"
  },
  "/_nuxt/treo.b3e352f1.png": {
    "type": "image/png",
    "etag": "\"25432-n6kIEuwBsNcwyejV6CL5HEFGQaY\"",
    "mtime": "2023-10-14T13:43:07.194Z",
    "size": 152626,
    "path": "../public/_nuxt/treo.b3e352f1.png"
  },
  "/_nuxt/triangles.ca7ac814.png": {
    "type": "image/png",
    "etag": "\"900c3-+6ylaiT4cxauOfLaa4+04iFsdaw\"",
    "mtime": "2023-10-14T13:43:07.193Z",
    "size": 590019,
    "path": "../public/_nuxt/triangles.ca7ac814.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_U6wIHs = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_U6wIHs, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_U6wIHs, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
