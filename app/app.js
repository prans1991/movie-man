import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const {inject} = Ember;
let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.create({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  isInBackground: false,
  appController: inject.controller('application'),
  appDidEnterForeground: function(){
    Ember.Logger.log("app in foreground"+App.isInBackground);
    this.set('isInBackground',false);
  },
  appDidEnterBackground: function(){
    Ember.Logger.log("app in background");
    this.set('isInBackground',true);
  }
});

loadInitializers(App, config.modulePrefix);

export default App;

window.addEventListener('load', function() {
  document.addEventListener("deviceready", function(){
  console.log("inside device ready");
  }, false);
  document.addEventListener("resume", function(){
    App.appDidEnterForeground();
  },false);
  document.addEventListener("pause", function(){
    App.appDidEnterBackground();
  }, false);
},false);
