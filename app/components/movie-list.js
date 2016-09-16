import Ember from 'ember';

const {computed,isEqual} = Ember;

export default Ember.Component.extend({

    movies: null,

    movieGenres: null,

    filteredMoviesByGenre: Ember.A(),

    didReceiveAttrs(){
      this._super(...arguments);
      this.set('filteredMoviesByGenre',this.get('movies'));
    },
    
    filterMoviesByGenre(genre){
       var movies = this.get('movies');
       var filteredMovies = Ember.A();
       movies.map((movie) =>{
          var genres = movie.get('genre');
          if(genres.contains(genre)){
            filteredMovies.push(movie);
          }
       });
       this.set('filteredMoviesByGenre',filteredMovies);
    },

    actions:{
      selectMovieGenre(genre){
        Ember.Logger.log("genre"+genre);
        if(isEqual(genre,'All')){
          this.set('filteredMoviesByGenre',this.get('movies'));
        }else{
          this.filterMoviesByGenre(genre);
        }
      }
    }
});
