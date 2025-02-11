
let InfoUtils = {


    /**
     * @returns {string}
     * @private
     */
    hashCode: function() {
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

export default InfoUtils;