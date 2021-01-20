/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MINUTES_IN_HOUR, HOURS_IN_DAY, TRIP_POINT_TYPES, CITIES, DESCRIPTION, OFFERS, FilterType, UserAction, UpdateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES_IN_HOUR", function() { return MINUTES_IN_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_IN_DAY", function() { return HOURS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIP_POINT_TYPES", function() { return TRIP_POINT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTION", function() { return DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS", function() { return OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return UpdateType; });
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const TRIP_POINT_TYPES = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`,
];

const CITIES = [
  `Moscow`,
  `St. Petersburg`,
  `Yekaterinburg`,
  `Beijing`,
  `Guangzhou`,
  `London`,
  `Berlin`,
  `Amsterdam`,
  `New York`,
  `Dallas`,
  `Austin`,
  `Paris`,
  `Vienna`,
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const OFFERS = {
  'Taxi': [`Order Uber`],
  'Bus': [`Switch to comfort class`],
  'Train': [`Travel by Airlines`, `Switch to comfort class`, `Add meal`],
  'Ship': [`Switch to comfort class`, `Travel by Airlines`, `Rent a yacht`],
  'Transport': [`Order Uber`, `Rent a bicycle`],
  'Drive': [`Rent a car`],
  'Flight': [`Add luggage`, `Choose seats`, `Switch to comfort class`, `Travel by train`, `Add meal`],
  'Check-in': [`Add breakfast`, `Early check-in`, `Late check-out`],
  'Sightseeing': [`Book tickets`, `Lunch in city`, `Buy souvenirs`, `Take a tour guide`],
  'Restaurant': [`Order Uber`, `Add wine`, `Take a music band`],
};

const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`,
};

const UserAction = {
  UPDATE_POINT: `UPDATE_POINT`,
  ADD_POINT: `ADD_POINT`,
  DELETE_POINT: `DELETE_POINT`,
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_switches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/switches */ "./src/view/switches.js");
/* harmony import */ var _presenter_trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/trip */ "./src/presenter/trip.js");
/* harmony import */ var _presenter_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/filter */ "./src/presenter/filter.js");
/* harmony import */ var _presenter_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/summary */ "./src/presenter/summary.js");
/* harmony import */ var _model_points__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/points */ "./src/model/points.js");
/* harmony import */ var _model_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/filter */ "./src/model/filter.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");









const TRIP_POINTS = 20;
const tripPoints = new Array(TRIP_POINTS).fill().map(_mock_point__WEBPACK_IMPORTED_MODULE_6__["generateTripPoint"]);
tripPoints.sort((a, b) => {
  return a.dates[0] - b.dates[0];
});

const pointsModel = new _model_points__WEBPACK_IMPORTED_MODULE_4__["default"]();
pointsModel.setPoints(tripPoints);

const tripMainHandler = document.querySelector(`.trip-main`);
const tripControlsHandler = tripMainHandler.querySelector(`.trip-controls`);
const tripSwitchesHandler = tripControlsHandler.querySelector(`.visually-hidden`);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(tripSwitchesHandler, new _view_switches__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);

const summaryPresenter = new _presenter_summary__WEBPACK_IMPORTED_MODULE_3__["default"](tripMainHandler, pointsModel);
summaryPresenter.init();

const filterModel = new _model_filter__WEBPACK_IMPORTED_MODULE_5__["default"]();
const filterPresenter = new _presenter_filter__WEBPACK_IMPORTED_MODULE_2__["default"](tripControlsHandler, filterModel, pointsModel);
filterPresenter.init();

const tripEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new _presenter_trip__WEBPACK_IMPORTED_MODULE_1__["default"](tripEventsElement, pointsModel, filterModel);
tripPresenter.init();

document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  tripPresenter.createPoint();
});


/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: generateTripPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripPoint", function() { return generateTripPoint; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");



function generateTripPoint() {
  const type = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomType"])();

  return {
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])(),
    type,
    city: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomCity"])(),
    description: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomDescription"])(),
    offers: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomOffers"])(type),
    price: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomPrice"])(),
    images: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomImages"])(),
    dates: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomDates"])(),
    isFavorite: Boolean(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
  };
}


