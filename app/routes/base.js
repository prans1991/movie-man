import Ember from 'ember';

export default Ember.Route.extend({

  setup: function(context,transition){
    var self = this, superFN = this._super;
    superFN.call(self,context);
    Ember.Logger.log("inside base route setup");
    self.transitionTo('movies.home');
  }
});
