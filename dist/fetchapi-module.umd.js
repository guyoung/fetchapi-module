(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('node-fetch'), require('whatwg-fetch')) :
	typeof define === 'function' && define.amd ? define(['node-fetch', 'whatwg-fetch'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["fetchapi-module"] = factory(global.require$$0));
})(this, (function (require$$0) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var fetchapiModule = {exports: {}};

	(function (module) {
		const isNodejs =
		    module.exports;

		if (isNodejs) {
		    var realFetch = require$$0;
		    
		    module.exports = function (url, options) {
		        if (/^\/\//.test(url)) {
		            url = 'https:' + url;
		        }
		        return realFetch.call(this, url, options);
		    };

		    if (!commonjsGlobal.fetch) {
		        commonjsGlobal.fetch = module.exports;
		        commonjsGlobal.Response = realFetch.Response;
		        commonjsGlobal.Headers = realFetch.Headers;
		        commonjsGlobal.Request = realFetch.Request;
		    }

		} else {
		    var _global = (typeof self === 'undefined' ? window : self);

		    if (!_global.fetch) ;

		    module.exports = function (url, options) {
		        if (/^\/\//.test(url)) {
		            url = 'https:' + url;
		        }
		        return _global.fetch.call(this, url, options);
		    };
		} 
	} (fetchapiModule));

	var fetchapiModuleExports = fetchapiModule.exports;
	var index = /*@__PURE__*/getDefaultExportFromCjs(fetchapiModuleExports);

	return index;

}));