/***/ }),

/***/ "./src/model/filter.js":
/*!*****************************!*\
  !*** ./src/model/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer */ "./src/utils/observer.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



class Filter extends _utils_observer__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeFilter = _const__WEBPACK_IMPORTED_MODULE_1__["FilterType"].EVERYTHING;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}


/***/ }),

/***/ "./src/model/points.js":
/*!*****************************!*\
  !*** ./src/model/points.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Points; });
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer */ "./src/utils/observer.js");


class Points extends _utils_observer__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._points = [];
  }

  getPoints() {
    return this._points;
  }

  setPoints(points) {
    this._points = points.slice();
  }

  updatePoint(updateType, update) {
    const index = this._points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error(`Cannot update unexisting point`);
    }

    this._points = [
      ...this._points.slice(0, index),
      update,
      ...this._points.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this._points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error(`Cannot delete unexisting point`);
    }

    this._points = [
      ...this._points.slice(0, index),
      ...this._points.slice(index + 1)
    ];

    this._notify(updateType);
  }

  addPoint(updateType, update) {
    this._points = [update, ...this._points];
    this._points.sort((a, b) => {
      return a.dates[0] - b.dates[0];
    });

    this._notify(updateType, update);
  }
}


/***/ }),

/***/ "./src/presenter/filter.js":
/*!*********************************!*\
  !*** ./src/presenter/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/filter */ "./src/view/filter.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");




class Filter {
  constructor(filterContainer, filterModel, pointsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._pointsModel = pointsModel;

    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._pointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_filter__WEBPACK_IMPORTED_MODULE_0__["default"](filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._filterContainer, this._filterComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filterComponent, prevFilterComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(_const__WEBPACK_IMPORTED_MODULE_1__["UpdateType"].MAJOR, filterType);
  }

  _getFilters() {
    return Object.values(_const__WEBPACK_IMPORTED_MODULE_1__["FilterType"]);
  }
}


/***/ }),

/***/ "./src/presenter/new-point.js":
/*!************************************!*\
  !*** ./src/presenter/new-point.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewPoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_edit_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/edit-point */ "./src/view/edit-point.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");







const BLANK_POINT = {
  type: _const__WEBPACK_IMPORTED_MODULE_4__["TRIP_POINT_TYPES"][0],
  city: ``,
  description: ``,
  offers: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__["getRandomOffers"])(_const__WEBPACK_IMPORTED_MODULE_4__["TRIP_POINT_TYPES"][0]),
  price: ``,
  images: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__["getRandomImages"])(),
  dates: [dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate(), dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate()],
  isFavorite: false,
};

class NewPoint {
  constructor(pointListContainer, changeData) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;

    this._pointEditComponent = null;
    this._destroyCallback = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleCancelClick = this._handleCancelClick.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
  }

  init() {
    if (this._pointEditComponent === null) {
      this._pointEditComponent = new _view_edit_point__WEBPACK_IMPORTED_MODULE_1__["default"](BLANK_POINT, true);

      this._pointEditComponent.setSubmitFormClick(this._handleFormSubmit);
      this._pointEditComponent.setDeleteClick(this._handleCancelClick);
      this._pointEditComponent.setCloseFormClick(this._handleCancelClick);

      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._pointListContainer, this._pointEditComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);

      document.addEventListener(`keydown`, this._handleEscKeyDown);
    }
  }

  destroy() {
    if (this._pointEditComponent !== null) {
      if (this._destroyCallback !== null) {
        this._destroyCallback();
      }

      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointEditComponent);
      this._pointEditComponent = null;

      document.removeEventListener(`keydown`, this._handleEscKeyDown);
    }
  }

  _handleFormSubmit(point) {
    this._changeData(
        _const__WEBPACK_IMPORTED_MODULE_4__["UserAction"].ADD_POINT,
        _const__WEBPACK_IMPORTED_MODULE_4__["UpdateType"].MINOR,
        Object.assign({id: Object(nanoid__WEBPACK_IMPORTED_MODULE_5__["nanoid"])()}, point)
    );

    this.destroy();
  }

  _handleCancelClick() {
    this.destroy();
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}


