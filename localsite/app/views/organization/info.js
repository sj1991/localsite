define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var OrganizationInfoView = Backbone.View.extend({
    el : '.site-content',
    initialize : function(options) {
      this.organization = options.organization;
    },
    render : function() {
      this.$el.html(templates['organization/info'](this.organization.toJSON()));
    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return OrganizationInfoView;
});