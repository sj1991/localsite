define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var OrganizationListView = Backbone.View.extend({
    el : '.site-content',
    initialize : function(options) {
      this.organizations = options.organizations;
      this.user = options.user;
    },
    render : function() {
      this.$el.html(templates['organization/list/wrapper']());
      this.renderMyOrganizations();
      this.renderOtherOrganizations();
    },
    renderMyOrganizations: function() {
      var myOrganizations = this.user.get('organizations');
      var html = '';
      var itemTemplate = templates['organization/list/item']; //pointer to template function

      this.user.get('organizations').each(function(organization) {
        html += itemTemplate(organization.toJSON());
      });

      this.$el.find('.my-organizations').html(html);
    },
    /*
        Only displays orgs which I don't belong to
        Hence the 'other organizations'
    */
    renderOtherOrganizations : function() {
      var myOrgsIdArr = this.user.getOrgIdArr(); //array of the organizations user belongs to
      var html = '';
      var itemTemplate = templates['organization/list/item']; //pointer to template function

      this.organizations.each(function(organization) {
        if(myOrgsIdArr.indexOf(organization.id) === -1) {
          html += itemTemplate(organization.toJSON());
        }
      });

      this.$el.find('.other-organizations').html(html);
    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return OrganizationListView;
});