/***/ }),

/***/ "./src/presenter/point.js":
/*!********************************!*\
  !*** ./src/presenter/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _view_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point */ "./src/view/point.js");
/* harmony import */ var _view_edit_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/edit-point */ "./src/view/edit-point.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");





const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

class Point {
  constructor(pointListContainer, changeMode, changeData) {
    this._pointListContainer = pointListContainer;
    this._changeMode = changeMode;
    this._changeData = changeData;

    this._pointComponent = null;
    this._pointEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleCloseFormClick = this._handleCloseFormClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;

    this._pointComponent = new _view_point__WEBPACK_IMPORTED_MODULE_0__["default"](point);
    this._pointEditComponent = new _view_edit_point__WEBPACK_IMPORTED_MODULE_1__["default"](point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._pointEditComponent.setSubmitFormClick(this._handleFormSubmit);
    this._pointEditComponent.setCloseFormClick(this._handleCloseFormClick);
    this._pointEditComponent.setDeleteClick(this._handleDeleteClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._pointListContainer, this._pointComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    this._replaceIfExist(this._pointComponent, prevPointComponent);
    this._replaceIfExist(this._pointEditComponent, prevPointEditComponent);

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPointComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToView();
    }
  }

  destroy() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointEditComponent);
  }

  _replaceIfExist(newComponent, oldComponent) {
    if (this._pointListContainer.getElement().contains(oldComponent.getElement())) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(newComponent, oldComponent);
    }
  }

  _replaceViewToEdit() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointEditComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._handleEscKeyDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceEditToView() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointComponent, this._pointEditComponent);
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
    this._mode = Mode.DEFAULT;
  }

  _handleFormSubmit(point) {
    this._changeData(
        _const__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_POINT,
        _const__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].PATCH,
        point);
    this._replaceEditToView();
  }

  _handleEditClick() {
    this._replaceViewToEdit();
  }

  _handleCloseFormClick() {
    this._pointEditComponent.reset(this._point);
    this._replaceEditToView();
  }

  _handleFavoriteClick() {
    this._changeData(
        _const__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_POINT,
        _const__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].PATCH,
        Object.assign({}, this._point, {isFavorite: !this._point.isFavorite}));
  }

  _handleDeleteClick(point) {
    this._changeData(
        _const__WEBPACK_IMPORTED_MODULE_3__["UserAction"].DELETE_POINT,
        _const__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        point
    );
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._pointEditComponent.reset(this._point);
      this._replaceEditToView();
    }
  }
}


/***/ }),

/***/ "./src/presenter/summary.js":
/*!**********************************!*\
  !*** ./src/presenter/summary.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var _view_trip_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/trip-info */ "./src/view/trip-info.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");



class Summary {
  constructor(summaryContainer, pointsModel) {
    this._summaryContainer = summaryContainer;
    this._pointsModel = pointsModel;

    this._summaryComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._pointsModel.addObserver(this._handleModelEvent);
  }

  init() {
    const points = this._pointsModel.getPoints();
    const prevSummaryComponent = this._summaryComponent;

    if (!points.length) {
      if (this._summaryComponent !== null) {
        Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._summaryComponent);
        this._summaryComponent = null;
      }
      return;
    }

    this._summaryComponent = new _view_trip_info__WEBPACK_IMPORTED_MODULE_0__["default"](points);

    if (prevSummaryComponent === null) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._summaryContainer, this._summaryComponent, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
      return;
    }

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._summaryComponent, prevSummaryComponent);
  }

  _handleModelEvent() {
    this.init();
  }
}


/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* harmony import */ var _view_events_sort_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/events-sort-form */ "./src/view/events-sort-form.js");
/* harmony import */ var _view_point_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/point-list */ "./src/view/point-list.js");
/* harmony import */ var _view_no_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point */ "./src/view/no-point.js");
/* harmony import */ var _presenter_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presenter/point */ "./src/presenter/point.js");
/* harmony import */ var _presenter_new_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presenter/new-point */ "./src/presenter/new-point.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/filter */ "./src/utils/filter.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/const.js");









