(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.CoreUI = global.CoreUI || {}, global.CoreUI.info = factory()));
})(this, (function () { 'use strict';

  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  var InfoUtils = {
    /**
     * @returns {string}
     * @private
     */
    hashCode: function hashCode() {
      return this.crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },
    /**
     * @param str
     * @returns {number}
     * @private
     */
    crc32: function crc32(str) {
      for (var a, o = [], c = 0; c < 256; c++) {
        a = c;
        for (var f = 0; f < 8; f++) {
          a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
        }
        o[c] = a;
      }
      for (var n = -1, t = 0; t < str.length; t++) {
        n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))];
      }
      return (-1 ^ n) >>> 0;
    }
  };

  var InfoInstance = /*#__PURE__*/function () {
    /**
     *
     * @param options
     */
    function InfoInstance(options) {
      _classCallCheck(this, InfoInstance);
      _defineProperty(this, "_options", {
        id: '',
        type: '',
        title: '',
        message: '',
        onClose: null,
        onClosed: null,
        isClose: false
      });
      this._options = $.extend(true, {}, this._options, options);
      if (!this._options.id) {
        this._options.id = InfoUtils.hashCode();
      }
      this._options.type = options.hasOwnProperty('type') && typeof options.type === 'string' ? options.type : 'light';
      this._options.onClosed = options.hasOwnProperty('onClosed') && typeof options.onClosed === 'function' ? options.onClosed : null;
      this._options.onClose = options.hasOwnProperty('onClose') && typeof options.onClose === 'function' ? options.onClose : null;
      this._options.isClose = options.hasOwnProperty('isClose') && _typeof(options.isClose);
    }

    /**
     *
     */
    return _createClass(InfoInstance, [{
      key: "initEvents",
      value: function initEvents() {
        var element = document.getElementById('info-' + this._options.id);
        if (!element) {
          return;
        }
        var that = this;
        element.addEventListener('close.bs.alert', function (event) {
          if (typeof that._options.onClose === 'function') {
            that._options.onClose(event);
          }
        });
        element.addEventListener('closed.bs.alert', function (event) {
          if (typeof that._options.onClosed === 'function') {
            that._options.onClosed(event);
          }
        });
      }

      /**
       * @param element
       * @returns {string}
       */
    }, {
      key: "render",
      value: function render(element) {
        var tplTitle = this._options.title ? '<h4>' + this._options.title + '</h4>' : '';
        var tplMessage = this._options.message ? '<div>' + this._options.message + '</div>' : '';
        var tplClose = this._options.isClose ? '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' : '';
        var tpl = '<div class="alert alert-' + this._options.type + ' alert-dismissible fade show" id="info-' + this._options.id + '">' + tplTitle + tplMessage + tplClose + '</div>';
        if (!element) {
          return tpl;
        }

        // Dom element
        var domElement = {};
        if (typeof element === 'string') {
          domElement = document.getElementById(element);
          if (!domElement) {
            return '';
          }
        } else if (element instanceof HTMLElement) {
          domElement = element;
        }
        $(domElement).append(tpl);
        this.initEvents();
      }

      /**
       *
       */
    }, {
      key: "close",
      value: function close() {
        if (!$('#info-' + this._options.id)[0]) {
          return;
        }
        if (window.hasOwnProperty('bootstrap')) {
          var alert = bootstrap.Alert.getOrCreateInstance('#info-' + this._options.id);
          alert.close();
        }
      }

      /**
       *
       */
    }, {
      key: "getId",
      value: function getId() {
        return this._options.id;
      }
    }]);
  }();

  var Info = {
    _instances: {},
    /**
     * @param {Object} options
     * @return {InfoInstance}
     */
    create: function create(options) {
      var instance = new InfoInstance(options instanceof Object ? options : {});
      var infoId = instance.getId();
      this._instances[infoId] = instance;
      return instance;
    },
    /**
     * @param {string} id
     * @returns {object|null}
     */
    get: function get(id) {
      if (!this._instances.hasOwnProperty(id)) {
        return null;
      }
      if (!$('#coreui-info-' + id)[0]) {
        delete this._instances[id];
        return null;
      }
      return this._instances[id];
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    info: function info(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "info";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    warning: function warning(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "warning";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    danger: function danger(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "danger";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    success: function success(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "success";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    secondary: function secondary(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "secondary";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    primary: function primary(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "primary";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    light: function light(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "light";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    },
    /**
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
     */
    dark: function dark(message, title, options) {
      options = _typeof(options) === 'object' ? options : {};
      options.type = "dark";
      options.title = title;
      options.message = message;
      return this.create(options).render();
    }
  };

  return Info;

}));
