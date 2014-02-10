// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", "foundation", "views/errorPage", "models/user", "views/nav", "controllers/bindLinksToBackbone", "controllers/bindControllers" ],
  function( app,   Router,   foundation,   ErrorPage,         User,          NavView,     BindLinksToBackbone,               BindControllers) {
    var user = new User({id: userId});
    user.fetch({
      success : function(user) {
        // Define your master router on the application namespace and trigger all
        // navigation from this instance.
        app.router = new Router();

        // Trigger the initial route and enable HTML5 History API support, set the
        // root folder to '/' by default.  Change in app.js.
        Backbone.history.start({ pushState: true, root: app.root });

        // Captures <a href="/...."></a> and forces a backbone.js route
        BindLinksToBackbone(app);

        // This code binds the new route events to each controller
        BindControllers(app);
        
        // Show the Nav
        var navView = new NavView({user : user}, {});
        navView.render();
        $(document).foundation();

      },
      failure : function(e)  {
        ( new ErrorPage() ).render("Could not load user: " + JSON.stringify(e));
      }
    });
  });
});
