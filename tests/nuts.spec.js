var NUTS = require('../nuts'),
    assert = require('assert');

describe('templatize()', function() {
    'use strict';

    it('should work with properties', function() {

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

    it('should work with functions', function() {

        var model = {
                "firstName": "Fred",
                "lastName": "Flintstone",
                "name": function() {
                    return this.firstName + ' ' + this.lastName;
                }
            },
            template = '[:name]',
            s = NUTS(template, model);;
        
        assert.equal(s, 'Fred Flintstone');
    });
});
