parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({26:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this");Object.defineProperty(exports,"__esModule",{value:!0});var t="object"==typeof e&&e&&e.Object===Object&&e;exports.default=t;
},{}],25:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_freeGlobal.js"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var l="object"==typeof self&&self&&self.Object===Object&&self,s=t.default||l||Function("return this")();exports.default=s;
},{"./_freeGlobal.js":26}],21:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_root.js"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var u=r.default.Symbol;exports.default=u;
},{"./_root.js":25}],22:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_Symbol.js"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.prototype,o=a.hasOwnProperty,l=a.toString,u=t.default?t.default.toStringTag:void 0;function d(e){var t=o.call(e,u),r=e[u];try{e[u]=void 0;var a=!0}catch(e){}var d=l.call(e);return a&&(t?e[u]=r:delete e[u]),d}exports.default=d;
},{"./_Symbol.js":21}],23:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.prototype,t=e.toString;function r(e){return t.call(e)}exports.default=r;
},{}],16:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_Symbol.js"),t=d(e),r=require("./_getRawTag.js"),u=d(r),o=require("./_objectToString.js"),l=d(o);function d(e){return e&&e.__esModule?e:{default:e}}var i="[object Null]",n="[object Undefined]",a=t.default?t.default.toStringTag:void 0;function f(e){return null==e?void 0===e?n:i:a&&a in Object(e)?(0,u.default)(e):(0,l.default)(e)}exports.default=f;
},{"./_Symbol.js":21,"./_getRawTag.js":22,"./_objectToString.js":23}],24:[function(require,module,exports) {
"use strict";function e(e,t){return function(r){return e(t(r))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_overArg.js"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var u=(0,t.default)(Object.getPrototypeOf,Object);exports.default=u;
},{"./_overArg.js":24}],18:[function(require,module,exports) {
"use strict";function e(e){return null!=e&&"object"==typeof e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_baseGetTag.js"),t=c(e),r=require("./_getPrototype.js"),o=c(r),u=require("./isObjectLike.js"),n=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var a="[object Object]",l=Function.prototype,i=Object.prototype,s=l.toString,f=i.hasOwnProperty,p=s.call(Object);function j(e){if(!(0,n.default)(e)||(0,t.default)(e)!=a)return!1;var r=(0,o.default)(e);if(null===r)return!0;var u=f.call(r,"constructor")&&r.constructor;return"function"==typeof u&&u instanceof u&&s.call(u)==p}exports.default=j;
},{"./_baseGetTag.js":16,"./_getPrototype.js":17,"./isObjectLike.js":18}],19:[function(require,module,exports) {
"use strict";function e(e){var o,r=e.Symbol;return"function"==typeof r?r.observable?o=r.observable:(o=r("observable"),r.observable=o):o="@@observable",o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],11:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this");Object.defineProperty(exports,"__esModule",{value:!0});var d,n=require("./ponyfill.js"),o=t(n);function t(e){return e&&e.__esModule?e:{default:e}}d="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof module?module:Function("return this")();var u=(0,o.default)(d);exports.default=u;
},{"./ponyfill.js":19}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActionTypes=void 0,exports.default=u;var e=require("lodash-es/isPlainObject"),t=o(e),r=require("symbol-observable"),n=o(r);function o(e){return e&&e.__esModule?e:{default:e}}var i=exports.ActionTypes={INIT:"@@redux/INIT"};function u(e,r,o){var c;if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(u)(e,r)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,s=r,a=[],d=a,p=!1;function l(){d===a&&(d=a.slice())}function y(){return s}function b(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return l(),d.push(e),function(){if(t){t=!1,l();var r=d.indexOf(e);d.splice(r,1)}}}function h(e){if(!(0,t.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=f(s,e)}finally{p=!1}for(var r=a=d,n=0;n<r.length;n++){(0,r[n])()}return e}return h({type:i.INIT}),(c={dispatch:h,subscribe:b,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");f=e,h({type:i.INIT})}})[n.default]=function(){var e,t=b;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(y())}return r(),{unsubscribe:t(r)}}})[n.default]=function(){return this},e},c}
},{"lodash-es/isPlainObject":12,"symbol-observable":11}],10:[function(require,module,exports) {
"use strict";function e(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("./createStore"),t=require("lodash-es/isPlainObject"),n=o(t),r=require("./utils/warning"),i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(t,r,i,o){var a=Object.keys(r),u=i&&i.type===e.ActionTypes.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===a.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,n.default)(t))return"The "+u+' has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+a.join('", "')+'"';var d=Object.keys(t).filter(function(e){return!r.hasOwnProperty(e)&&!o[e]});return d.forEach(function(e){o[e]=!0}),d.length>0?"Unexpected "+(d.length>1?"keys":"key")+' "'+d.join('", "')+'" found in '+u+'. Expected to find one of the known reducer keys instead: "'+a.join('", "')+'". Unexpected keys will be ignored.':void 0}function d(t){Object.keys(t).forEach(function(n){var r=t[n];if(void 0===r(void 0,{type:e.ActionTypes.INIT}))throw new Error('Reducer "'+n+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+n+"\" returned undefined when probed with a random type. Don't try to handle "+e.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var o=Object.keys(n);var u=void 0;try{d(n)}catch(e){u=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(u)throw u;for(var r=!1,i={},d=0;d<o.length;d++){var s=o[d],c=n[s],f=e[s],l=c(f,t);if(void 0===l){var h=a(s,t);throw new Error(h)}i[s]=l,r=r||l!==f}return r?i:e}}
},{"./createStore":5,"lodash-es/isPlainObject":12,"./utils/warning":10}],7:[function(require,module,exports) {
"use strict";function t(t,e){return function(){return e(t.apply(void 0,arguments))}}function e(e,o){if("function"==typeof e)return t(e,o);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},i=0;i<r.length;i++){var f=r[i],u=e[f];"function"==typeof u&&(n[f]=t(u,o))}return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],9:[function(require,module,exports) {
"use strict";function e(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return 0===r.length?function(e){return e}:1===r.length?r[0]:r.reduce(function(e,r){return function(){return e(r.apply(void 0,arguments))}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var t=require("./compose"),r=e(t);function e(t){return t&&t.__esModule?t:{default:t}}var n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};function a(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(t){return function(a,u,o){var c,i=t(a,u,o),f=i.dispatch,p={getState:i.getState,dispatch:function(t){return f(t)}};return c=e.map(function(t){return t(p)}),f=r.default.apply(void 0,c)(i.dispatch),n({},i,{dispatch:f})}}}
},{"./compose":9}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=void 0;var e=require("./createStore"),r=l(e),t=require("./combineReducers"),o=l(t),i=require("./bindActionCreators"),s=l(i),u=require("./applyMiddleware"),d=l(u),a=require("./compose"),p=l(a),c=require("./utils/warning"),n=l(c);function l(e){return e&&e.__esModule?e:{default:e}}function x(){}exports.createStore=r.default,exports.combineReducers=o.default,exports.bindActionCreators=s.default,exports.applyMiddleware=d.default,exports.compose=p.default;
},{"./createStore":5,"./combineReducers":6,"./bindActionCreators":7,"./applyMiddleware":8,"./compose":9,"./utils/warning":10}],3:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.NB_ITEMS=1e6,r=exports.SORTING_PROPS=[["name","Book Name"],["author_name","Author Name"]],o=exports.SORTING_ASC="asc",a=exports.FILTERING_PROP_GENRE="book_genre",t=exports.FILTERING_PROP_GENDER="author_gender",R=exports.FILTERING_PROPS=[[a,"Book Genre"],[t,"Author Gender"]],s=exports.BOOK_GENRE_HORROR="horror",_=exports.BOOK_GENRE_FINANCE="finance",n=exports.BOOK_GENRES=[["fantasy","Fantasy"],["biography","Biography"],["sci-fi","Sci Fi"],["science","Science"],["romance","Romance"],[s,"Horror"],[_,"Finance"]],E=exports.AUTHOR_GENDERS=[["male","Male"],["female","Female"]];
},{}],20:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=null;self.document&&(e=Function("try { return new Worker('./worker.src.js'); } catch (e) { return null; }")()),exports.default=e;
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateListSuccess=exports.updateListRequest=exports.LIST_UPDATE_SUCCESS=exports.LIST_UPDATE_PENDING=exports.LIST_UPDATE_REQUEST=void 0;var e=require("../worker"),t=s(e);function s(e){return e&&e.__esModule?e:{default:e}}var r=exports.LIST_UPDATE_REQUEST="LIST_UPDATE_REQUEST",o=exports.LIST_UPDATE_PENDING="LIST_UPDATE_PENDING",i=exports.LIST_UPDATE_SUCCESS="LIST_UPDATE_SUCCESS",u=exports.updateListRequest=function(e,s,i){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n={type:r,visibleChunkIndex:e,sorting:s,filtering:i,isMajorChange:u};return t.default.postMessage({action:n}),{type:o}},n=exports.updateListSuccess=function(e,t,s,r,o){return{type:i,chunks:e,visibleChunkIndex:t,sorting:s,filtering:r,itemsCount:o}};
},{"../worker":20}],28:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r};exports.default=s;var e=require("../../actions"),n=i(e),t=require("../../constants");function i(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e.default=r,e}var o=function(e,n,i){var o=n.isMajorChange,u=n.visibleChunkIndex,s=n.sorting,a=n.filtering,l=void 0;if(i){a=a||e.filtering,s=s||e.sorting;var d=Object.keys(a||{});o?(l=i.allIds.filter(function(r){var e=i.byId[r];return d.reduce(function(r,n){return r&&e[n]==a[n]},!0)}),s&&l.sort(function(r,e){var n=i.byId[r],o=i.byId[e];return n[s.prop]<o[s.prop]?s.dir==t.SORTING_ASC?-1:1:n[s.prop]>o[s.prop]?s.dir==t.SORTING_ASC?1:-1:0})):l=e.orderedIds}return r({},e,{visibleChunkIndex:u,sorting:s,filtering:a,orderedIds:l})},u=function(e,n,t){var i=n.chunks,o=n.visibleChunkIndex,u=n.sorting,s=n.filtering,a=n.itemsCount;return r({},e,{visibleChunkIndex:o,visibleChunks:i,sorting:u,filtering:s,itemsCount:a})};function s(r,e,t){switch(e.type){case n.LIST_UPDATE_REQUEST:return o(r,e,t);case n.LIST_UPDATE_SUCCESS:return u(r,e,t);default:return r}}
},{"../../actions":13,"../../constants":3}],27:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=require("./list"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}function u(e,r,u){return{list:(0,t.default)(e.list,r,u)}}
},{"./list":28}],14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e};exports.default=n;var r=require("./ui"),t=u(r);function u(e){return e&&e.__esModule?e:{default:e}}function n(r,u){return e({},r,{ui:(0,t.default)(r.ui,u,r.entities.books)})}
},{"./ui":27}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getListItemsCount=exports.getListFiltering=exports.getListSorting=exports.getVisibleChunksOfList=exports.getChunksOfList=exports.getItemsPerChunk=exports.getVisibleChunkIndex=void 0;var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e=require("../constants");function r(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var n=exports.getVisibleChunkIndex=function(t){return t.ui.list.visibleChunkIndex},i=exports.getItemsPerChunk=function(t){return t.ui.list.itemsPerChunk},u=function(t){return t.ui.list.orderedIds},s=function(t){return t.entities.books.byId},o=function(t){return t.book_genre==e.BOOK_GENRE_HORROR&&10==t.publish_date.getMonth()&&1==t.publish_date.getDate()},l=function(t){for(var e=void 0,r=1;r<=31;r++){var n=new Date(t.getFullYear(),t.getMonth(),r);if(n.getMonth()>t.getMonth())return e;5==n.getDay()&&(e=n.getDate())}return e},a=function(t){return t.book_genre==e.BOOK_GENRE_FINANCE&&5==t.publish_date.getDay()&&t.publish_date.getDate()==l(t.publish_date)},f=function(t,e){return function(n){return e.apply(void 0,r(t.map(function(t){return t(n)})))}},g=exports.getChunksOfList=f([n,i,u,s],function(e,r,n,i){var u=(e-(e>0?1:0))*r,s=(e+2)*r;return n.filter(function(t,e){return e>=u&&e<s}).map(function(e){return t({},i[e])}).reduce(function(t,e,n){return o(e)&&(e.horror_halloween=!0),a(e)&&(e.finance_last_friday=!0),n<r?(t[0]||(t[0]=[]),t[0].push(e)):n<2*r?(t[1]||(t[1]=[]),t[1].push(e)):n<3*r&&(t[2]||(t[2]=[]),t[2].push(e)),t},[])}),p=exports.getVisibleChunksOfList=function(t){return t.ui.list.visibleChunks},h=exports.getListSorting=function(t){return t.ui.list.sorting},c=exports.getListFiltering=function(t){return t.ui.list.filtering},d=exports.getListItemsCount=function(t){return self.document?t.ui.list.itemsCount:t.ui.list.orderedIds.length};
},{"../constants":3}],1:[function(require,module,exports) {
"use strict";var e=require("redux"),t=require("./constants"),r=require("./actions"),i=u(r),n=require("./reducers"),a=o(n),s=require("./selectors");function o(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}for(var d=function(e){return e[Math.floor(100*Math.random())%e.length]},l=function(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},c={entities:{books:{allIds:new Array(t.NB_ITEMS),byId:{}}},ui:{list:{itemsPerChunk:50,visibleChunkIndex:0,orderedIds:new Array(t.NB_ITEMS)}}},f=new Date(2017,0,1),g=new Date,h=0;h<t.NB_ITEMS;h++){var _=h,I=void 0;c.entities.books.allIds[h]=_,c.ui.list.orderedIds[h]=_;var b={id:_,name:h+" Title",book_genre:d(t.BOOK_GENRES)[0],author_name:"Author Name "+(t.NB_ITEMS-h),author_gender:d(t.AUTHOR_GENDERS)[0],publish_date:l(f,g)};c.entities.books.byId[_]=b}var m=(0,e.createStore)(a.default,c);m.subscribe(function(){var e=m.getState();postMessage({action:i.updateListSuccess((0,s.getChunksOfList)(e),(0,s.getVisibleChunkIndex)(e),(0,s.getListSorting)(e),(0,s.getListFiltering)(e),(0,s.getListItemsCount)(e))})}),self.onmessage=function(e){e.data.action&&m.dispatch(e.data.action)};
},{"redux":4,"./constants":3,"./actions":13,"./reducers":14,"./selectors":15}]},{},[1])
//# sourceMappingURL=/worker.src.map