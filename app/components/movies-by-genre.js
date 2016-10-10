import Ember from 'ember';
import isInCordova from 'movie-man/utils/is-in-cordova';
import cordova from 'movie-man/utils/cordova';

const {observer,isEqual} = Ember;

export default Ember.Component.extend({

     movie: null,

     selectedGenre: '',

     playTrailer(videoUrl){
       if(isInCordova()){
        window.open(videoUrl,"_blank","location=no","EnableViewPortScale=yes");
       }else{
         window.open(videoUrl,"_blank","location=yes","EnableViewPortScale=yes");
       }
     },

     actions:{
       displayTrailer: function(videoUrl){
         this.playTrailer(videoUrl);
       }
     }
});
