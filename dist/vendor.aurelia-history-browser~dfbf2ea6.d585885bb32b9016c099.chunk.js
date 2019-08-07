(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"aurelia-history-browser":function(t,e,r){"use strict";r.d(e,"configure",function(){return v});var n=r("eP1p"),i=r("70NS"),a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function o(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var s=function(){function t(){}return t.prototype.activate=function(t){},t.prototype.deactivate=function(){},t}(),h=function(t){function e(){var r=t.call(this)||this;return r.handler=function(t){var n=e.getEventInfo(t),i=n.shouldHandleEvent,a=n.href;i&&(t.preventDefault(),r.history.navigate(a))},r}return o(e,t),e.prototype.activate=function(t){t._hasPushState&&(this.history=t,i.b.addEventListener("click",this.handler,!0))},e.prototype.deactivate=function(){i.b.removeEventListener("click",this.handler,!0)},e.getEventInfo=function(t){var r=t,n={shouldHandleEvent:!1,href:null,anchor:null},i=e.findClosestAnchor(r.target);if(!i||!e.targetIsThisWindow(i))return n;if(c(i,"download")||c(i,"router-ignore")||c(i,"data-router-ignore"))return n;if(r.altKey||r.ctrlKey||r.metaKey||r.shiftKey)return n;var a=i.getAttribute("href");n.anchor=i,n.href=a;var o=1===r.which,s=a&&!("#"===a.charAt(0)||/^[a-z]+:/i.test(a));return n.shouldHandleEvent=o&&s,n},e.findClosestAnchor=function(t){for(;t;){if("A"===t.tagName)return t;t=t.parentNode}},e.targetIsThisWindow=function(t){var e=t.getAttribute("target"),r=i.d.global;return!e||e===r.name||"_self"===e},e}(s),c=function(t,e){return t.hasAttribute(e)},l=function(t){function e(e){var r=t.call(this)||this;return r._isActive=!1,r._checkUrlCallback=r._checkUrl.bind(r),r.location=i.d.location,r.history=i.d.history,r.linkHandler=e,r}return o(e,t),e.prototype.activate=function(t){if(this._isActive)throw new Error("History has already been activated.");var e=this.history,r=!!t.pushState;this._isActive=!0;var n,a=this.options=Object.assign({},{root:"/"},this.options,t),o=this.root=("/"+a.root+"/").replace(p,"/"),s=this._wantsHashChange=!1!==a.hashChange,h=this._hasPushState=!!(a.pushState&&e&&e.pushState);if(h?n="popstate":s&&(n="hashchange"),i.d.addEventListener(n,this._checkUrlCallback),s&&r){var c=this.location,l=c.pathname.replace(/[^\/]$/,"$&/")===o;if(!h&&!l){var f=this.fragment=this._getFragment(null,!0);return c.replace(o+c.search+"#"+f),!0}if(h&&l&&c.hash){f=this.fragment=this._getHash().replace(u,"");e.replaceState({},i.b.title,o+f+c.search)}}if(this.fragment||(this.fragment=this._getFragment("")),this.linkHandler.activate(this),!a.silent)return this._loadUrl("")},e.prototype.deactivate=function(){var t=this._checkUrlCallback;i.d.removeEventListener("popstate",t),i.d.removeEventListener("hashchange",t),this._isActive=!1,this.linkHandler.deactivate()},e.prototype.getAbsoluteRoot=function(){var t,e,r,n=this.location;return""+(t=n.protocol,e=n.hostname,r=n.port,t+"//"+e+(r?":"+r:""))+this.root},e.prototype.navigate=function(t,e){var r=void 0===e?{}:e,n=r.trigger,a=void 0===n||n,o=r.replace,s=void 0!==o&&o,h=this.location;if(t&&g.test(t))return h.href=t,!0;if(!this._isActive)return!1;if(t=this._getFragment(t||""),this.fragment===t&&!s)return!1;this.fragment=t;var c=this.root+t;return""===t&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState?(c=c.replace("//","/"),this.history[s?"replaceState":"pushState"]({},i.b.title,c)):this._wantsHashChange?function(t,e,r){if(r){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}(h,t,s):h.assign(c),!a||this._loadUrl(t)},e.prototype.navigateBack=function(){this.history.back()},e.prototype.setTitle=function(t){i.b.title=t},e.prototype.setState=function(t,e){var r=this.history,n=Object.assign({},r.state),i=this.location,a=i.pathname,o=i.search,s=i.hash;n[t]=e,r.replaceState(n,null,""+a+o+s)},e.prototype.getState=function(t){return Object.assign({},this.history.state)[t]},e.prototype.getHistoryIndex=function(){var t=this.getState("HistoryIndex");return void 0===t&&(t=this.history.length-1,this.setState("HistoryIndex",t)),t},e.prototype.go=function(t){this.history.go(t)},e.prototype._getHash=function(){return this.location.hash.substr(1)},e.prototype._getFragment=function(t,e){var r;if(!t)if(this._hasPushState||!this._wantsHashChange||e){var n=this.location;t=n.pathname+n.search,r=this.root.replace(f,""),t.indexOf(r)||(t=t.substr(r.length))}else t=this._getHash();return"/"+t.replace(u,"")},e.prototype._checkUrl=function(){this._getFragment("")!==this.fragment&&this._loadUrl("")},e.prototype._loadUrl=function(t){var e=this.fragment=this._getFragment(t);return!!this.options.routeHandler&&this.options.routeHandler(e)},e.inject=[s],e}(n.a),u=/^#?\/*|\s+$/g,p=/^\/+|\/+$/g,f=/\/$/,g=/^([a-z][a-z0-9+\-.]*:)?\/\//i;function v(t){var e=t;e.singleton(n.a,l),e.transient(s,h)}}}]);
//# sourceMappingURL=vendor.aurelia-history-browser~dfbf2ea6.d585885bb32b9016c099.bundle.map