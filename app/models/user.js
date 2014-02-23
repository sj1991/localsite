define(['backbone', "collections/organization"],
function(backbone,   OrganizationCollection) {
  var UserModel = Backbone.Model.extend({
    initialize: function(options) {
      this.set('id', options.id);
    },
    parse : function(res) {
      //convert to organization collection
      res.organizations = new OrganizationCollection(res.organizations);
      return res;
    },
    urlRoot : '/api/user/',
    getOrgIdArr : function() {
      var organizations = this.get('organizations');
      var output = [];
      organizations.each(function(organization) {
        output.push(organization.id);
      });
      return output;
    }
  });
  return UserModel;
});