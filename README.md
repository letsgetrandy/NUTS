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