class Trip {
  constructor(tripContainer, pointsModel, filterModel) {
    this._tripContainer = tripContainer;
    this._pointsModel = pointsModel;
    this._filterModel = filterModel;
    this._pointsPresenters = {};

    this._sortComponent = null;
    this._pointListComponent = new _view_point_list__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._noPointComponent = new _view_no_point__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._pointNewPresenter = new _presenter_new_point__WEBPACK_IMPORTED_MODULE_4__["default"](this._pointListComponent, this._handleViewAction);
  }

  init() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._pointListComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._pointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderTrip();
  }

  createPoint() {
    this._filterModel.setFilter(_const__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].MAJOR, _const__WEBPACK_IMPORTED_MODULE_7__["FilterType"].EVERYTHING);
    this._pointNewPresenter.init();
  }

  _getPoints() {
    const filterType = this._filterModel.getFilter();
    const points = this._pointsModel.getPoints();
    const filteredPoints = _utils_filter__WEBPACK_IMPORTED_MODULE_6__["filter"][filterType](points);

    return filteredPoints;
  }

  _handleModeChange() {
    this._pointNewPresenter.destroy();

    Object.values(this._pointsPresenters)
      .forEach((presenter) => presenter.resetView());
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case _const__WEBPACK_IMPORTED_MODULE_7__["UserAction"].UPDATE_POINT:
        this._pointsModel.updatePoint(updateType, update);
        break;
      case _const__WEBPACK_IMPORTED_MODULE_7__["UserAction"].DELETE_POINT:
        this._pointsModel.deletePoint(updateType, update);
        break;
      case _const__WEBPACK_IMPORTED_MODULE_7__["UserAction"].ADD_POINT:
        this._pointsModel.addPoint(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case _const__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].PATCH:
        this._pointsPresenters[data.id].init(data);
        break;
      case _const__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].MINOR:
        this._clearTrip();
        this._renderTrip();
        break;
      case _const__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].MAJOR:
        this._clearTrip();
        this._renderTrip();
        break;
    }
  }

  _handlePointChange(updatedPoint) {
    this._pointsModel.updatePoint(updatedPoint);
    this._pointsPresenters[updatedPoint.id].init(updatedPoint);
  }

  _clearTrip() {
    this._pointNewPresenter.destroy();

    Object
      .values(this._pointsPresenters)
      .forEach((presenter) => presenter.destroy());
    this._pointsPresenters = {};

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._sortComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._noPointComponent);
  }

  _renderSort() {
    this._sortComponent = new _view_events_sort_form__WEBPACK_IMPORTED_MODULE_0__["default"]();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._sortComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].AFTERBEGIN);
  }

  _renderNoPoints() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._noPointComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _renderPoint(point) {
    const pointPresenter = new _presenter_point__WEBPACK_IMPORTED_MODULE_3__["default"](this._pointListComponent, this._handleModeChange, this._handleViewAction);
    pointPresenter.init(point);
    this._pointsPresenters[point.id] = pointPresenter;
  }

  _renderPoints(points) {
    points.forEach((point) => this._renderPoint(point));
  }

  _renderTrip() {
    const points = this._getPoints();
    const pointCount = points.length;

    if (pointCount === 0) {
      this._renderNoPoints();
      return;
    }

    this._renderSort();
    this._renderPoints(points);
  }
}


/***/ }),

/***/ "./src/utils/filter.js":
/*!*****************************!*\
  !*** ./src/utils/filter.js ***!
  \*****************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/utils/point.js");



const filter = {
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].EVERYTHING]: (points) => points,
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].FUTURE]: (points) => points.filter((point) => Object(_point__WEBPACK_IMPORTED_MODULE_1__["isPointInFuture"])(point.dates[0])),
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].PAST]: (points) => points.filter((point) => Object(_point__WEBPACK_IMPORTED_MODULE_1__["isPointInPast"])(point.dates[1])),
};


/***/ }),

/***/ "./src/utils/observer.js":
/*!*******************************!*\
  !*** ./src/utils/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  _notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}


/***/ }),

