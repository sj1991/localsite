define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

Handlebars.registerPartial("example-partial", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<script type='text/x-handlebars' id='post-item-template'>\n    <span class='post'>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</script>\n";
  return buffer;
  }));

this["templates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li>";
  stack1 = self.invokePartial(partials['example-partial'], 'example-partial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n        ";
  return buffer;
  }

  buffer += "<script type='text/x-handlebars' id='post-list-template'>\n    <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <ul>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.posts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</script>\n";
  return buffer;
  });

this["templates"]["nav/leftOffCanvas"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"off-canvas-list\">\n  <li><label>Evitics</label></li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  <li><a href=\"/\">Home</a></li>\n  <li><a href=\"/organizations\">Organizations</a></li>\n  <li><a href=\"/analyitics\">Analyitics</a></li>\n  <li><a href=\"/marketing\">Marketing</a></li>\n  <li><a href=\"/help\">Help</a></li>\n  <li><a href=\"https://login.gatech.edu/cas/login?service=https://critique.gatech.edu\">Login</a></li>\n</ul>\n";
  return buffer;
  });

this["templates"]["nav/topBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"title-area\">\n  <li class=\"name\">\n    <h1><a href=\"/\">Evitics</a></h1>\n  </li>\n</ul>\n<section class=\"top-bar-section\"> \n  <ul class=\"right\">\n    <li class=\"divider\"></li>\n\n    <li class=\"has-dropdown organizationPicker\">\n      <a href=\"/organizations\">Organizations</a>\n      <ul class=\"dropdown\">\n        <li><a href=\"#changeOrg\" data-organizationId=\"Hi World\">Org 1</a></li>\n        <li><a href=\"#changeOrg\" data-organizationId=\"Hi World2\">Org 1</a></li>\n      </ul>\n    </li>\n\n    <li class=\"divider\"></li>\n    <li><a href=\"/analyitics\">Analytics</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"/marketing\">Marketing</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"/help\">Help</a></li>\n\n    <li class=\"active\"><a href=\"https://login.gatech.edu/cas/login?service=https://evitics.gatech.edu/login.php\">Login</a></li>\n  </ul> \n  <!-- Left Nav Section --> \n  <ul class=\"left\">\n  </ul>\n</section>";
  });

return this["templates"];

});