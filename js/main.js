/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var accordiontriggers = $('.jsAccordionTrigger');
accordiontriggers.on('click', function () {
  var accordion = $(this).closest('.jsAccordion');
  accordion.toggleClass('is-open');
  $('.jsAccordion').not($(this).closest('.jsAccordion')).removeClass('is-open');
  $('.jsAccordion').each(function () {
    if ($(this).hasClass('is-open')) {
      $(this).find('.jsAccordionBody').slideDown();
    } else {
      $(this).find('.jsAccordionBody').slideUp();
    }
  });
});

function accordionOpen() {
  $('.jsAccordionTrigger').first().click();
}

accordionOpen();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header-personal/header-personal.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/header-personal/header-personal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var userMenuTrigger = $('.jsUserMenuTrigger');
var userMenu = $('.jsUserMenu');
var notificationsTrigger = $('.jsNotificationsTrigger');
var notificationsMenu = $('.jsNotificationsMenu');
var notificationsContent = $('.jsNotificationsContent');
userMenuTrigger.on('click', function () {
  userMenu.toggleClass('is-active');
});
notificationsTrigger.on('click', function () {
  notificationsMenu.toggleClass('is-active');

  if ($(window).width() < 768) {
    $('.body').toggleClass('_lock');
  }
});
$(document).click(function (e) {
  if (userMenu.hasClass('is-active')) {
    if (!userMenu.is(e.target) && userMenu.has(e.target).length === 0 && !userMenuTrigger.is(e.target) && userMenuTrigger.has(e.target).length === 0) {
      userMenu.removeClass('is-active');
    }
  }

  if (notificationsMenu.hasClass('is-active')) {
    if (!notificationsContent.is(e.target) && notificationsContent.has(e.target).length === 0 && !notificationsTrigger.is(e.target) && notificationsTrigger.has(e.target).length === 0) {
      notificationsMenu.removeClass('is-active');

      if ($(window).width() < 768) {
        $('.body').removeClass('_lock');
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/input-file/input-file.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/input-file/input-file.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(".jsFileInput").on("change", function () {
  $(this).closest('.input-file').find('.jsFileName').html(this.files[0].name);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/input/input.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/input/input.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

var input = document.querySelectorAll(".jsPhoneMask");

var phoneElement = document.querySelectorAll('.jsPhoneMask');
var phoneElementAuto = document.querySelectorAll('.jsPhoneMaskAuto');
var RU = {
  mask: '+{7} (000) 000-00-00',
  startsWith: '7',
  lazy: true,
  country: 'RU'
};
var BY = {
  mask: '+{375} (00) 000-00-00',
  startsWith: '3',
  lazy: true,
  country: 'BY'
};
var KG = {
  mask: '+{9}96 (000) 000-000',
  startsWith: '996',
  lazy: true,
  country: 'KG'
};
var UZ = {
  mask: '+{9}98 (00) 000-0000',
  startsWith: '998',
  lazy: true,
  country: 'UZ'
};
var MN = {
  mask: '+{9}76 (00) 00-0000',
  startsWith: '976',
  lazy: true,
  country: 'MN'
};
var countries = {
  RU: RU,
  BY: BY,
  KG: KG,
  UZ: UZ,
  MN: MN
};

if (phoneElementAuto.length > 0) {
  for (var i = 0; i < phoneElementAuto.length; i++) {
    var phoneMaskSettingsa = {
      mask: [{
        mask: '+{7} (000) 000-00-00',
        startsWith: '7',
        lazy: true,
        country: 'RU'
      }, {
        mask: '{8} (000) 000-00-00',
        startsWith: '8',
        lazy: true,
        country: 'RU'
      }, {
        mask: '+{375} (00) 000-00-00',
        startsWith: '3',
        lazy: true,
        country: 'BY'
      }, {
        mask: '+996 (000) 000-000',
        startsWith: '996',
        lazy: true,
        country: 'KG'
      }, {
        mask: '+998 (00) 000-0000',
        startsWith: '998',
        lazy: true,
        country: 'UZ'
      }, {
        mask: '+976 (00) 00-0000',
        startsWith: '976',
        lazy: true,
        country: 'MN'
      }, {
        mask: '0000000000000',
        startsWith: '',
        lazy: true,
        country: 'unknown'
      }],
      dispatch: function dispatch(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function (m) {
          return number.indexOf(m.startsWith) === 0;
        }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
      }
    };
    var mask = Object(imask__WEBPACK_IMPORTED_MODULE_1__["default"])(phoneElementAuto[i], phoneMaskSettingsa);
  }
}

if (phoneElement.length > 0) {
  var _loop = function _loop(_i) {
    var phoneMaskSettings = {
      mask: countries,
      dispatch: function dispatch(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function (m) {
          return number.indexOf(m.startsWith) === 0;
        }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
      }
    };

    if (!phoneElement[_i].hasAttribute('data-country')) {
      phoneElement[_i].setAttribute('data-country', 'ru');
    }

    var attr = phoneElement[_i].getAttribute('data-country');

    var iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default()(phoneElement[_i], {
      initialCountry: "" + attr + "",
      onlyCountries: ["ru", "by", "kg", "uz", "mn"]
    });

    phoneElement[_i].addEventListener("countrychange", function () {
      var countryData = iti.getSelectedCountryData();
      var countryIso = countryData.iso2;

      phoneElement[_i].setAttribute('data-country', '' + countryIso + '');

      changeMask();
    });

    var country = void 0;
    var maskSettings = void 0;
    checkCountry();
    var mask = Object(imask__WEBPACK_IMPORTED_MODULE_1__["default"])(phoneElement[_i], maskSettings);

    function changeMask() {
      checkCountry();
      mask.updateOptions(maskSettings);
      mask.value = '';
    }

    function checkCountry() {
      var country = String(phoneElement[_i].getAttribute('data-country'));

      if (country == 'ru') {
        maskSettings = phoneMaskSettings.mask.RU;
      } else if (country == 'by') {
        maskSettings = phoneMaskSettings.mask.BY;
      } else if (country == 'kg') {
        maskSettings = phoneMaskSettings.mask.KG;
      } else if (country == 'uz') {
        maskSettings = phoneMaskSettings.mask.UZ;
      } else if (country == 'mn') {
        maskSettings = phoneMaskSettings.mask.MN;
      } else {
        maskSettings = phoneMaskSettings.mask.RU;
      }
    }
  };

  for (var _i = 0; _i < phoneElement.length; _i++) {
    _loop(_i);
  }
}

var regexpPhone = new RegExp('[0-9]{1,3}\\s[\(][0-9]{2,3}[\)]\\s([0-9]{3}(([\-][0-9]{2}[\-][0-9]{2})|([\-][0-9]{3})))|([0-9]{2}[\-][0-9]{4})');
var jsInputs = $('.jsInput');
var jsInputsFile = $('.jsFileInput');
jsInputs.each(function () {
  if ($(this).hasClass('jsInputReq')) {
    $(this).on('keyup input', function () {
      checkInputs($(this));
    });
  }

  $(this).focus(function () {
    $(this).closest('.input').removeClass('is-filled');
    $(this).closest('.input').addClass('is-focus');
  });
  $(this).blur(function () {
    if ($(this).val().length > 0) {
      $(this).closest('.input').removeClass('is-focus');
      $(this).closest('.input').addClass('is-filled');
    } else {
      $(this).closest('.input').removeClass('is-focus');
      $(this).closest('.input').removeClass('is-error');
    }
  });
});
jsInputsFile.each(function () {
  if ($(this).hasClass('jsInputReq')) {
    $(this).on('keyup input', function () {
      inputFileCheck($(this));
    });
  }
});
$('.jsInputType').on('click', function () {
  var input = $(this).closest('.input').find('.jsInput');

  if (input.attr('type') == 'password') {
    input.attr('type', 'text');
    $(this).removeClass('is-show');
    $(this).addClass('is-hide');
  } else if (input.attr('type') == 'text') {
    input.attr('type', 'password');
    $(this).removeClass('is-hide');
    $(this).addClass('is-show');
  }
});
$('.jsForm').each(function () {
  var thisForm = $(this);
  thisForm.submit(function (e) {
    var inputs = thisForm.find('.jsInput.jsInputReq');
    var checkboxes = thisForm.find('.jsCheckbox.jsInputReq');
    var inputFiles = thisForm.find('.jsFileInput.jsInputReq');

    if (inputs) {
      inputs.each(function () {
        checkInputs($(this));
      });
    }

    if (checkboxes) {
      checkboxes.each(function () {
        checkboxCheck($(this));
      });
    }

    if (inputFiles) {
      inputFiles.each(function () {
        inputFileCheck($(this));
      });
    }

    if (thisForm.find('.is-error').length) {
      e.preventDefault();
    }
  });
});

function checkInputs(input) {
  if (input.hasClass('jsPhoneMask')) {
    if (input.val() != 0 & regexpPhone.test(input.val()) == true) {
      input.closest('.input').removeClass('is-error');
    } else {
      input.closest('.input').addClass('is-error');
    }
  } else if (input.val() == 0) {
    input.closest('.input').addClass('is-error');
  } else {
    input.closest('.input').removeClass('is-error');
  }

  if (input.hasClass('jsInputPassword')) {
    if (input.closest('.jsForm').find('.jsInputPassword').length > 1) {
      var secondInput = input.closest('.jsForm').find('.jsInputPassword').not(input);

      if (secondInput.val() != 0) {
        if (input.val() != secondInput.val()) {
          input.closest('.input').addClass('is-error');
          secondInput.closest('.input').addClass('is-error');
        } else {
          input.closest('.input').removeClass('is-error');
          secondInput.closest('.input').removeClass('is-error');
        }
      }
    }
  }
}

function checkboxCheck(checkbox) {
  if (!checkbox.is(':checked')) {
    checkbox.closest('.checkbox').addClass('is-error');
  } else {
    checkbox.closest('.checkbox').removeClass('is-error');
  }
}

function inputFileCheck(inputFile) {
  if (inputFile.val() == '') {
    inputFile.closest('.input-file').addClass('is-error');
  } else {
    inputFile.closest('.input-file').removeClass('is-error');
  }
}

function checkInputsOnVal() {
  $('.jsInput').each(function () {
    if ($(this).val().length > 0) {
      $(this).closest('.input').addClass('is-filled');
    }
  });
}

checkInputsOnVal();
var changeInfTrigger = $('.jsChangeInfTrigger');
var changeInfSubmit = $('.jsChangeInfSubmit');
var changeInfCancel = $('.jsChangeInfCancel');
changeInfTrigger.on('click', function () {
  var thisBlock = $(this).closest('.jsChangeInfBlock');
  thisBlock.find('.jsChangeInput').removeAttr('disabled');
  thisBlock.addClass('is-change');
  thisBlock.find('.jsChangeButtons').slideDown({
    start: function start() {
      $(this).css({
        display: "flex"
      });
    }
  });
});
changeInfSubmit.on('click', function (e) {
  var thisBlock = $(this).closest('.jsChangeInfBlock');
  var inputs = thisBlock.find('.jsInput.jsInputReq');
  inputs.each(function () {
    checkInputs($(this));
  });

  if (thisBlock.find('.is-error').length) {
    e.preventDefault();
  } else {
    thisBlock.find('.jsChangeInput').attr('disabled', 'disabled');
    thisBlock.removeClass('is-change');
    thisBlock.find('.jsChangeButtons').slideUp(350);
  }
});
var ModalDataItems = $('.jsModalDataItem');
ModalDataItems.each(function () {
  var next = $(this).find('.jsModalDataNext');
  var prev = $(this).find('.jsModalDataBack');
  var inputs = $(this).find('.jsInput.jsInputReq');
  next.on('click', function (e) {
    var thisBlock = $(this).closest('.jsModalDataItem');
    inputs.each(function () {
      checkInputs($(this));
    });

    if (thisBlock.find('.is-error').length) {
      e.preventDefault();
    } else {
      if (!$(this).hasClass('jsModalDataFinal')) {
        thisBlock.removeClass('is-active');
        thisBlock.next().addClass('is-active');
      }
    }
  });
  prev.on('click', function (e) {
    var thisBlock = $(this).closest('.jsModalDataItem');
    thisBlock.removeClass('is-active');
    thisBlock.prev().addClass('is-active');
  });
});
var jsModalMarkingItems = $('.jsModalMarkingItem');
jsModalMarkingItems.each(function () {
  var next = $(this).find('.jsModalMarkingNext');
  var prev = $(this).find('.jsModalMarkingPrev');
  var inputs = $(this).find('.jsInput.jsInputReq');
  var autoNext = $(this).find('.jsModalMarkingAutoNext');
  next.on('click', function (e) {
    var thisBlock = $(this).closest('.jsModalMarkingItem');
    inputs.each(function () {
      checkInputs($(this));
    });

    if (thisBlock.find('.is-error').length) {
      e.preventDefault();
    } else {
      if (!$(this).hasClass('jsModalMarkingFinal')) {
        thisBlock.removeClass('is-active');
        thisBlock.next().addClass('is-active');
      }
    }
  });
  prev.on('click', function (e) {
    var thisBlock = $(this).closest('.jsModalMarkingItem');
    thisBlock.removeClass('is-active');
    thisBlock.prev().addClass('is-active');
  });
  autoNext.on('click', function (e) {
    var thisBlock = $(this).closest('.jsModalMarkingItem');

    if (!$(this).hasClass('jsModalMarkingFinal')) {
      // thisBlock.removeClass('is-active');
      // thisBlock.next().addClass('is-active');
      setTimeout(function (e) {
        e.removeClass('is-active');
        e.next().addClass('is-active');
      }, 250, thisBlock);
    }
  });
});

__webpack_require__(/*! bootstrap-datepicker/js/bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js");

__webpack_require__(/*! bootstrap-datepicker/js/locales/bootstrap-datepicker.ru */ "./node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.ru.js");

$('.jsInputDate').datepicker({
  language: 'ru',
  autoclose: true
}).on('changeDate', function () {
  this.parentNode.classList.remove('is-error');
  this.parentNode.classList.add('is-changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_0__);

$('.jsSelect').each(function () {
  var thisSelect = $(this);
  thisSelect.select2({
    width: '100%',
    placeholder: '',
    dropdownParent: thisSelect.closest('.select')
  });
  var select = $(this).closest('.select');
  $(this).on("select2:open", function () {
    select.addClass('is-focus');
  });
  $(this).on("select2:close", function () {
    select.removeClass('is-focus');
  });
  $(this).on("select2:select", function () {
    select.addClass('is-filled');
  });
  $(this).on("select2:unselect", function () {});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_0__["Grid"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]]);
var jsWinnersSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".jsWinnersSlider", {
  grid: {
    rows: 2,
    columns: 2
  },
  spaceBetween: 8,
  navigation: {
    nextEl: ".jsWinnersSliderNavigation .swiper-button-next",
    prevEl: ".jsWinnersSliderNavigation .swiper-button-prev"
  },
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  }
});
var jsIntroMainSliderThumb = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".jsIntroMainSliderThumb", {
  spaceBetween: 16,
  slidesPerView: "auto",
  freeMode: false,
  watchSlidesProgress: true,
  breakpoints: {
    480: {
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3
    }
  }
});
var jsIntroMainSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".jsIntroMainSlider", {
  slidesPerView: 1,
  speed: 600,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoHeight: true,
  thumbs: {
    swiper: jsIntroMainSliderThumb
  }
});
var modalPromoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.jsModalPromoSlider', {
  speed: 500,
  parallax: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".jsModalPromoSlider .slider__button--next",
    prevEl: ".jsModalPromoSlider .slider__button--prev"
  }
});

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var jsTabs = $('.jsTabs');
jsTabs.each(function () {
  var triggers = $(this).find('.jsTabsTrigger');
  var items = $(this).find('.jsTabsItem');
  i = 1;
  e = 1;
  triggers.each(function (index, element) {
    $(element).attr('data-tab', i);
    i++;
  });
  items.each(function (index, element) {
    $(element).attr('data-tab', e);
    e++;
  });
});
$('.jsTabsTrigger').on('click', function (e) {
  e.preventDefault();
  var thisGroup = $(this).closest('.jsTabs');
  var tabsItems = thisGroup.find('.jsTabsItem');
  var tabsLinks = thisGroup.find('.jsTabsTrigger');
  var thisIndex = $(this).attr('data-tab'); // console.log(thisIndex)

  tabsLinks.removeClass('is-active');
  tabsItems.removeClass('is-active');
  $(this).addClass('is-active');
  thisGroup.find('.jsTabsItem[data-tab="' + thisIndex + '"').addClass('is-active');
  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/input/input */ "./src/blocks/modules/input/input.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/input-file/input-file */ "./src/blocks/modules/input-file/input-file.js");
/* harmony import */ var _modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_header_personal_header_personal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/header-personal/header-personal */ "./src/blocks/modules/header-personal/header-personal.js");
/* harmony import */ var _modules_header_personal_header_personal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_header_personal_header_personal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=main.js.map