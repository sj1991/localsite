define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "(/)": "index",
      "analyitics(/)" : "analyitics",
      "triggers/new/:triggerType" : "newTrigger",
      "organizations(/)" : "organizations",
      "organizations/:orgId" : "organizations",
    },

    index: function() {
      console.log("Welcome to your / route.");
    }
  });
});
