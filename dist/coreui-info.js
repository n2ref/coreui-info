(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.CoreUI = global.CoreUI || {}, global.CoreUI.info = factory()));
})(this, (function () { 'use strict';

    let coreuiInfoUtils = {
      /**
       * @returns {string}
       * @private
       */
      hashCode: function () {
        return this.crc32((new Date().getTime() + Math.random()).toString()).toString(16);
      },
      /**
       * @param str
       * @returns {number}
       * @private
       */
      crc32: function (str) {
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

    let coreuiInfoInstance = {
      _options: {
        id: '',
        type: '',
        title: '',
        message: '',
        onClose: null,
        onClosed: null,
        isClose: false
      },
      /**
       *
       * @param options
       */
      _init: function (options) {
        this._options = $.extend(true, {}, this._options, options);
        if (!this._options.id) {
          this._options.id = coreuiInfoUtils.hashCode();
        }
        this._options.type = options.hasOwnProperty('type') && typeof options.type === 'string' ? options.type : 'light';
        this._options.onClosed = options.hasOwnProperty('onClosed') && typeof options.onClosed === 'function' ? options.onClosed : null;
        this._options.onClose = options.hasOwnProperty('onClose') && typeof options.onClose === 'function' ? options.onClose : null;
        this._options.isClose = options.hasOwnProperty('isClose') && typeof options.isClose;
      },
      /**
       *
       */
      initEvents: function () {
        const element = document.getElementById('info-' + this._options.id);
        if (!element) {
          return;
        }
        let that = this;
        element.addEventListener('close.bs.alert', event => {
          if (typeof that._options.onClose === 'function') {
            that._options.onClose(event);
          }
        });
        element.addEventListener('closed.bs.alert', event => {
          if (typeof that._options.onClosed === 'function') {
            that._options.onClosed(event);
          }
        });
      },
      /**
       * @param element
       * @returns {string}
       */
      render: function (element) {
        let tplTitle = this._options.title ? '<h4>' + this._options.title + '</h4>' : '';
        let tplMessage = this._options.message ? '<div>' + this._options.message + '</div>' : '';
        let tplClose = this._options.isClose ? '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' : '';
        let tpl = '<div class="alert alert-' + this._options.type + ' alert-dismissible fade show" id="info-' + this._options.id + '">' + tplTitle + tplMessage + tplClose + '</div>';
        if (!element) {
          return tpl;
        }

        // Dom element
        let domElement = {};
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
      },
      /**
       *
       */
      close: function () {
        if (!$('#info-' + this._options.id)[0]) {
          return;
        }
        const alert = bootstrap.Alert.getOrCreateInstance('#info-' + this._options.id);
        alert.close();
      },
      /**
       *
       */
      getId: function () {
        return this._options.id;
      }
    };

    let coreUIInfo = {
      _instances: {},
      /**
       * @param options
       */
      create: function (options) {
        let instance = $.extend(true, {}, coreuiInfoInstance);
        instance._init(options instanceof Object ? options : {});
        let infoId = instance.getId();
        this._instances[infoId] = instance;
        return instance;
      },
      /**
       * @param {string} id
       * @returns {object|null}
       */
      get: function (id) {
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
       *
       * @param message
       * @param title
       * @param options
       */
      info: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "info";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      warning: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "warning";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      danger: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "danger";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      success: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "success";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      secondary: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "secondary";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      primary: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "primary";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      light: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "light";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      },
      /**
       * @param message
       * @param title
       * @param options
       */
      dark: function (message, title, options) {
        options = typeof options === 'object' ? options : {};
        options.type = "dark";
        options.title = title;
        options.message = message;
        return this.create(options).render();
      }
    };

    return coreUIInfo;

}));
