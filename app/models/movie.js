import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({

   title: attr('string'),

   image: attr('string'),

   rating: attr('number'),

   releaseYear: attr('number'),

   genre: attr('array')

});
