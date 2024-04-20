const isNodejs =
    typeof module !== 'undefined' && module.exports;

if (isNodejs) {
    var realFetch = require('node-fetch');
    
    module.exports = function (url, options) {
        if (/^\/\//.test(url)) {
            url = 'https:' + url;
        }
        return realFetch.call(this, url, options);
    };

    if (!global.fetch) {
        global.fetch = module.exports;
        global.Response = realFetch.Response;
        global.Headers = realFetch.Headers;
        global.Request = realFetch.Request;
    }

} else {
    var _global = (typeof self === 'undefined' ? window : self);

    if (!_global.fetch) {
        require('whatwg-fetch');
    }

    module.exports = function (url, options) {
        if (/^\/\//.test(url)) {
            url = 'https:' + url;
        }
        return _global.fetch.call(this, url, options);
    };
}