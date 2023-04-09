
var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.info = {

    _instances: {},

    /**
     * @param options
     */
    create: function (options) {

        let instance = $.extend({}, this.instance);
        instance._init(options instanceof Object ? options : {});

        let infoId = instance.getId();
        this._instances[infoId] = instance;

        return instance;
    },


    /**
     * @param {string} id
     * @returns {CoreUI.info.instance|null}
     */
    get: function (id) {

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ($('#coreui-info-' + this._instances[id])[0]) {
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
        options.type    = "info";
        options.title   = title;
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
        options.type    = "warning";
        options.title   = title;
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
        options.type    = "danger";
        options.title   = title;
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
        options.type    = "success";
        options.title   = title;
        options.message = message;

        return this.create(options).render();
    },


    /**
     * @returns {string}
     * @private
     */
    _hashCode: function() {
        return this._crc32((new Date().getTime() + Math.random()).toString()).toString(16);
    },


    /**
     * @param str
     * @returns {number}
     * @private
     */
    _crc32: function (str) {

        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++) {
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1
            }
            o[c] = a
        }

        for (var n = -1, t = 0; t < str.length; t++) {
            n = n >>> 8 ^ o[255 & (n ^ str.charCodeAt(t))]
        }

        return (-1 ^ n) >>> 0;
    }
}