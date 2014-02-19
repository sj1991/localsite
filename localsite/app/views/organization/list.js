define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var OrganizationListView = Backbone.View.extend({
    el : '.site-content',
    initialize : function(options) {
      this.organizations = options.organizations;
      this.user = options.user;
    },
    render : function() {
      this.$el.html(templates['organization/list'](this.organizations.toJSON()));
    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return OrganizationListView;
});