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
    getOrgIds : function() {
      var organizations = this.get('organizations');
      var output = [];
      organizations.each(function(organization) {
        output.push(organization.id);
      });
      return output;
    },
    /*
      Recursive toJSON, which converts the collection to a 
      json obj
    */
    toJSONR : function() {
      return JSON.parse(JSON.stringify(this.attributes));
    }
  });
  return UserModel;
});