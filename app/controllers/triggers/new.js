define(["jquery", "backbone"],
function($,        Backbone) {
  function TriggerController(options) {
    alert("HI - triggerType: " + options.triggerType);
  }
  return TriggerController;
});