/***/ "./src/utils/point.js":
/*!****************************!*\
  !*** ./src/utils/point.js ***!
  \****************************/
/*! exports provided: isPointInPast, isPointInFuture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPast", function() { return isPointInPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInFuture", function() { return isPointInFuture; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const isPointInPast = (endDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(endDate, `D`);
};

const isPointInFuture = (startDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isBefore(startDate, `D`) || dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isSame(startDate, `D`);
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, child, place) => {
  container = container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.getElement() : container;
  child = child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] ? child.getElement() : child;

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  newChild = newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] ? newChild.getElement() : newChild;
  oldChild = oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldChild.getElement() : oldChild;

  const parent = oldChild.parentElement;

  if (parent === null || newChild === null || oldChild === null) {
    throw new Error(`Cannot replace unexisting element.`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/tools.js":
/*!****************************!*\
  !*** ./src/utils/tools.js ***!
  \****************************/
/*! exports provided: getRandomInteger, getRandomType, getRandomCity, getRandomDescription, getRandomPrice, getRandomImages, getRandomDates, getRandomOffers, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomType", function() { return getRandomType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomCity", function() { return getRandomCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDescription", function() { return getRandomDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPrice", function() { return getRandomPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomImages", function() { return getRandomImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDates", function() { return getRandomDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffers", function() { return getRandomOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomType() {
  return _const__WEBPACK_IMPORTED_MODULE_1__["TRIP_POINT_TYPES"][getRandomInteger(0, _const__WEBPACK_IMPORTED_MODULE_1__["TRIP_POINT_TYPES"].length - 1)];
}

function getRandomCity() {
  return _const__WEBPACK_IMPORTED_MODULE_1__["CITIES"][getRandomInteger(0, _const__WEBPACK_IMPORTED_MODULE_1__["CITIES"].length - 1)];
}

function getRandomDescription() {
  const description = [];
  const sentencesNumber = getRandomInteger(1, 5);

  for (let i = 0; i < sentencesNumber; i++) {
    const sentence = _const__WEBPACK_IMPORTED_MODULE_1__["DESCRIPTION"][getRandomInteger(0, _const__WEBPACK_IMPORTED_MODULE_1__["DESCRIPTION"].length - 1)];
    description.push(sentence);
  }

  return description.join(` `);
}

function getRandomPrice(maxPrice = 100) {
  return getRandomInteger(1, maxPrice) * 10;
}

function getRandomImages() {
  const imagesNumber = getRandomInteger(1, 5);
  const images = [];
  for (let i = 0; i < imagesNumber; i++) {
    images.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return images;
}

function getRandomDates() {
  const offset = getRandomInteger(1, 10);

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`);
  const endDate = startDate.add(offset, `hour`);

  return [startDate.toDate(), endDate.toDate()];
}

function getRandomOffers(type) {
  const offersNumber = getRandomInteger(0, _const__WEBPACK_IMPORTED_MODULE_1__["OFFERS"][type].length);
  const offers = {};
  for (let i = 0; i < offersNumber; i++) {
    const price = getRandomInteger(10, 100);
    offers[_const__WEBPACK_IMPORTED_MODULE_1__["OFFERS"][type][i]] = price;
  }

  return offers;
}

function updateItem(items, update) {
  const index = items.findIndex((item) => item.id === update.id);

  return (index === -1)
    ? items
    : [...items.slice(0, index), update, ...items.slice(index + 1)];
}


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate.`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/cost.js":
/*!**************************!*\
  !*** ./src/view/cost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cost; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createCost(cost) {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>`;
}

class Cost extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cost) {
    super();

    this._cost = cost;
  }

  getTemplate() {
    return createCost(this._cost);
  }
}


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart */ "./src/view/smart.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");
/* harmony import */ var _event_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-types */ "./src/view/event-types.js");









function getIdFromOffer([title, price]) {
  return `${title.replaceAll(` `, `-`)}-${price}`;
}

function getOfferFromId(id) {
  const newId = id.slice().split(`-`);
  newId.shift();
  newId.shift();

  const price = parseInt(newId.pop(), 10);
  const title = newId.join(` `);

  return [title, price];
}

