(function() {
    'use strict';

    /**
     * super-simple templating
     */

    function NUTS(template, context) {
        return template.replace(/\[:(\w+)\]/g, function(match, key) {
            if (context[key] instanceof Function) {
                return context[key]();
            } else {
                return context[key];
            }
        });
    }

    (function() {
        if (typeof define === 'function' && typeof define.amd === 'object') {
            define(function() {
                return NUTS;
            });
        } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = NUTS;
        } else if (typeof window !== 'undefined') {
            window.NUTS = NUTS;
        }
    })();
})();

