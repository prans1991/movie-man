import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({

    movieGenres : computed('model.[]',{
       get(){
         var genres = this.get('model').mapBy('genre');
         return genres.reduce( (genreArr,movieGenres) =>{
             genreArr.push('All');
             movieGenres.map((genre) =>{
                 genreArr.push(genre);
             });
             return genreArr.uniq();
         },Ember.A());
       }
    }),
});
