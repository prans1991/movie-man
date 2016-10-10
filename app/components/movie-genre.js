import Ember from 'ember';

const {observer,isEqual} = Ember;

export default Ember.Component.extend({

  isSelectedGenre: observer('genres.@each',function(){
      var movieGenre = this.get('genres');
      movieGenre.map((genre) =>{
         Ember.Logger.log("selectedGenre match"+isEqual(genre,this.get('selectedGenre')));
      });
  }).on('init'),
});
