define(['jquery', 'backbone', 'controllers/home', 'controllers/analyitics', 'controllers/triggers/new', 'controllers/organization'],
function($,        Backbone,   HomeController,     AnalyiticsController   ,  NewTriggerController     ,  OrganizationController) {
  var bindControllers = function(app, user) {
    app.router.on('route:index', function() {
      app.controller = new HomeController({app: app});
    });
    app.router.on('route:analyitics', function() {
      app.controller = new AnalyiticsController({app: app});
    });

    app.router.on('route:newTrigger', function(triggerType) {
      app.controller = new NewTriggerController({
          app: app,
          user: user,
          triggerType: triggerType
      });
    });

    app.router.on('route:organizations' , function(orgId) {
      app.controller = new OrganizationController({
        app: app,
        user: user,
        orgId: orgId
      });
    });
  };
  return bindControllers;
});