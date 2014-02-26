define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

Handlebars.registerPartial("example-partial", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='post'>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n";
  return buffer;
  }));

Handlebars.registerPartial("createNewEventModal", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"createNewEventModal\" class=\"reveal-modal\" data-reveal>\n  <form data-abide=\"ajax\">\n    <div class=\"row\">\n      <h3>Create A New Event</h3>\n      <div class=\"large-12 columns\">\n        <label>* Name of the Event\n          <input type=\"text\" placeholder=\"My Super Cool Group Meeting\" required pattern=\"^[a-zA-Z0-9\\s]+$\" class=\"name\">\n        </label>\n        <small class=\"error\">Can only use alpha numeric characters</small>\n      </div>\n    </div>\n    <div class=\"row triggers\">\n      <h4>Attach Triggers</h4>\n      <div class=\"medium-4 columns\">\n        <div class=\"row collapse\">\n          <label>At Start of Event</label>\n          <div class=\"small-10 columns\">\n            <select class=\"start\">\n              <option value=\"null\">None</option>\n              <option>Something else here</option>\n            </select>\n          </div>\n          <div class=\"small-2 columns\">\n            <a class=\"button postfix secondary addEvTrigger\" href=\"/triggers/new/start\">+</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"medium-4 columns\">\n        <div class=\"row collapse\">\n          <label>X Min</label>\n          <div class=\"small-10 columns\">\n            <select class=\"xmin\">\n              <option value=\"null\">None</option>\n              <option>Something else here</option>          \n            </select>\n          </div>\n          <div class=\"small-2 columns\">\n            <a class=\"button postfix secondary addEvTrigger\" href=\"/triggers/new/xmin\">+</a>\n          </div>            \n        </div>\n      </div>\n      <div class=\"medium-4 columns\">\n        <div class=\"row collapse\">\n          <label>At End of Event</label>\n          <div class=\"small-10 columns\">\n            <select class=\"end\">\n              <option value=\"null\">None</option>\n              <option>Something else here</option>\n            </select>\n          </div>\n          <div class=\"small-2 columns\">\n            <a class=\"button postfix secondary addEvTrigger\" href=\"/triggers/new/end\">+</a>\n          </div>            \n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <button class=\"createAnEvent\" type=\"submit\">Create</button>\n      </div>\n    </div>\n  </form>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  }));

this["templates"]["404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <h1>404: Something Went Wrong</h1>\n    <h4>";
  if (stack1 = helpers.errMsg) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.errMsg); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>";
  stack1 = self.invokePartial(partials['example-partial'], 'example-partial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    ";
  return buffer;
  }

  buffer += "<h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n<ul>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.posts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;
  });

