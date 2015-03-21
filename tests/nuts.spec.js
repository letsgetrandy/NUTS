var NUTS = require('../nuts'),
    assert = require('assert');

describe('templatize()', function() {
    'use strict';

    it('should work...', function() {

        // example usage
        var object = {
                "foo": "hello",
                "bar": "world",
                "punctuation": function() {
                    return "!";
                }
            },
            template = '[:foo] [:bar][:punctuation]',
                s = NUTS(template, object);

        assert.equal(s, 'hello world!');

    });
});
