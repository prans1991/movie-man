import Ember from 'ember';
import BaseRoute from 'movie-man/routes/base';

export default BaseRoute.extend({

  model: function(){
    return this.store.findAll('movie');
  }
});
