
var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.info.instance = {

    _options: {
        id: '',
        type: '',
        title: '',
        message: '',
        onClose: null,
        onClosed: null,
        isClose: false,
    },


    /**
     *
     * @param options
     */
    _init: function (options) {

        this._options = $.extend({}, this._options, options);

        if ( ! this._options.id) {
            this._options.id = CoreUI.info._hashCode();
        }

        this._options.type = options.hasOwnProperty('type') && typeof options.type === 'string'
            ? options.type
            : 'light';

        this._options.onClosed = options.hasOwnProperty('onClosed') && typeof options.onClosed === 'function'
            ? options.onClosed
            : null;

        this._options.onClose = options.hasOwnProperty('onClose') && typeof options.onClose === 'function'
            ? options.onClose
            : null;

        this._options.isClose = options.hasOwnProperty('isClose') && typeof options.isClose;
    },


    /**
     *
     */
    initEvents: function () {

        const element = document.getElementById('info-' + this._options.id)

        if ( ! element) {
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

        let tplTitle = this._options.title
            ? '<h4>' + this._options.title + '</h4>'
            : '';

        let tplMessage = this._options.message
            ? '<div>' + this._options.message + '</div>'
            : '';

        let tplClose = this._options.isClose
            ? '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>'
            : '';


        let tpl =
            '<div class="alert alert-' + this._options.type + ' alert-dismissible fade show" id="info-' + this._options.id + '">' +
                tplTitle +
                tplMessage +
                tplClose +
            '</div>';


        if ( ! element) {
            return tpl;
        }

        // Dom element
        let domElement = {};

        if (typeof element === 'string') {
            domElement = document.getElementById(element);

            if ( ! domElement) {
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

        if ( ! $('#info-' + this._options.id)[0]) {
            return;
        }

        const alert = bootstrap.Alert.getOrCreateInstance('#info-' + this._options.id)
        alert.close();
    },


    /**
     *
     */
    getId: function () {
        return this._options.id;
    }
}