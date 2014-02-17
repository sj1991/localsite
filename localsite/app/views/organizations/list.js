define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var OrganizationListView = Backbone.View.extend({
    el : '.site-content',
    initialize : function(models, options) {
      this.organizations = models;
    },
    render : function() {
      this.$el.html(templates['organizations/list'](this.organizations.toJSON()));
    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return OrganizationListView;
});