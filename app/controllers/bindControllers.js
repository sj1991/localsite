define(['jquery', 'underscore', 'backbone', 'controllers/home', 'controllers/analyitics', 'controllers/triggers/new', 'controllers/organization'],
function($      ,  _          ,  Backbone ,  HomeController   ,  AnalyiticsController   ,  NewTriggerController     ,  OrganizationController) {
  var bindControllers = function(app, user) {
    var vent = _.extend({}, Backbone.Events);

    app.router.on('route:index', function() {
      app.controller = new HomeController({app : app, user: user, vent : vent});
    });

    app.router.on('route:analyitics', function() {
      app.controller = new AnalyiticsController({app : app, user: user, vent: vent});
    });

    app.router.on('route:newTrigger', function(triggerType) {
      app.controller = new NewTriggerController({
          app: app,
          user: user,
          vent : vent,
          triggerType: triggerType
      });
    });

    app.router.on('route:organizations' , function(orgId) {
      app.controller = new OrganizationController({
        app: app,
        user: user,
        vent: vent,
        orgId: orgId
      });
    });
    /*
      Vent Actions
    */
    vent.bind("post:startMeeting", function(post) {
      alert("Starting Meeting...");
      alert(JSON.stringify(post));
    });
    vent.bind("post:createAMeeting", function(post) {
      alert("Creating Meeting...");
      alert(JSON.stringify(post));
    });
  };
  return bindControllers;
});