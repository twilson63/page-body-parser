# Pagejs BodyParser Plugin (module)

This plugin adds the body-parser api to the page.js router and enables you to handle form submit events as you would normally handle the events on the server:

## Example Usage

``` html
<form action="/foo/bar" method="POST">
  <input type="text" name="beep" />
  <input type="submit" value="Submit" />
</form>
<script src="bundle.js"></script>
```

``` js
var page = require('page');
// require page-body-parser
var pageBodyParser = require('page-body-parser');

page('/foo/bar', function(ctx) {
  console.log(ctx.body);
});

page();
// initialize after page init
pageBodyParser();
```

## Installatiion

``` js
npm install page-body-parser
```

## Thanks to 

#### Eric Newport [kethinov](http://github.com/kethinov)

This is a fork of [https://github.com/kethinov/page.js-body-parser.js](https://github.com/kethinov/page.js-body-parser.js) for focused usage with browserify. 


#### Tj [visionmedia](https://github.com/visionmedia)

For page.js the micro side client router inspired by expressjs


