define(["jquery", "backbone", "models/organization", "collections/organizations", "views/organizations/list", "views/organizations/info", "views/errorPage", "views/loading"],
function($,        Backbone,   OrganizationModel   ,  OrganizationsCollection   ,  OrganizationList         ,  OrganizationInfo         ,  ErrorPage       ,  LoadingView) {
  var OrganizationsController = function(app, organizationName) {
    this.app = app;
    if(typeof organizationName === 'undefined') {
      this.showOrganizationList();
    } else {
      this.showOrganization(organizationName);
    }
    app.views.current.render();
  };

  /*
    Handle the loading view
  */
  OrganizationsController.prototype.showLoadingView = function(msg) {
    this.loadingView = new LoadingView([],{});
    this.loadingView.render(msg);
  };
  OrganizationsController.prototype.removeLoadingView = function() {
    this.loadingView.remove();
  };

  /*
    Fetch a list of all organizations, once fetched display them
  */
  OrganizationsController.prototype.showOrganizationList = function() {
    //Show loading view while we get a list of orgs
    this.showLoadingView("Please wait while we get a list of all the organizations");

    //Fetch a list of organizations
    var that = this;
    var organizations = new OrganizationsCollection([],{});
    organizations.fetch({
      success : function() {
        that.app.views.current = new OrganizationList(organizations,{});
        that.removeLoadingView();
        that.app.views.current.render();
      },
      error : function(m , r) {
        (new ErrorPage()).render("Could not load organization List: " + JSON.stringify(r));
      }
    });
  };

  /*
    Fetch the specific organization, once fetched display it
  */
  OrganizationsController.prototype.showOrganization = function(organizationName) {
    //show loading view while we get the organization
    this.showLoadingView("Please wait while we get the infromation for " + organizationName);

    //fetch the organization
    var that = this;
    var organization = new OrganizationModel([], {name : organizationName});
    organization.fetch({
      success : function() {
        that.app.views.current = new OrganizationInfo(organization, {});
        that.removeLoadingView();
        that.app.views.current.render();
      },
      error : function(m, r) {
        (new ErrorPage()).render("Could not load information for organization: " + organizationName + "\n\nerror: " + JSON.stringify(r));
      }
    });
  };

  return OrganizationsController;
});