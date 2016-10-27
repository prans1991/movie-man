import Ember from 'ember';
import App from '../app';
import BaseRoute from 'movie-man/routes/base';

export default Ember.Route.extend({

  redirect: function(){
    this.set('isInBackground',true);
    this.transitionTo('movies.home');
  },

  isInBackground: false,

  appBackgroundEventHandler:function(){
    Ember.Logger.log("inside background event handler?????????",App.get('isInBackground'));
  }.observes('isInBackground'),
});
