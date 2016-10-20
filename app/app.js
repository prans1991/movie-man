import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import configuration from './services/configuration';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  isInBackground: false
});

// App.isInBackground = false;

App.appDidEnterForeground = function(){
    Ember.Logger.log("app in foreground"+App.isInBackground);
    App.isInBackground =false;
};
App.appDidEnterBackground=function(){
  Ember.Logger.log("app in background");
  App.set('isInBackground',true);
};



loadInitializers(App, config.modulePrefix);

export default App;

window.addEventListener('load', function() {
  document.addEventListener("deviceready", function(){
  console.log("inside device ready");
  App.advanceReadiness();
  }, false);
  document.addEventListener("resume", function(){
    App.appDidEnterForeground();
  },false);
  document.addEventListener("pause", function(){
    App.appDidEnterBackground();
  }, false);
},false);