function createOffersTemplate(offers, type) {
  const availableOffers = _const__WEBPACK_IMPORTED_MODULE_2__["OFFERS"][type];
  if (availableOffers.length === 0) {
    return ``;
  }

  let template = ``;

  for (const offer of availableOffers) {
    const price = offers[offer] || Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(10, 100);
    const offerId = getIdFromOffer([offer, price]);
    template += `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerId}" type="checkbox" name="event-offer-${offerId}" ${Object.keys(offers).includes(offer) ? `checked` : ``}>
    <label class="event__offer-label" for="event-offer-${offerId}">
        <span class="event__offer-title">${offer}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
    </label>
    </div>`;
  }

  return `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">${template}</div>
  </section>`;
}

function createImagesTemplate(images) {
  return images.length
    ? `<div class="event__photos-container">
        <div class="event__photos-tape">
        ${images.map((image) => `<img class="event__photo" src="${image}" alt="Event photo">`)}
        </div>
      </div>`
    : ``;
}

function createDescriptionTemplate(description, images) {
  return description.length
    ? `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
          ${createImagesTemplate(images)}
        </section>`
    : ``;
}

function createEditPoint(data, isNewPoint) {
  const {type, city, description, price, dates, offers, images} = data;
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`DD/MM/YY HH:mm`);
  const endDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).format(`DD/MM/YY HH:mm`);

  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${new _event_types__WEBPACK_IMPORTED_MODULE_4__["default"]().getTemplate()}
          </div>

          <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
              ${_const__WEBPACK_IMPORTED_MODULE_2__["CITIES"].map((value) => `<option value="${value}"></option>`)}
          </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
          </div>

          <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="number" min="0" name="event-price" value="${price}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${isNewPoint ? `Cancel` : `Delete`}</button>
          <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
  ${createOffersTemplate(offers, type)}

  ${createDescriptionTemplate(description, images)}
        </section>
      </form>
    </li>`;
}

class EditPoint extends _smart__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point, isNewPoint = false) {
    super();

    this._data = point;
    this._isNewPoint = isNewPoint;
    this._submitFormHandler = this._submitFormHandler.bind(this);
    this._closeFormHandler = this._closeFormHandler.bind(this);
    this._formDeleteClickHandler = this._formDeleteClickHandler.bind(this);
    this._eventTypeHandler = this._eventTypeHandler.bind(this);
    this._eventDestinationHandler = this._eventDestinationHandler.bind(this);
    this._eventPriceHandler = this._eventPriceHandler.bind(this);
    this._offerHandler = this._offerHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createEditPoint(this._data, this._isNewPoint);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseFormClick(this._callback.closeFormClick);
    this.setSubmitFormClick(this._callback.submitFormClick);
    this.setDeleteClick(this._callback.deleteClick);
  }

  reset(point) {
    this.updateData(point);
  }

  _setInnerHandlers() {
    const element = this.getElement();

    element
      .querySelector(`.event__type-list`)
      .addEventListener(`click`, this._eventTypeHandler);

    element
      .querySelector(`.event__input--destination`)
      .addEventListener(`change`, this._eventDestinationHandler);

    element
      .querySelector(`.event__input--price`)
      .addEventListener(`input`, this._eventPriceHandler);

    const availableOffers = element.getElementsByClassName(`event__offer-checkbox`);

    for (const offer of availableOffers) {
      offer.addEventListener(`click`, this._offerHandler);
    }
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    this._callback.submitFormClick(this._data);
  }

  _closeFormHandler(evt) {
    evt.preventDefault();
    this._callback.closeFormClick();
  }

  _eventTypeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.textContent,
      offers: {},
    });
  }

  _eventDestinationHandler(evt) {
    evt.preventDefault();
    const city = evt.target.value;
    if (_const__WEBPACK_IMPORTED_MODULE_2__["CITIES"].includes(city)) {
      this.updateData({
        city,
        description: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__["getRandomDescription"])(),
        images: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__["getRandomImages"])(),
      });
    } else {
      evt.target.value = ``;
      evt.target.placeholder = `Choose city`;

      evt.target.focus();
      evt.target.setCustomValidity(`City not found`);
    }
  }

  _eventPriceHandler(evt) {
    evt.preventDefault();
    const priceInput = evt.target.value;
    const price = priceInput.length > 0 ? parseInt(evt.target.value, 10) : 0;
    this.updateData({price}, false);
  }

  _offerHandler(evt) {
    const [title, price] = getOfferFromId(evt.target.id);

    if (evt.target.checked) {
      this._data.offers[title] = price;
    } else {
      delete this._data.offers[title];
    }
  }

  setSubmitFormClick(callback) {
    this._callback.submitFormClick = callback;
    this.getElement()
      .querySelector(`form`)
      .addEventListener(`submit`, this._submitFormHandler);
  }

  setCloseFormClick(callback) {
    this._callback.closeFormClick = callback;
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._closeFormHandler);
  }

  _formDeleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick(this._data);
  }

  setDeleteClick(callback) {
    this._callback.deleteClick = callback;
    this.getElement()
      .querySelector(`.event__reset-btn`)
      .addEventListener(`click`, this._formDeleteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/event-types.js":
/*!*********************************!*\
  !*** ./src/view/event-types.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTypes; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




function createEventTypes() {
  return `<div class="event__type-list">
    <fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>
    ${_const__WEBPACK_IMPORTED_MODULE_1__["TRIP_POINT_TYPES"]
      .map((type) => {
        const typeLowerCase = type.toLowerCase();

        return `<div class="event__type-item">
          <input id="event-type-${typeLowerCase}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeLowerCase}">
          <label class="event__type-label  event__type-label--${typeLowerCase}" for="event-type-${typeLowerCase}-1">${type}</label>
          </div>`;
      }).join(``)}
    </fieldset>
  </div>`;
}

class EventTypes extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createEventTypes();
  }
}


/***/ }),

/***/ "./src/view/events-sort-form.js":
/*!**************************************!*\
  !*** ./src/view/events-sort-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsSortForm; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createTripEventsSortForm() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>`;
}

