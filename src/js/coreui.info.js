
import coreuiInfoInstance  from "./coreui.info.instance";

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

        if ( ! this._instances.hasOwnProperty(id)) {
            return null;
        }

        if ( ! $('#coreui-info-' + id)[0]) {
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
     * @param message
     * @param title
     * @param options
     */
    secondary: function (message, title, options) {

        options = typeof options === 'object' ? options : {};
        options.type    = "secondary";
        options.title   = title;
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
        options.type    = "primary";
        options.title   = title;
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
        options.type    = "light";
        options.title   = title;
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
        options.type    = "dark";
        options.title   = title;
        options.message = message;

        return this.create(options).render();
    }
}

export default coreUIInfo;