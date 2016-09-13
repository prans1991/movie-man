import DS from 'ember-data';
import Ember from 'ember';

const {typeOf} = Ember;

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return (typeOf(serialized) === "array") ? Ember.A(serialized) : Ember.A([serialized]);
  },

  serialize: function(deserialized) {
    if (typeOf(deserialized) === "array") {
      return deserialized;
    } else {
      return [];
    }
  }
});
