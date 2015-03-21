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


    if (typeof module !== 'undefined') {
        module.exports = NUTS;
    }

    if (typeof window !== 'undefined') {
        window.nuts = NUTS;
    }
})();