class EventsSortForm extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripEventsSortForm();
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createFilterItemTemplate(filter, currentFilterType) {
  return `<div class="trip-filters__filter">
    <input
      id="filter-${filter}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${filter}"
      ${filter === currentFilterType ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
  </div>`;
}

function createTripFilters(filterItems, currentFilterType) {
  const filterItemsTemplate = filterItems.map((filter) => createFilterItemTemplate(filter, currentFilterType)).join(``);

  return `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}

class Filter extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters, currentFilterType) {
    super();

    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createTripFilters(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/view/info-date.js":
/*!*******************************!*\
  !*** ./src/view/info-date.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoDate; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createTripInfoDate(dateRange) {
  return `<p class="trip-info__dates">${dateRange}</p>`;
}

class InfoDate extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dateRange) {
    super();

    this._dateRange = dateRange;
  }

  getTemplate() {
    return createTripInfoDate(this._dateRange);
  }
}


/***/ }),

/***/ "./src/view/info-title.js":
/*!********************************!*\
  !*** ./src/view/info-title.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoTitle; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createTripInfoTitle(title) {
  return `<h1 class="trip-info__title">${title}</h1>`;
}

class InfoTitle extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(title) {
    super();

    this._title = title;
  }

  getTemplate() {
    return createTripInfoTitle(this._title);
  }
}


/***/ }),

/***/ "./src/view/no-point.js":
/*!******************************!*\
  !*** ./src/view/no-point.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoPoint; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNoPointTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoPoint extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoPointTemplate();
  }
}


/***/ }),

/***/ "./src/view/point-list.js":
/*!********************************!*\
  !*** ./src/view/point-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointList; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createTripEventsList() {
  return `<ul class="trip-events__list">
    </ul>`;
}


class PointList extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripEventsList();
  }
}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");






function createOffersTemplate(offers) {
  let template = ``;

  for (const offer of Object.getOwnPropertyNames(offers)) {
    template += `<li class="event__offer">
    <span class="event__offer-title">${offer}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offers[offer]}</span>
    </li>`;
  }

  return template;
}

function createTripPoint(point) {
  const {type, city, price, isFavorite, dates, offers} = point;

  let duration = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `hour`);

  if (duration < 1) {
    const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `minute`);

    duration = `${minutes}M`;
  } else if (duration < 24) {
    const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `minute`) % _const__WEBPACK_IMPORTED_MODULE_2__["MINUTES_IN_HOUR"];
    const hours = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `hour`);

    duration = `${hours}H ${minutes}M`;
  } else {
    const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `minute`) % _const__WEBPACK_IMPORTED_MODULE_2__["MINUTES_IN_HOUR"];
    const hours = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `hour`) % _const__WEBPACK_IMPORTED_MODULE_2__["HOURS_IN_DAY"];
    const days = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]), `day`);

    duration = `${days}D ${hours}H ${minutes}M`;
  }

  return `<li class="trip-events__item">
      <div class="event">
      <time class="event__date" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`YYYY-MM-DD`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`MMM D`)}</time>
      <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${city}</h3>
      <div class="event__schedule">
          <p class="event__time">
          <time class="event__start-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`YYYY-MM-DDTHH:mm`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`HH:mm`)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[0]).format(`YYYY-MM-DDTHH:mm`)}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates[1]).format(`HH:mm`)}</time>
          </p>
          <p class="event__duration">${duration}</p>
      </div>
      <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
          ${createOffersTemplate(offers)}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? `event__favorite-btn--active` : ``}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
      </button>
      <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
      </button>
      </div>
  </li>`;
}

class Point extends _abstract__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    this._point = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createTripPoint(this._point);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement()
      .querySelector(`.event__favorite-btn `)
      .addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Smart extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  restoreHandlers() {
    throw new Error(`Abstract method not implemented: restoreHandlers.`);
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  updateData(update, isUpdateElement = true) {
    if (update) {
      this._data = Object.assign({}, this._data, update);

      if (isUpdateElement) {
        this.updateElement();
      }
    }
  }
}


/***/ }),

/***/ "./src/view/switches.js":
/*!******************************!*\
  !*** ./src/view/switches.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switches; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


function createTripSwitches() {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`;
}

