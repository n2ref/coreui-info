
import InfoInstance  from "./info.instance";

let Info = {

    _instances: {},

    /**
     * @param {Object} options
     * @return {InfoInstance}
     */
    create: function (options) {

        let instance = new InfoInstance(options instanceof Object ? options : {});

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
     * @param message
     * @param title
     * @param options
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
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
     * @return {InfoInstance}
     */
    dark: function (message, title, options) {

        options = typeof options === 'object' ? options : {};
        options.type    = "dark";
        options.title   = title;
        options.message = message;

        return this.create(options).render();
    }
}

export default Info;