define(['jquery', 'backbone', 'templates',],
function($,        Backbone,   templates) {
  var LoadingView = Backbone.View.extend({
    el : '.site-content',
    render : function(msg) {
      this.$el.html(templates.loading({msg: msg}));
    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return LoadingView;
});