class Switches extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripSwitches();
  }
}


/***/ }),

/***/ "./src/view/trip-info.js":
/*!*******************************!*\
  !*** ./src/view/trip-info.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfo; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _info_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-title */ "./src/view/info-title.js");
/* harmony import */ var _info_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-date */ "./src/view/info-date.js");
/* harmony import */ var _cost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cost */ "./src/view/cost.js");








function createTripInfo(tripPoints) {
  const firstDay = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(tripPoints[0].dates[0]);
  const lastDay = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(tripPoints[tripPoints.length - 1].dates[0]);

  const tripRange = lastDay.format(`M`) - firstDay.format(`M`) !== 0
    ? `${firstDay.format(`MMM DD`)}&nbsp;&mdash;&nbsp;${lastDay.format(`MMM DD`)}`
    : `${firstDay.format(`MMM DD`)}&nbsp;&mdash;&nbsp;${lastDay.format(`DD`)}`;

  const firstCity = tripPoints[0].city;
  const lastCity = tripPoints[tripPoints.length - 1].city;
  let tripTitle;
  if (tripPoints.length > 3) {
    tripTitle = `${firstCity}&nbsp;&mdash;&nbsp;&#8230;&nbsp;&mdash;&nbsp;${lastCity}`;
  } else {
    tripTitle = tripPoints.map((elem) => elem.city).join(`&nbsp;&mdash;&nbsp;`);
  }

  let cost = 0;
  for (const point of tripPoints) {
    cost += point[`price`];
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
          ${new _info_title__WEBPACK_IMPORTED_MODULE_2__["default"](tripTitle).getTemplate()}
          ${new _info_date__WEBPACK_IMPORTED_MODULE_3__["default"](tripRange).getTemplate()}
      </div>
      ${new _cost__WEBPACK_IMPORTED_MODULE_4__["default"](cost).getTemplate()}
  </section>`;
}

class TripInfo extends _abstract__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripInfo(this._points);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map