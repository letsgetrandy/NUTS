(function() {
    'use strict';

    /**
     * super-simple templating
     */

    function templatize(template, context) {
        return template.replace(/\[:(\w+)\]/g, function(match, key) {
            if (context[key] instanceof Function) {
                return context[key]();
            } else {
                return context[key];
            }
        });
    }


    if (typeof module !== 'undefined') {
        module.exports = templatize;
    }

    if (typeof window !== 'undefined') {
        window.nuts = templatize;
    }
})();


