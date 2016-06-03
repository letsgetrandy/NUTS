[![Build Status](https://travis-ci.org/letsgetrandy/NUTS.svg?branch=master)](https://travis-ci.org/letsgetrandy/NUTS)
[![Codacy Badge](https://www.codacy.com/project/badge/6827c16f55a54823adc554279e64dd6b)](https://www.codacy.com/app/letsgetrandy/NUTS)
[![Code Climate](https://codeclimate.com/repos/555a0d6ce30ba01b36001438/badges/edb151a0658720128ce0/gpa.svg)](https://codeclimate.com/repos/555a0d6ce30ba01b36001438/feed)
[![bitHound Score](https://www.bithound.io/github/letsgetrandy/NUTS/badges/score.svg)](https://www.bithound.io/github/letsgetrandy/NUTS)

# NUTS
Nearly Useless Template System

NUTS is a _nearly useless_ templating system for Javascript.

## Why use it?
Having functionality in your template system creates more possible points of failure, making it harder to test and harder to find bugs when they exist. It's better if your functionality is inserted and removed from some other, testable member, while your templates hang around behind the scene just spitting out the end result.

## How to use it
NUTS is simple to use.

First, create a template:

```js
var template = '<div>[:text]</div>';
```

Then, render it, by passing an object of values:

```js
var obj = {
    text: "Hello world!"
};
var html = nuts(template, obj);
```

Your context object can also contain functions...

```js
var userTemplate = '<div>Full name is: [:name]</div>',
    userModel = {
        "firstName": "Fred",
        "lastName": "Flintstone",
        "name": function() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    html = nuts(userTemplate, userModel);;
```

That's it!