this["templates"]["forms/startEvent-Meetings"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["templates"]["forms/startEvent/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <option value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.fullName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.fullName); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n       ";
  return buffer;
  }

  buffer += "<h3>Start an Event</h3>\n<form class=\"startEventForm\">\n  <div class=\"row collapse\">\n    <label>Organization</label>\n    <div class=\"small-10 medium-11 columns\">\n      <select class=\"organization-dropdown\">\n        <option value=\"\">--Please Select One--</option>\n       ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.organizations), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <option value=\"joinOrg\">Join an Organization</option>\n      </select>\n    </div>\n    <div class=\"small-1 small-pull-1 medium-1 medium-pull-0 columns\">\n      <a class=\"button postfix secondary joinAnOrganization\" href=\"/organizations\" style=\"min-width:3em;\">+</a>\n    </div>\n  </div>\n\n  <div class=\"row collapse\">\n    <label>Meeting Name</label>\n    <div class=\"small-10 medium-11 columns\">\n      <select disabled=\"disabled\" class=\"meeting-dropdown\">\n        <option>--Please Select One--</option>\n      </select>\n    </div>\n    <div class=\"small-1 small-pull-1 medium-1 medium-pull-0 columns\">\n      <a class=\"button postfix secondary\" data-reveal-id=\"createNewEventModal\" style=\"min-width:3em\">+</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"small-12 columns\">\n      <button type=\"submit\" class=\"button startEvent\" disabled=\"true\">Start Event</button>\n    </div>\n  </div>\n</form>\n\n";
  stack1 = self.invokePartial(partials.createNewEventModal, 'createNewEventModal', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

this["templates"]["forms/startEvent/meetings"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["templates"]["home/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section id=\"main/startEventForm\" class=\"large-6 large-push-6 columns fixed-top-right startEventForm\">\n  \n</section>\n<section id=\"news\" class=\"large-6 large-pull-6 columns\">\n  <h3>News</h3>\n  <div class=\"row\">\n    <div class=\"medium-12 columns\">\n      <h4>IEEE</h4>\n      <p>10 New Members</p>\n      <p>1/20 - 200 members at general Meeting</p>\n      <p>1/19 - 15 members at Hardware Meeting</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"medium-12 columns\">\n      <h4>SGA</h4>\n      <p>100 New Members</p>\n      <p>1/20 - 200 members at IT Team Meeting</p>\n      <p>1/19 - 15 members at Executive Board Get-together</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"medium-12 columns\">\n      <h4>SGA</h4>\n      <p>100 New Members</p>\n      <p>1/20 - 200 members at IT Team Meeting</p>\n      <p>1/19 - 15 members at Executive Board Get-together</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"medium-12 columns\">\n      <h4>SGA</h4>\n      <p>100 New Members</p>\n      <p>1/20 - 200 members at IT Team Meeting</p>\n      <p>1/19 - 15 members at Executive Board Get-together</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"medium-12 columns\">\n      <h4>SGA</h4>\n      <p>100 New Members</p>\n      <p>1/20 - 200 members at IT Team Meeting</p>\n      <p>1/19 - 15 members at Executive Board Get-together</p>\n    </div>\n  </div>\n</section>\n";
  });

this["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.msg) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.msg); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
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
  


  return "<ul class=\"title-area\">\n  <li class=\"name\">\n    <h1><a href=\"/\">Evitics</a></h1>\n  </li>\n</ul>\n<section class=\"top-bar-section\"> \n  <ul class=\"right\">\n    <li class=\"divider\"></li>\n\n    <li class=\"has-dropdown organizationPicker\">\n      <a href=\"/organizations\">Organizations</a>\n      <ul class=\"dropdown\">\n        <li><a href=\"#joinOrg\">Join</a></li>\n        <li><a href=\"#addOrg\">Add</a></li>\n        <li><a href=\"/organizations/manage\">Leave</a></li>\n        <li><a href=\"/organizations\">View All</a></li>\n      </ul>\n    </li>\n\n    <li class=\"divider\"></li>\n    <li><a href=\"/analyitics\">Analytics</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"/marketing\">Marketing</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"/help\">Help</a></li>\n\n    <li class=\"active\"><a href=\"https://login.gatech.edu/cas/login?service=https://evitics.gatech.edu/login.php\">Login</a></li>\n  </ul> \n  <!-- Left Nav Section --> \n  <ul class=\"left\">\n  </ul>\n</section>";
  });

this["templates"]["organization/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n        <button class=\"alert\">Leave Organization</button>\n      ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requestPending), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n          <button class=\"disabled\">Request Pending</button>\n        ";
  }

function program6(depth0,data) {
  
  
  return "\n          <button>Join Organization</button>\n        ";
  }

  buffer += "<div class=\"small-12 columns\">\n  <div class=\"row \">\n      <h2><img class=\"org-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.img)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h2>\n  </div>\n  <div class=\"row collapse\">\n    <div class=\"small-12\">\n      <p>\n        ";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n      </p>\n    </div>\n  </div>\n  <div class=\"row collapse\">\n    <div class=\"small-12\">\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.joined), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["organization/list/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n  <a class=\"th\" href=\"/organizations/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h4>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.img)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img><br/>\n  </a>\n</li>";
  return buffer;
  });

this["templates"]["organization/list/wrapper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"small-12 columns organization-list\">\n  <div class=\"row collapse\">\n    <h3>My Organizations:</h3>\n    <ul class=\"my-organizations small-block-grid-2 medium-block-grid-5 large-block-grid-6\">\n    \n    </ul>\n  </div>\n  <div class=\"row collapse\">\n    <h3>Other Organizations:</h3>\n    <ul class=\"other-organizations small-block-grid-2 medium-block-grid-5 large-block-grid-6 organization-list\">\n    \n    </ul>\n  </div>\n</div>";
  });

return this["templates"];

});