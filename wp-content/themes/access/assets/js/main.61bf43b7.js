!function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=111)}({1:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},111:function(e,t,s){e.exports=s(208)},13:function(e,t,s){"use strict";var i={event:function(e,t){return"undefined"!=typeof Webtrends&&i.webtrends(e,t),t},view:function(e,t,s){"undefined"!=typeof Webtrends&&i.webtrends(t,s),"undefined"!=typeof gtag&&i.gtagView(e,t)},webtrends:function(e,t){if("undefined"!=typeof Webtrends&&void 0!==t){var s={};s["WT.ti"]=e,t.unshift(s);var i=(t={argsa:t.flatMap((function(e){return Object.entries(e)})).flat()}).argsa.indexOf("action");i&&(t.argsa[i]="DCS.dcsuri");var r=t.argsa.indexOf("DCS.dcsuri");r&&(t.argsa[r+1]=window.location.pathname+t.argsa[r+1]),Webtrends.multiTrack(t)}},gtag:function(e,t){var s={event_category:e},i=t.find((function(e){return e.hasOwnProperty("action")})),r=t.find((function(e){return e.hasOwnProperty("DCS.dcsuri")})),n=!1;void 0!==r&&(n=r["DCS.dcsuri"]),void 0!==i&&(n=i.action),n&&gtag("event",n,s)},gtagView:function(e,t){gtag("event","screen_view",{app_name:e,screen_name:t})}};t.a=i},17:function(e,t,s){"use strict";t.a=function(e){var t=e||"",s=(window.LOCALIZED_STRINGS||[]).filter((function(t){return!(!t.hasOwnProperty("slug")||t.slug!==e)&&t}));return s[0]&&s[0].hasOwnProperty("label")?s[0].label:t}},18:function(e,t,s){"use strict";var i=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function a(e,t,s){if(t.match(n))!function e(t,s,i){if(0===s.length)return i;var r=s.shift(),n=r.match(/^\[(.+?)\]$/);if("[]"===r)return t=t||[],Array.isArray(t)?t.push(e(null,s,i)):(t._values=t._values||[],t._values.push(e(null,s,i))),t;if(n){var a=n[1],o=+a;isNaN(o)?(t=t||{})[a]=e(t[a],s,i):(t=t||[])[o]=e(t[o],s,i)}else t[r]=e(t[r],s,i);return t}(e,function(e){var t=[],s=new RegExp(n),i=/^([^\[\]]*)/.exec(e);for(i[1]&&t.push(i[1]);null!==(i=s.exec(e));)t.push(i[1]);return t}(t),s);else{var i=e[t];i?(Array.isArray(i)||(e[t]=[i]),e[t].push(s)):e[t]=s}return e}function o(e,t,s){return s=(s=String(s)).replace(/(\r)?\n/g,"\r\n"),s=(s=encodeURIComponent(s)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+s}t.a=function(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var s=t.hash?{}:"",n=t.serializer||(t.hash?a:o),c=e&&e.elements?e.elements:[],l=Object.create(null),u=0;u<c.length;++u){var h=c[u];if((t.disabled||!h.disabled)&&h.name&&r.test(h.nodeName)&&!i.test(h.type)){var d=h.name,f=h.value;if("checkbox"!==h.type&&"radio"!==h.type||h.checked||(f=void 0),t.empty){if("checkbox"!==h.type||h.checked||(f=!1),"radio"===h.type&&(l[h.name]||h.checked?h.checked&&(l[h.name]=!0):l[h.name]=!1),null==f&&"radio"==h.type)continue}else if(!f)continue;if("select-multiple"!==h.type)s=n(s,d,f);else{f=[];for(var v=h.options,g=!1,E=0;E<v.length;++E){var m=v[E];m.selected&&(m.value||t.empty&&!m.value)&&(g=!0,s=t.hash&&"[]"!==d.slice(d.length-2)?n(s,d+"[]",m.value):n(s,d,m.value))}!g&&t.empty&&(s=n(s,d,""))}}}if(t.empty)for(var d in l)l[d]||(s=n(s,d,""));return s}},20:function(e,t,s){"use strict";var i=s(1),r=s.n(i),n=s(3),a=s.n(n),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r()(this,e),this.FORM=t,this.strings=e.strings,this.submit=e.submit,this.classes=e.classes,this.markup=e.markup,this.selectors=e.selectors,this.attrs=e.attrs,this.FORM.setAttribute("novalidate",!0),this}return a()(e,[{key:"joinValues",value:function(e){if(e.target.matches('input[type="checkbox"]')&&e.target.closest("[data-js-join-values]")){var t=e.target.closest("[data-js-join-values]"),s=document.querySelector(t.dataset.jsJoinValues);return s.value=Array.from(t.querySelectorAll('input[type="checkbox"]')).filter((function(e){return e.value&&e.checked})).map((function(e){return e.value})).join(", "),s}}},{key:"valid",value:function(e){for(var t=e.target.checkValidity(),s=e.target.querySelectorAll(this.selectors.REQUIRED),i=0;i<s.length;i++){var r=s[i];this.reset(r),r.validity.valid||this.highlight(r)}return t?this:t}},{key:"watch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.FORM=t||this.FORM;for(var s=this.FORM.querySelectorAll(this.selectors.REQUIRED),i=function(t){var i=s[t];i.addEventListener("focus",(function(){e.reset(i)})),i.addEventListener("blur",(function(){i.validity.valid||e.highlight(i)}))},r=0;r<s.length;r++)i(r);return this.FORM.addEventListener("submit",(function(t){if(t.preventDefault(),!1===e.valid(t))return!1;e.submit(t)})),this}},{key:"reset",value:function(e){var t=this.selectors.ERROR_MESSAGE_PARENT?e.closest(this.selectors.ERROR_MESSAGE_PARENT):e.parentNode,s=t.querySelector("."+this.classes.ERROR_MESSAGE);return t.classList.remove(this.classes.ERROR_CONTAINER),s&&s.remove(),t.closest("form").classList.remove(this.classes.ERROR_CONTAINER),e.removeAttribute(this.attrs.ERROR_INPUT[0]),e.removeAttribute(this.attrs.ERROR_LABEL),this}},{key:"highlight",value:function(e){var t=this.selectors.ERROR_MESSAGE_PARENT?e.closest(this.selectors.ERROR_MESSAGE_PARENT):e.parentNode,s=document.createElement(this.markup.ERROR_MESSAGE),i="".concat(e.getAttribute("id"),"-").concat(this.classes.ERROR_MESSAGE);if(e.validity.valueMissing&&this.strings.VALID_REQUIRED)s.innerHTML=this.strings.VALID_REQUIRED;else if(!e.validity.valid&&this.strings["VALID_".concat(e.type.toUpperCase(),"_INVALID")]){var r="VALID_".concat(e.type.toUpperCase(),"_INVALID");s.innerHTML=this.strings[r]}else s.innerHTML=e.validationMessage;return s.setAttribute("id",i),s.setAttribute(this.attrs.ERROR_MESSAGE[0],this.attrs.ERROR_MESSAGE[1]),s.classList.add(this.classes.ERROR_MESSAGE),t.classList.add(this.classes.ERROR_CONTAINER),t.insertBefore(s,t.childNodes[0]),t.closest("form").classList.add(this.classes.ERROR_CONTAINER),e.setAttribute(this.attrs.ERROR_INPUT[0],this.attrs.ERROR_INPUT[1]),e.setAttribute(this.attrs.ERROR_LABEL,i),this}}]),e}();o.strings={},o.submit=function(){},o.classes={ERROR_MESSAGE:"error-message",ERROR_CONTAINER:"error",ERROR_FORM:"error"},o.markup={ERROR_MESSAGE:"div"},o.selectors={REQUIRED:'[required="true"]',ERROR_MESSAGE_PARENT:!1},o.attrs={ERROR_MESSAGE:["aria-live","polite"],ERROR_INPUT:["aria-invalid","true"],ERROR_LABEL:"aria-describedby"},t.a=o},208:function(e,t,s){"use strict";s.r(t);var i=s(1),r=s.n(i),n=function e(){if(r()(this,e),"undefined"==typeof Rollbar)return!1;var t=document.getElementsByTagName("script"),s=t[t.length-1].src.split("/"),i=s[s.length-1].split(".")[1],n={payload:{client:{javascript:{source_map_enabled:!0,code_version:i,guess_uncaught_frames:!0}}}};window.addEventListener("load",(function(){Rollbar.configure(n),"Configured Rollbar with ".concat(i)}))},a=s(13),o=s(3),c=s.n(o),l=function(){function e(t){var s=this;return r()(this,e),this.element=t,this.control=document.querySelector(e.selectors.control),this.html=document.querySelector(e.selectors.html),new MutationObserver((function(e){s.observer(e)})).observe(this.html,{attributes:!0}),this.control.addEventListener("change",(function(e){s.change(e)})),this}return c()(e,[{key:"click",value:function(t){var s=window.location.origin,i=t.target.matches("a")?t.target:t.target.closest("a"),r=document.querySelector(e.selectors.html).getAttribute("lang"),n=r===e.maps["zh-hant"]?"zh-hant":r,a=i.href.replace(s,"".concat(s,"/").concat(n)),o="_blank"===i.target?i.target:"_self",c=i.href.includes(s),l=i.pathname===window.location.pathname;c&&!l&&(t.preventDefault(),window.open(a,o))}},{key:"observer",value:function(t){var s=this,i=t.filter((function(e){return"lang"===e.attributeName})),r=e.stylesheets;if(i.length){var n=i[0].target.lang;this.control.value=e.restore.includes(n)?"restore":n,this.html.setAttribute("direction",e.rtl.includes(n)?"rtl":"ltr");var a=n===e.maps["zh-hant"]?"zh-hant":n,o=r.filter((function(e){return e.includes("style-".concat(a))})),c=r.filter((function(e){return e.includes("style-default")})),l=o.length?o[0]:c[0];document.querySelector(e.selectors.stylesheet).setAttribute("href",l),document.querySelectorAll("a").forEach((function(t){e.restore.includes(n)?t.removeEventListener("click",s.click):t.addEventListener("click",s.click)}))}}},{key:"change",value:function(e){var t,s=this.element.querySelector("select");s.value=e.target.value,"function"==typeof Event?t=new Event("change"):(t=document.createEvent("Event"),t.initEvent("change",!0,!0)),s.dispatchEvent(t)}}]),e}();l.stylesheets=window.STYLESHEETS,l.rtl=["ar","ur"],l.restore=["auto","en"],l.selector="#js-google-translate",l.selectors={control:"#js-google-translate-control",html:"html",stylesheet:"#style-default-css"},l.maps={"zh-hant":"zh-CN"};var u=l,h=s(5),d=function e(){return r()(this,e),this._toggle=new h.a({selector:e.selector}),this};d.selector='[data-js*="accordion"]';var f=d,v=function e(){return r()(this,e),this._toggle=new h.a({selector:e.selector,namespace:e.namespace,inactiveClass:e.inactiveClass}),this};v.selector='[data-js*="filter"]',v.namespace="filter",v.inactiveClass="inactive";var g=v;
/*! js-cookie v3.0.0-rc.1 | MIT */function E(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)e[i]=s[i]}return e}var m={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};var p=function e(t,s){function i(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=E({},s,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),i=t.write(i,e);var n="";for(var a in r)r[a]&&(n+="; "+a,!0!==r[a]&&(n+="="+r[a].split(";")[0]));return document.cookie=e+"="+i+n}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],i={},r=0;r<s.length;r++){var n=s[r].split("="),a=n.slice(1).join("=");'"'===a[0]&&(a=a.slice(1,-1));try{var o=m.read(n[0]);if(i[o]=t.read(a,o),e===o)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",E({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,E({},this.attributes,t))},withConverter:function(t){return e(E({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}(m,{path:"/"}),R=function(){function e(t){var s=this;return r()(this,e),this.selector=e.selector,this.selectors=e.selectors,this.data=e.data,this.expires=e.expires,this.element=t,this.name=t.dataset[this.data.NAME],this.button=t.querySelector(this.selectors.BUTTON),this._toggle=new h.a({selector:this.selectors.BUTTON,after:function(){t.classList.contains(h.a.inactiveClass)?p.set(s.name,"dismissed",{expires:s.expires}):t.classList.contains(h.a.activeClass)&&p.remove(s.name)}}),p.get(this.name)&&t.classList.contains(h.a.activeClass)&&this._toggle.elementToggle(this.button,t),this}return c()(e,[{key:"toggle",value:function(){return this._toggle.elementToggle(this.button,this.element),this}}]),e}();R.selector='[data-js*="alert-banner"]',R.selectors={BUTTON:'[data-js*="alert-controller"]'},R.data={NAME:"alertName"},R.expires=360;var b=R,_=function(){function e(t){return r()(this,e),this.el=t,this._textSize=0,this._active=!1,this._initialized=!1,this._toggle=new h.a({selector:e.selectors.TOGGLE}),this.init(),this}return c()(e,[{key:"init",value:function(){var t=this;if(this._initialized)return this;var s=this.el.querySelector(e.selectors.SMALLER),i=this.el.querySelector(e.selectors.LARGER);if(s.addEventListener("click",(function(s){s.preventDefault();var i=t._textSize-1;i>=e.min&&t._adjustSize(i)})),i.addEventListener("click",(function(s){s.preventDefault();var i=t._textSize+1;i<=e.max&&t._adjustSize(i)})),p.get("textSize")){var r=parseInt(p.get("textSize"),10);this._textSize=r,this._adjustSize(r)}else{document.querySelector("html").classList.add("text-size-".concat(this._textSize)),this.show(),this._setCookie()}return this._initialized=!0,this}},{key:"show",value:function(){this._active=!0;var t=this.el.querySelector(e.selectors.TOGGLE),s="#".concat(t.getAttribute("aria-controls")),i=this.el.querySelector(s),r=i.querySelectorAll(h.a.elFocusable.join(", "));return this._toggle.elementToggle(t,i,r),this}},{key:"_setCookie",value:function(){return p.set("textSize",this._textSize,{expires:1/24}),this}},{key:"_adjustSize",value:function(e){var t=this._textSize,s=document.querySelector("html");return e!==t&&(this._textSize=e,this._setCookie(),s.classList.remove("text-size-".concat(t))),s.classList.add("text-size-".concat(e)),this._checkForMinMax(),this}},{key:"_checkForMinMax",value:function(){var t=this.el.querySelector(e.selectors.SMALLER),s=this.el.querySelector(e.selectors.LARGER);return this._textSize<=e.min?(this._textSize=e.min,t.setAttribute("disabled","")):t.removeAttribute("disabled"),this._textSize>=e.max?(this._textSize=e.max,s.setAttribute("disabled","")):s.removeAttribute("disabled"),this}}]),e}();_.min=-3,_.max=3,_.selector='[data-js="text-controller"]',_.selectors={LARGER:'[data-js*="text-larger"]',SMALLER:'[data-js*="text-smaller"]',TOGGLE:'[data-js*="text-controller__control"]'};var y=_,A=function e(t){return r()(this,e),t=t||e.path,fetch(t).then((function(e){if(e.ok)return e.text()})).catch((function(e){0})).then((function(e){var t=document.createElement("div");t.innerHTML=e,t.setAttribute("aria-hidden",!0),t.setAttribute("style","display: none;"),document.body.appendChild(t)})),this};A.path="svg/icons.svg";var S=A,L=function(){function e(){var t=this;return r()(this,e),this.selector=e.selector,this.aria=e.aria,this.notifyTimeout=e.notifyTimeout,document.querySelectorAll(e.selectors.TARGETS).forEach((function(e){e.addEventListener("focus",(function(){return t.select(e)})),e.addEventListener("click",(function(){return t.select(e)}))})),document.querySelector("body").addEventListener("click",(function(e){e.target.matches(t.selector)&&(t.element=e.target,t.element.setAttribute(t.aria,!1),t.target=t.element.dataset.copy,t.copy(t.target)&&(t.element.setAttribute(t.aria,!0),clearTimeout(t.element.timeout),t.element.timeout=setTimeout((function(){t.element.setAttribute(t.aria,!1)}),t.notifyTimeout)))})),this}return c()(e,[{key:"copy",value:function(t){var s=e.selectors.TARGETS.replace("]",'="'.concat(t,'"]')),i=document.querySelector(s);if(this.select(i),navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(i.value);else{if(!document.execCommand)return!1;document.execCommand("copy")}return!0}},{key:"select",value:function(e){e.select(),e.setSelectionRange(0,99999)}}]),e}();L.selector='[data-js*="copy"]',L.selectors={TARGETS:"[data-copy-target]"},L.aria="aria-pressed",L.notifyTimeout=1500;var T=L,k=s(17),w=s(20),O=s(18),C=function(){function e(t){var s=this;return r()(this,e),this._el=t,this.keys=e.keys,this.endpoints=e.endpoints,this.selectors=e.selectors,this.selector=e.selector,this.stringKeys=e.stringKeys,this.strings=e.strings,this.templates=e.templates,this.classes=e.classes,this.callback=[e.callback,Math.random().toString().replace("0.","")].join(""),window[this.callback]=function(e){s._callback(e)},this.form=new w.a(this._el.querySelector("form")),this.form.strings=this.strings,this.form.submit=function(e){e.preventDefault(),s._submit(e).then(s._onload).catch(s._onerror)},this.form.watch(),this}return c()(e,[{key:"_submit",value:function(e){e.preventDefault(),this._data=Object(O.a)(e.target,{hash:!0});var t=e.target.action.replace("".concat(this.endpoints.MAIN,"?"),"".concat(this.endpoints.MAIN_JSON,"?"));return t+=Object(O.a)(e.target,{serializer:function(){var e="string"==typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:"";return"".concat(e,"&").concat(arguments.length<=1?void 0:arguments[1],"=").concat(arguments.length<=2?void 0:arguments[2])}}),t="".concat(t,"&c=window.").concat(this.callback),new Promise((function(e,s){var i=document.createElement("script");document.body.appendChild(i),i.onload=e,i.onerror=s,i.async=!0,i.src=encodeURI(t)}))}},{key:"_onload",value:function(e){return e.path[0].remove(),this}},{key:"_onerror",value:function(e){return this}},{key:"_callback",value:function(e){return this["_".concat(e[this._key("MC_RESULT")])]&&this["_".concat(e[this._key("MC_RESULT")])](e.msg),this}},{key:"_error",value:function(e){return this._elementsReset(),this._messaging("WARNING",e),this}},{key:"_success",value:function(e){return this._elementsReset(),this._messaging("SUCCESS",e),this}},{key:"_messaging",value:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"no message",i=Object.keys(this.stringKeys),r=!1,n=this._el.querySelector(this.selectors[e]),a=n.querySelector(this.selectors.ALERT_TEXT),o=i.filter((function(e){return s.includes(t.stringKeys[e])}));s=o.length?this.strings[o[0]]:s,r=!!o.length;for(var c=0;c<this.templates.length;c++){var l=this.templates[c],u=l.replace("{{ ","").replace(" }}",""),h=this._data[u]||this.strings[u],d=new RegExp(l,"gi");s=s.replace(d,h||"")}return r?a.innerHTML=s:"ERROR"===e&&(a.innerHTML=this.strings.ERR_PLEASE_TRY_LATER),n&&this._elementShow(n,a),this}},{key:"_elementsReset",value:function(){for(var e=this,t=this._el.querySelectorAll(this.selectors.ALERTS),s=function(s){t[s].classList.contains(e.classes.HIDDEN)||(t[s].classList.add(e.classes.HIDDEN),e.classes.ANIMATE.split(" ").forEach((function(e){return t[s].classList.remove(e)})),t[s].setAttribute("aria-hidden","true"),t[s].querySelector(e.selectors.ALERT_TEXT).setAttribute("aria-live","off"))},i=0;i<t.length;i++)s(i);return this}},{key:"_elementShow",value:function(e,t){return e.classList.toggle(this.classes.HIDDEN),this.classes.ANIMATE.split(" ").forEach((function(t){return e.classList.toggle(t)})),e.setAttribute("aria-hidden","true"),t&&t.setAttribute("aria-live","polite"),this}},{key:"_key",value:function(e){return this.keys[e]}}]),e}();C.keys={MC_RESULT:"result",MC_MSG:"msg"},C.endpoints={MAIN:"/post",MAIN_JSON:"/post-json"},C.callback="NewsletterCallback",C.selectors={ELEMENT:'[data-js="newsletter"]',ALERTS:'[data-js*="alert"]',WARNING:'[data-js="alert-warning"]',SUCCESS:'[data-js="alert-success"]',ALERT_TEXT:'[data-js-alert="text"]'},C.selector=C.selectors.ELEMENT,C.stringKeys={SUCCESS_CONFIRM_EMAIL:"Almost finished...",ERR_PLEASE_ENTER_VALUE:"Please enter a value",ERR_TOO_MANY_RECENT:"too many",ERR_ALREADY_SUBSCRIBED:"is already subscribed",ERR_INVALID_EMAIL:"looks fake or invalid"},C.strings={VALID_REQUIRED:"This field is required.",VALID_EMAIL_REQUIRED:"Email is required.",VALID_EMAIL_INVALID:"Please enter a valid email.",VALID_CHECKBOX_BOROUGH:"Please select a borough.",ERR_PLEASE_TRY_LATER:"There was an error with your submission. Please try again later.",SUCCESS_CONFIRM_EMAIL:"Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.",ERR_PLEASE_ENTER_VALUE:"Please enter a value",ERR_TOO_MANY_RECENT:'Recipient "{{ EMAIL }}" has too many recent signup requests',ERR_ALREADY_SUBSCRIBED:"{{ EMAIL }} is already subscribed to list {{ LIST_NAME }}.",ERR_INVALID_EMAIL:"This email address looks fake or invalid. Please enter a real email address.",LIST_NAME:"Newsletter"},C.templates=["{{ EMAIL }}","{{ LIST_NAME }}"],C.classes={ANIMATE:"animated fadeInUp",HIDDEN:"hidden"};var N=C,I=function(){function e(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r()(this,e),this.selector=s.selector?s.selector:e.selector,this.callback=s.callback?s.callback:e.callback,this.fallback=s.fallback?s.fallback:e.fallback,navigator.share?(document.querySelectorAll(this.selector).forEach((function(e){e.removeAttribute("aria-controls"),e.removeAttribute("aria-expanded")})),document.querySelector("body").addEventListener("click",(function(e){e.target.matches(t.selector)&&(t.element=e.target,t.data=JSON.parse(t.element.dataset.webShare),t.share(t.data))}))):this.fallback(),this}return c()(e,[{key:"share",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return navigator.share(t).then((function(s){e.callback(t)})).catch((function(e){0}))}}]),e}();I.selector='[data-js*="web-share"]',I.callback=function(){0},I.fallback=function(){0};var x=I;!function(e){var t;new n,new h.a,new S("/wp-content/themes/access/assets/svg/icons.e876c3ad.svg"),new T,new g,(new f)._toggle.settings.focusable=!1,new x({callback:function(){a.a.event("Web Share",[{action:"web-share/shared"}])},fallback:function(){new h.a({selector:x.selector})}}),(t=document.querySelector(b.selector))&&new b(t),function(e){e&&(new y(e)._toggle.settings.focusable=!1)}(document.querySelector(y.selector)),document.querySelectorAll(N.selector).forEach((function(e){var t=new N(e),s=Object.fromEntries(["NEWSLETTER_VALID_REQUIRED","NEWSLETTER_VALID_EMAIL_REQUIRED","NEWSLETTER_VALID_EMAIL_INVALID","NEWSLETTER_VALID_CHECKBOX_BOROUGH","NEWSLETTER_SUCCESS_CONFIRM_EMAIL","NEWSLETTER_SUCCESS_SUBSCRIBED","NEWSLETTER_ERR_PLEASE_TRY_LATER","NEWSLETTER_ERR_PLEASE_ENTER_VALUE","NEWSLETTER_ERR_TOO_MANY_RECENT","NEWSLETTER_ERR_ALREADY_SUBSCRIBED","NEWSLETTER_ERR_INVALID_EMAIL"].map((function(e){return[e.replace("NEWSLETTER_",""),Object(k.a)(e)]})));t.strings=s,t.form.strings=s,t.stringKeys.SUCCESS_SUBSCRIBED="Thank you for subscribing"}));var s=document.querySelector("body");s.addEventListener("click",(function(e){e.target.matches('[data-js*="o-mobile-nav"]')&&(e.preventDefault(),s.classList.toggle("overlay"),s.classList.toggle("active"),document.querySelector("#o-mobile-nav").classList.toggle("active"))})),s.addEventListener("click",(function(e){if(e.target.matches('[data-js*="o-search-box"]')){e.preventDefault();var t=document.querySelector("#search");t.classList.toggle("active"),t.classList.contains("active")&&setTimeout((function(){t.querySelector("#search-field").focus()}),20)}})),s.addEventListener("click",(function(e){if(e.target.matches('[data-js*="track"]')){var t=e.target.dataset.trackKey,s=JSON.parse(e.target.dataset.trackData);a.a.event(t,s,e)}})),function(t){~e.location.href.indexOf("?s=")&&t&&e.addEventListener("load",(function(){var e=t.dataset.wtSearchKey,s=JSON.parse(t.dataset.wtSearchData);a.a.webtrends(e,s)}))}(document.querySelector('[data-js="wt-search"]')),function(e){if(e){var t=function(e){e.target.closest("form").submit()};e.addEventListener("change",t),e.addEventListener("input",t)}}(document.querySelector('[data-js="program-search-filter"]')),document.querySelector("html").classList.contains("print-view")&&(e.onload=e.print),document.querySelectorAll('[data-js*="window-print"]').forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.print()}))})),document.querySelectorAll('a[target="_blank"]').forEach((function(e){var t=e.hasAttribute("rel")?"".concat(e.getAttribute("rel")," "):"";-1===t.indexOf("noopener")&&e.setAttribute("rel","".concat(t,"noopener"))})),function(e){e&&new u(e)}(document.querySelector(u.selector))}(window)},3:function(e,t){function s(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,t,s){"use strict";var i=s(1),r=s.n(i),n=s(3),a=s.n(n),o=function(){function e(t){var s=this;if(r()(this,e),window.hasOwnProperty(e.callback)||(window[e.callback]=[]),t=t||{},this.settings={selector:t.selector?t.selector:e.selector,namespace:t.namespace?t.namespace:e.namespace,inactiveClass:t.inactiveClass?t.inactiveClass:e.inactiveClass,activeClass:t.activeClass?t.activeClass:e.activeClass,before:!!t.before&&t.before,after:!!t.after&&t.after,valid:!!t.valid&&t.valid,focusable:!t.hasOwnProperty("focusable")||t.focusable,jump:!t.hasOwnProperty("jump")||t.jump},this.element=!!t.element&&t.element,this.element)this.element.addEventListener("click",(function(e){s.toggle(e)}));else if(!window[e.callback].hasOwnProperty(this.settings.selector))for(var i=document.querySelector("body"),n=0;n<e.events.length;n++){var a=e.events[n];i.addEventListener(a,(function(t){if(t.target.matches(s.settings.selector)){s.event=t;var i=t.type.toUpperCase();s[t.type]&&e.elements[i]&&e.elements[i].includes(t.target.tagName)&&s[t.type](t)}}))}return window[e.callback][this.settings.selector]=!0,this}return a()(e,[{key:"click",value:function(e){this.toggle(e)}},{key:"change",value:function(e){var t=e.target.checkValidity();(t&&!this.isActive(e.target)||!t&&this.isActive(e.target))&&this.toggle(e)}},{key:"isActive",value:function(e){var t=!1;return this.settings.activeClass&&(t=e.classList.contains(this.settings.activeClass)),t}},{key:"getTarget",value:function(e){var t=!1;return t=e.hasAttribute("href")?document.querySelector(e.getAttribute("href")):t,t=e.hasAttribute("aria-controls")?document.querySelector("#".concat(e.getAttribute("aria-controls"))):t}},{key:"toggle",value:function(t){var s=this,i=t.target,r=!1,n=[];if(t.preventDefault(),n=(r=this.getTarget(i))?r.querySelectorAll(e.elFocusable.join(", ")):n,!r)return this;if(this.elementToggle(i,r,n),i.dataset["".concat(this.settings.namespace,"Undo")]){var a=document.querySelector(i.dataset["".concat(this.settings.namespace,"Undo")]);a.addEventListener("click",(function(e){e.preventDefault(),s.elementToggle(i,r),a.removeEventListener("click")}))}return this}},{key:"getOthers",value:function(e){var t=!1;return e.hasAttribute("href")?t='[href="'.concat(e.getAttribute("href"),'"]'):e.hasAttribute("aria-controls")&&(t='[aria-controls="'.concat(e.getAttribute("aria-controls"),'"]')),t?document.querySelectorAll(t):[]}},{key:"toggleFocusable",value:function(t){return t.forEach((function(t){if("-1"===t.getAttribute("tabindex")){var s=t.getAttribute("data-".concat(e.namespace,"-tabindex"));s?t.setAttribute("tabindex",s):t.removeAttribute("tabindex")}else t.setAttribute("tabindex","-1")})),this}},{key:"jumpTo",value:function(e,t){return history.pushState("","",window.location.pathname+window.location.search),t.classList.contains(this.settings.activeClass)?(window.location.hash=e.getAttribute("href"),t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})):t.removeAttribute("tabindex"),this}},{key:"elementToggle",value:function(t,s){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=0,a="",o="";if(this.element=t,this.target=s,this.others=this.getOthers(t),this.focusable=r,this.settings.valid&&!this.settings.valid(this))return this;for(this.settings.before&&this.settings.before(this),this.settings.activeClass&&(this.element.classList.toggle(this.settings.activeClass),this.target.classList.toggle(this.settings.activeClass),this.others.forEach((function(e){e!==i.element&&e.classList.toggle(i.settings.activeClass)}))),this.settings.inactiveClass&&s.classList.toggle(this.settings.inactiveClass),n=0;n<e.targetAriaRoles.length;n++)a=e.targetAriaRoles[n],""!=(o=this.target.getAttribute(a))&&o&&this.target.setAttribute(a,"true"===o?"false":"true");for(this.settings.focusable&&this.toggleFocusable(this.focusable),this.settings.jump&&this.element.hasAttribute("href")&&this.jumpTo(this.element,this.target),n=0;n<e.elAriaRoles.length;n++)a=e.elAriaRoles[n],""!=(o=this.element.getAttribute(a))&&o&&this.element.setAttribute(a,"true"===o?"false":"true"),this.others.forEach((function(e){e!==i.element&&e.getAttribute(a)&&e.setAttribute(a,"true"===o?"false":"true")}));return this.settings.after&&this.settings.after(this),this}}]),e}();o.selector='[data-js*="toggle"]',o.namespace="toggle",o.inactiveClass="hidden",o.activeClass="active",o.elAriaRoles=["aria-pressed","aria-expanded"],o.targetAriaRoles=["aria-hidden"],o.elFocusable=["a","button","input","select","textarea","object","embed","form","fieldset","legend","label","area","audio","video","iframe","svg","details","table","[tabindex]","[contenteditable]","[usemap]"],o.callback=["TogglesCallback"],o.events=["click","change"],o.elements={CLICK:["A","BUTTON"],CHANGE:["SELECT","INPUT","TEXTAREA"]},t.a=o}});
//# sourceMappingURL=main.61bf43b7.js.map