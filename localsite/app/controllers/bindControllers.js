define(['jquery', 'backbone', 'controllers/home', 'controllers/analyitics'],
function($,        Backbone,   homeController,     analyiticsController) {
  var bindControllers = function(app) {
    app.router.on('route:index', homeController);
    app.router.on('route:analyitics', analyiticsController);
  };
  return bindControllers;
});