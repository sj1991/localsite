define(["jquery", "backbone"],
function($,        Backbone) {
  function triggerController(app, triggerType) {
    alert("HI - triggerType: " + triggerType);
  }
  return triggerController;
});