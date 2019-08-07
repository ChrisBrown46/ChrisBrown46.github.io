(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"aurelia-templating-binding":function(t,e,r){"use strict";r.d(e,"configure",function(){return E});var i,n,o,s,a,u,h,p,l=r("MP1E"),c=r("X5gX"),d=r("hij8");var g=(n=i=function(){function t(t){this.elements=Object.create(null),this.allElements=Object.create(null),this.svg=t,this.registerUniversal("accesskey","accessKey"),this.registerUniversal("contenteditable","contentEditable"),this.registerUniversal("tabindex","tabIndex"),this.registerUniversal("textcontent","textContent"),this.registerUniversal("innerhtml","innerHTML"),this.registerUniversal("scrolltop","scrollTop"),this.registerUniversal("scrollleft","scrollLeft"),this.registerUniversal("readonly","readOnly"),this.register("label","for","htmlFor"),this.register("img","usemap","useMap"),this.register("input","maxlength","maxLength"),this.register("input","minlength","minLength"),this.register("input","formaction","formAction"),this.register("input","formenctype","formEncType"),this.register("input","formmethod","formMethod"),this.register("input","formnovalidate","formNoValidate"),this.register("input","formtarget","formTarget"),this.register("textarea","maxlength","maxLength"),this.register("td","rowspan","rowSpan"),this.register("td","colspan","colSpan"),this.register("th","rowspan","rowSpan"),this.register("th","colspan","colSpan")}return t.prototype.register=function(t,e,r){t=t.toLowerCase(),e=e.toLowerCase(),(this.elements[t]=this.elements[t]||Object.create(null))[e]=r},t.prototype.registerUniversal=function(t,e){t=t.toLowerCase(),this.allElements[t]=e},t.prototype.map=function(t,e){if(this.svg.isStandardSvgAttribute(t,e))return e;t=t.toLowerCase(),e=e.toLowerCase();var r=this.elements[t];return void 0!==r&&e in r?r[e]:e in this.allElements?this.allElements[e]:/(?:^data-)|(?:^aria-)|:/.test(e)?e:Object(c.r)(e)},t}(),i.inject=[c.m],n),b=function(){function t(t,e,r,i,n,o){this.observerLocator=t,this.targetProperty=e,this.parts=r,this.mode=i,this.lookupFunctions=n,this.attribute=this.attrToRemove=o,this.discrete=!1}return t.prototype.createBinding=function(t){return 3===this.parts.length?new v(t,this.observerLocator,this.parts[1],this.mode,this.lookupFunctions,this.targetProperty,this.parts[0],this.parts[2]):new m(this.observerLocator,this.parts,t,this.targetProperty,this.mode,this.lookupFunctions)},t}();function f(t,e){if("style"===e)l.getLogger("templating-binding").info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');else if(t.parentElement&&"TEXTAREA"===t.parentElement.nodeName&&"textContent"===e)throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.')}var m=function(){function t(t,e,r,i,n,o){f(r,i),this.observerLocator=t,this.parts=e,this.target=r,this.targetProperty=i,this.targetAccessor=t.getAccessor(r,i),this.mode=n,this.lookupFunctions=o}return t.prototype.interpolate=function(){if(this.isBound){for(var t="",e=this.parts,r=0,i=e.length;r<i;r++)t+=r%2==0?e[r]:this["childBinding"+r].value;this.targetAccessor.setValue(t,this.target,this.targetProperty)}},t.prototype.updateOneTimeBindings=function(){for(var t=1,e=this.parts.length;t<e;t+=2){var r=this["childBinding"+t];r.mode===c.q.oneTime&&r.call()}},t.prototype.bind=function(t){if(this.isBound){if(this.source===t)return;this.unbind()}this.source=t;for(var e=this.parts,r=1,i=e.length;r<i;r+=2){var n=new v(this,this.observerLocator,e[r],this.mode,this.lookupFunctions);n.bind(t),this["childBinding"+r]=n}this.isBound=!0,this.interpolate()},t.prototype.unbind=function(){if(this.isBound){this.isBound=!1,this.source=null;for(var t=1,e=this.parts.length;t<e;t+=2){this["childBinding"+t].unbind()}}},t}(),v=Object(c.s)()(o=function(){function t(t,e,r,i,n,o,s,a){t instanceof m?this.parent=t:(f(t,o),this.target=t,this.targetProperty=o,this.targetAccessor=e.getAccessor(t,o)),this.observerLocator=e,this.sourceExpression=r,this.mode=i,this.lookupFunctions=n,this.left=s,this.right=a}return t.prototype.updateTarget=function(t){(t=null==t?"":t.toString())!==this.value&&(this.value=t,this.parent?this.parent.interpolate():this.targetAccessor.setValue(this.left+t+this.right,this.target,this.targetProperty))},t.prototype.call=function(){this.isBound&&(this.rawValue=this.sourceExpression.evaluate(this.source,this.lookupFunctions),this.updateTarget(this.rawValue),this.mode!==c.q.oneTime&&(this._version++,this.sourceExpression.connect(this,this.source),this.rawValue instanceof Array&&this.observeArray(this.rawValue),this.unobserve(!1)))},t.prototype.bind=function(t){if(this.isBound){if(this.source===t)return;this.unbind()}this.isBound=!0,this.source=t;var e=this.sourceExpression;e.bind&&e.bind(this,t,this.lookupFunctions),this.rawValue=e.evaluate(t,this.lookupFunctions),this.updateTarget(this.rawValue),this.mode===c.q.oneWay&&Object(c.v)(this)},t.prototype.unbind=function(){if(this.isBound){this.isBound=!1;var t=this.sourceExpression;t.unbind&&t.unbind(this,this.source),this.source=null,this.value=null,this.rawValue=null,this.unobserve(!0)}},t.prototype.connect=function(t){this.isBound&&(t&&(this.rawValue=this.sourceExpression.evaluate(this.source,this.lookupFunctions),this.updateTarget(this.rawValue)),this.sourceExpression.connect(this,this.source),this.rawValue instanceof Array&&this.observeArray(this.rawValue))},t}())||o,y=function(){function t(t,e,r,i,n){this.observerLocator=t,this.sourceExpression=r,this.targetProperty=e,this.lookupFunctions=i,this.toBindingContext=n}return t.prototype.createBinding=function(){return new w(this.observerLocator,this.sourceExpression,this.targetProperty,this.lookupFunctions,this.toBindingContext)},t}(),w=Object(c.s)()(s=function(){function t(t,e,r,i,n){this.observerLocator=t,this.sourceExpression=e,this.targetProperty=r,this.lookupFunctions=i,this.source=null,this.target=null,this.toBindingContext=n}return t.prototype.updateTarget=function(){var t=this.sourceExpression.evaluate(this.source,this.lookupFunctions);this.target[this.targetProperty]=t},t.prototype.call=function(t){if(this.isBound){if(t!==c.x)throw new Error("Unexpected call context "+t);this.updateTarget()}},t.prototype.bind=function(t){if(this.isBound){if(this.source===t)return;this.unbind()}this.isBound=!0,this.source=t,this.target=this.toBindingContext?t.bindingContext:t.overrideContext,this.sourceExpression.bind&&this.sourceExpression.bind(this,t,this.lookupFunctions),Object(c.v)(this)},t.prototype.unbind=function(){this.isBound&&(this.isBound=!1,this.sourceExpression.unbind&&this.sourceExpression.unbind(this,this.source),this.source=null,this.target=null,this.unobserve(!0))},t.prototype.connect=function(){this.isBound&&(this.updateTarget(),this.sourceExpression.connect(this,this.source))},t}())||s,x=function(){function t(t,e,r,i,n){this.observerLocator=t,this.targetProperty=e,this.parts=r,this.lookupFunctions=i,this.toBindingContext=n}return t.prototype.createBinding=function(){return new B(this.observerLocator,this.targetProperty,this.parts,this.lookupFunctions,this.toBindingContext)},t}(),B=function(){function t(t,e,r,i,n){this.observerLocator=t,this.parts=r,this.targetProperty=e,this.lookupFunctions=i,this.toBindingContext=n,this.target=null}return t.prototype.bind=function(t){if(this.isBound){if(this.source===t)return;this.unbind()}this.isBound=!0,this.source=t,this.target=this.toBindingContext?t.bindingContext:t.overrideContext,this.interpolationBinding=this.createInterpolationBinding(),this.interpolationBinding.bind(t)},t.prototype.unbind=function(){this.isBound&&(this.isBound=!1,this.source=null,this.target=null,this.interpolationBinding.unbind(),this.interpolationBinding=null)},t.prototype.createInterpolationBinding=function(){return 3===this.parts.length?new v(this.target,this.observerLocator,this.parts[1],c.q.oneWay,this.lookupFunctions,this.targetProperty,this.parts[0],this.parts[2]):new m(this.observerLocator,this.parts,this.target,this.targetProperty,c.q.oneWay,this.lookupFunctions)},t}(),k=(u=a=function(){function t(t,e,r,i){this.parser=t,this.observerLocator=e,this.eventManager=r,this.attributeMap=i}return t.prototype.interpret=function(t,e,r,i,n){return r.command in this?this[r.command](t,e,r,i,n):this.handleUnknownCommand(t,e,r,i,n)},t.prototype.handleUnknownCommand=function(t,e,r,i,n){return l.getLogger("templating-binding").warn("Unknown binding command.",r),i},t.prototype.determineDefaultBindingMode=function(t,e,r){var i=t.tagName.toLowerCase();return"input"===i&&("value"===e||"files"===e)&&"checkbox"!==t.type&&"radio"!==t.type||"input"===i&&"checked"===e&&("checkbox"===t.type||"radio"===t.type)||("textarea"===i||"select"===i)&&"value"===e||("textcontent"===e||"innerhtml"===e)&&"true"===t.contentEditable||"scrolltop"===e||"scrollleft"===e?c.q.twoWay:r&&e in r.attributes&&r.attributes[e]&&r.attributes[e].defaultBindingMode>=c.q.oneTime?r.attributes[e].defaultBindingMode:c.q.oneWay},t.prototype.bind=function(t,e,r,i,n){var o=i||d.b.attribute(r.attrName);return o.attributes[r.attrName]=new c.c(this.observerLocator,this.attributeMap.map(e.tagName,r.attrName),this.parser.parse(r.attrValue),void 0===r.defaultBindingMode||null===r.defaultBindingMode?this.determineDefaultBindingMode(e,r.attrName,n):r.defaultBindingMode,t.lookupFunctions),o},t.prototype.trigger=function(t,e,r){return new c.h(this.eventManager,r.attrName,this.parser.parse(r.attrValue),c.u.none,!0,t.lookupFunctions)},t.prototype.capture=function(t,e,r){return new c.h(this.eventManager,r.attrName,this.parser.parse(r.attrValue),c.u.capturing,!0,t.lookupFunctions)},t.prototype.delegate=function(t,e,r){return new c.h(this.eventManager,r.attrName,this.parser.parse(r.attrValue),c.u.bubbling,!0,t.lookupFunctions)},t.prototype.call=function(t,e,r,i){var n=i||d.b.attribute(r.attrName);return n.attributes[r.attrName]=new c.d(this.observerLocator,r.attrName,this.parser.parse(r.attrValue),t.lookupFunctions),n},t.prototype.options=function(t,e,r,i,n){var o,s=i||d.b.attribute(r.attrName),a=r.attrValue,u=this.language,h=null,p="",l=void 0,c=void 0,g=!1,b=!1,f=!1;for(c=0,o=a.length;c<o;++c){if(";"!==(l=a[c])||g)if(":"===l&&null===h)f=!0,h=p.trim(),p="";else{if("\\"===l){p+=l,b=!0;continue}p+=l,null!==h&&!1===b&&"'"===l&&(g=!g)}else f||(h=this._getPrimaryPropertyName(t,n)),r=u.inspectAttribute(t,"?",h,p.trim()),u.createAttributeInstruction(t,e,r,s,n),s.attributes[r.attrName]||(s.attributes[r.attrName]=r.attrValue),p="",h=null;b=!1}return f||(h=this._getPrimaryPropertyName(t,n)),null!==h&&(r=u.inspectAttribute(t,"?",h,p.trim()),u.createAttributeInstruction(t,e,r,s,n),s.attributes[r.attrName]||(s.attributes[r.attrName]=r.attrValue)),s},t.prototype._getPrimaryPropertyName=function(t,e){var r=t.getAttribute(e.attributeName);return r&&r.primaryProperty?r.primaryProperty.attribute:null},t.prototype.for=function(t,e,r,i){var n,o=void 0,s=void 0,a=void 0,u=void 0;if(2!==(o=(n=(u=r.attrValue).match(/^ *[[].+[\]]/))?u.split("of "):u.split(" of ")).length)throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');return a=i||d.b.attribute(r.attrName),n?(s=o[0].replace(/[[\]]/g,"").replace(/,/g," ").replace(/\s+/g," ").trim().split(" "),a.attributes.key=s[0],a.attributes.value=s[1]):a.attributes.local=o[0],a.attributes.items=new c.c(this.observerLocator,"items",this.parser.parse(o[1]),c.q.oneWay,t.lookupFunctions),a},t.prototype["two-way"]=function(t,e,r,i){var n=i||d.b.attribute(r.attrName);return n.attributes[r.attrName]=new c.c(this.observerLocator,this.attributeMap.map(e.tagName,r.attrName),this.parser.parse(r.attrValue),c.q.twoWay,t.lookupFunctions),n},t.prototype["to-view"]=function(t,e,r,i){var n=i||d.b.attribute(r.attrName);return n.attributes[r.attrName]=new c.c(this.observerLocator,this.attributeMap.map(e.tagName,r.attrName),this.parser.parse(r.attrValue),c.q.toView,t.lookupFunctions),n},t.prototype["from-view"]=function(t,e,r,i){var n=i||d.b.attribute(r.attrName);return n.attributes[r.attrName]=new c.c(this.observerLocator,this.attributeMap.map(e.tagName,r.attrName),this.parser.parse(r.attrValue),c.q.fromView,t.lookupFunctions),n},t.prototype["one-time"]=function(t,e,r,i){var n=i||d.b.attribute(r.attrName);return n.attributes[r.attrName]=new c.c(this.observerLocator,this.attributeMap.map(e.tagName,r.attrName),this.parser.parse(r.attrValue),c.q.oneTime,t.lookupFunctions),n},t}(),a.inject=[c.l,c.k,c.f,g],u);k.prototype["one-way"]=k.prototype["to-view"];var N={},L=(p=h=function(t){function e(e,r,i,n){var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return o.parser=e,o.observerLocator=r,o.syntaxInterpreter=i,o.emptyStringExpression=o.parser.parse("''"),i.language=o,o.attributeMap=n,o.toBindingContextAttr="to-binding-context",o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.inspectAttribute=function(t,e,r,i){var n=r.split(".");if(N.defaultBindingMode=null,2===n.length)N.attrName=n[0].trim(),N.attrValue=i,N.command=n[1].trim(),"ref"===N.command?(N.expression=new c.j(this.parser.parse(i),N.attrName,t.lookupFunctions),N.command=null,N.attrName="ref"):N.expression=null;else if("ref"===r)N.attrName=r,N.attrValue=i,N.command=null,N.expression=new c.j(this.parser.parse(i),"element",t.lookupFunctions);else{N.attrName=r,N.attrValue=i,N.command=null;var o=this.parseInterpolation(t,i);N.expression=null===o?null:new b(this.observerLocator,this.attributeMap.map(e,r),o,c.q.oneWay,t.lookupFunctions,r)}return N},e.prototype.createAttributeInstruction=function(t,e,r,i,n){var o=void 0;if(r.expression){if("ref"===r.attrName)return r.expression;(o=i||d.b.attribute(r.attrName)).attributes[r.attrName]=r.expression}else r.command&&(o=this.syntaxInterpreter.interpret(t,e,r,i,n));return o},e.prototype.createLetExpressions=function(t,e){for(var r=[],i=e.attributes,n=void 0,o=void 0,s=void 0,a=void 0,u=this.toBindingContextAttr,h=e.hasAttribute(u),p=0,d=i.length;d>p;++p)if(s=(n=i[p]).name,a=n.nodeValue,o=s.split("."),s!==u)if(2===o.length){if("bind"!==o[1]){l.getLogger("templating-binding-language").warn('Detected invalid let command. Expected "'+o[0]+'.bind", given "'+s+'"');continue}r.push(new y(this.observerLocator,Object(c.r)(o[0]),this.parser.parse(a),t.lookupFunctions,h))}else s=Object(c.r)(s),null===(o=this.parseInterpolation(t,a))&&l.getLogger("templating-binding-language").warn('Detected string literal in let bindings. Did you mean "'+s+".bind="+a+'" or "'+s+"=${"+a+'}" ?'),o?r.push(new x(this.observerLocator,s,o,t.lookupFunctions,h)):r.push(new y(this.observerLocator,s,new c.i(a),t.lookupFunctions,h));return r},e.prototype.inspectTextContent=function(t,e){var r=this.parseInterpolation(t,e);return null===r?null:new b(this.observerLocator,"textContent",r,c.q.oneWay,t.lookupFunctions,"textContent")},e.prototype.parseInterpolation=function(t,e){for(var r=e.indexOf("${",0),i=e.length,n=void 0,o=0,s=0,a=null,u=void 0,h=void 0,p=0;r>=0&&r<i-2;){s=1,u=r,r+=2;do{n=e[r],r++,"'"!==n&&'"'!==n?"\\"!==n?null===a&&("{"===n?s++:"}"===n&&s--):r++:null===a?a=n:a===n&&(a=null)}while(s>0&&r<i);if(0!==s)break;h=h||[],"\\"===e[u-1]&&"\\"!==e[u-2]?(h[p]=e.substring(o,u-1)+e.substring(u,r),h[++p]=this.emptyStringExpression,p++):(h[p]=e.substring(o,u),h[++p]=this.parser.parse(e.substring(u+2,r-1)),p++),o=r,r=e.indexOf("${",r)}return 0===p?null:(h[p]=e.substr(o),h)},e}(d.c),h.inject=[c.l,c.k,k,g],p);function E(t){t.container.registerSingleton(d.c,L),t.container.registerAlias(d.c,L)}}}]);
//# sourceMappingURL=vendor.aurelia-templating-binding~6483373c.398cc5acaec4fd455afe.bundle.map