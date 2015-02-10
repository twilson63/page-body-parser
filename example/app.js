var page = require('page');
var pageBodyParser = require('../');

// handle form submit
page('/foo/bar', function(ctx) {
  alert(ctx.body.foo);
});

page();
pageBodyParser();

var h = require('hyperscript');

document.body.appendChild(
  h('div', [
    h('h1', 'PageJS BodyParser Example'),
    h('form', { action: '/foo/bar', method: 'post'}, [
      h('p', [
        h('input', { type: 'text', name: 'foo'})
      ]),
      h('input', { type: 'submit', value: 'Submit'})
    ])
  ])
);
