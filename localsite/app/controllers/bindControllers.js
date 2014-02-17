define(['jquery', 'backbone', 'controllers/home', 'controllers/analyitics', 'controllers/triggers/new', 'controllers/organizations'],
function($,        Backbone,   HomeController,     AnalyiticsController   ,  NewTriggerController     ,  OrganizationsController) {
  var bindControllers = function(app) {
    app.router.on('route:index', function() {
      app.controller = new HomeController(app);
    });
    app.router.on('route:analyitics', function() {
      app.controller = new AnalyiticsController(app);
    });

    app.router.on('route:newTrigger', function(triggerType) {
      app.controller = new NewTriggerController(app, triggerType);
    });

    app.router.on('route:organizations' , function(organizationName) {
      app.controller = new OrganizationsController(app, organizationName);
    });
  };
  return bindControllers;
});