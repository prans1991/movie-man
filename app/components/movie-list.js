import Ember from 'ember';

const {computed,isEqual} = Ember;

export default Ember.Component.extend({

    movies: null,

    movieGenres: null,

    filteredMoviesByGenre: Ember.A(),

    filteredMovies: Ember.A(),

    didReceiveAttrs(){
      this._super(...arguments);
      this.set('filteredMovies',this.get('movies'));
      this.set('selectedGenre','All');
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
       this.set('filteredMovies',filteredMovies);
    },

    filterMoviesBySearch(searchText){
       var movies = this.get('movies');
       var filteredMovies = Ember.A();
       movies.map((movie) =>{
         var movieTitle = movie.get('title');
         movieTitle = movieTitle.toLowerCase();
         if(movieTitle.indexOf(searchText) !== -1){
           filteredMovies.push(movie);
         }
       });
       this.set('filteredMovies',filteredMovies);
       Ember.Logger.log("filteredMovies length"+filteredMovies.get('length'));
    },

    keyUp:function(e){
      var searchText = e.target.value;
      searchText = searchText.trim();
      if(searchText.length > 0){
        searchText = searchText.toLowerCase();
        this.filterMoviesBySearch(searchText);
      }
    },

    actions:{
      selectMovieGenre(genre){
        Ember.Logger.log("genre"+genre);
        this.set('selectedGenre',genre);
        if(isEqual(genre,'All')){
          this.set('filteredMovies',this.get('movies'));
        }else{
          this.filterMoviesByGenre(genre);
        }
      }
    }
});
