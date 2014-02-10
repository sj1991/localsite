define(['jquery', 'backbone', 'controllers/home'],
function($,        Backbone,   homeController) {
  var bindControllers = function(app) {
    app.router.on('route:index', homeController);
    
  };
  return bindControllers;
});