[![Build Status](https://travis-ci.org/letsgetrandy/NUTS.svg?branch=master)](https://travis-ci.org/letsgetrandy/NUTS)
[![Codacy Badge](https://www.codacy.com/project/badge/6827c16f55a54823adc554279e64dd6b)](https://www.codacy.com/app/letsgetrandy/NUTS)
[![Code Climate](https://codeclimate.com/repos/555a0d6ce30ba01b36001438/badges/edb151a0658720128ce0/gpa.svg)](https://codeclimate.com/repos/555a0d6ce30ba01b36001438/feed)


# NUTS
Nearly Useless Template System

NUTS is a _nearly useless_ templating system for Javascript.

## How to use it
NUTS is simple to use.

First, create a template:

```
var template = '<div>[:text]</div>';
```

Then, render it, by passing an object of values:

```
var obj = {
    text: "Hello world!"
};
var html = nuts(template, obj);
```


That's it!
