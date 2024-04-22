var globalScope = (function () {
    return typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
                ? window
                : typeof global !== 'undefined'
                    ? global
                    : this
})()


if (globalScope.fetch) {
    module.exports = function (url, options) {
        if (/^\/\//.test(url)) {
            url = 'http:' + url
        }
        return globalScope.fetch.call(this, url, options)
    }
} else {
    try {
        var realFetch = require('node-fetch')

        module.exports = function (url, options) {
            if (/^\/\//.test(url)) {
                url = 'http:' + url
            }
            return realFetch.call(this, url, options)
        }

        globalScope.fetch = module.exports
        globalScope.Response = realFetch.Response
        globalScope.Headers = realFetch.Headers
        globalScope.Request = realFetch.Request
    } catch {
        require('whatwg-fetch');

        module.exports = globalScope.fetch.bind(globalScope);

    }
}

