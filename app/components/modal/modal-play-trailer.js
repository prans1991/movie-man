import BaseModal from 'movie-man/components/modal/modal-base';

export default BaseModal.extend({
  animateIn: 'scale',
  animateOut: 'scale',

  actions: {
    continueAction: function(){
      this.sendAction('continueAction');
    }
  }
});
