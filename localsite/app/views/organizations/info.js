define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var OrganizationInfoView = Backbone.View.extend({
    el : '.site-content',
    render : function() {
      document.body.innerHTML += "HI";
      alert("Organization Info View");
    }
  });
  return OrganizationInfoView;
});