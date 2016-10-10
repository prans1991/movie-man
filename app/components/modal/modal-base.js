import Ember from 'ember';
import { animate, stop } from "liquid-fire";

const {computed} = Ember;

export default Ember.Component.extend({
  /**
   * Base modal.
   *
   */
  classNames: ['modal'],
  classNameBindings: [
    'modalType',
    '__modalState',
    '__overlayType',
    '__align',
    '__hasAnimation',
    'animateInClass',
    'animateOutClass'
  ],

  /**
   * Type of modal
   * @type String
   */
  modalType: 'modal-base',

  /**
   * Type of the overlay
   *
   * @type {String} This can be (by now) translucent, opaque or dark
   */
  overlayType: 'translucent',

  /**
   * If the modal should be vertically/horizontally centered
   * @type {String} This can be none or center
   *
   */

  align: 'none',

  /**
   * Current modal state
   * @type String
   */
  modalState: 'close',

  /**
   * Returns a Classname for the current modalState
   * @return String   The formatted class name
   */
  __modalState: Ember.computed(function() {
    return `modal_is-${this.get('modalState')}`;
  }).property('modalState'),

  __overlayType: Ember.computed(function() {
    return `modal_${this.get('overlayType')}`;
  }).property('overlayType'),

  __align: Ember.computed(function() {
    return `modal_${this.get('align')}`;
  }).property('align'),

  __hasAnimation: Ember.computed(function() {
    if(this.get('hasAnimation')){
      return 'modal_has-animation';
    }else{
      return '';
    }

  }).property('hasAnimation'),

  didInitAttrs: function() {
    this._super();
    this.set('modalState', 'opening');
  },

  /**
   * Sets state open once it's been inserted in DOM
   * @return null
   */
  __becomeOpen: function(){
    this._super();
    this.set('modalState','opening');
    Ember.run.schedule('afterRender', this, ()=>{
      if (this._state === 'inDOM') {
        this.set('modalState','open');
      }
    });
  }.on('didInsertElement'),

  __becomeClose: function(){
    this.set('modalState', 'closed');
  }.on('willDestroyElement'),

  __animationTypes: function(){
    return Ember.A([
      'none',
      'scale',
      'fade'
    ]);
  }.property().readOnly(),

  __animateIn: 'none',
  __animateOut: 'none',

  animateIn: computed({
    get: function(){
      return this.get('__animateIn');
    },
    set: function(key, value){
      if(this.get('__animationTypes').indexOf(value) !== -1){
        this.set('__animateIn', value);
      }
      return value;
    }
  }).property('__animateIn'),

  animateOut: computed({
    get: function(){
      return this.get('__animateOut');
    },
    set: function(key, value){
      if(this.get('__animationTypes').indexOf(value) !== -1){
        this.set('__animateOut', value);
      }
      return value;
    }
  }).property('__animateOut'),

  animateInClass: Ember.computed(function() {
    return `modal_${this.get('animateIn')}-in`;
  }).property('animateIn'),

  animateOutClass: Ember.computed(function() {
    return `modal_${this.get('animateOut')}-out`;
  }).property('animateOut'),

  fadeOutDuration: 200,

  animateOutFunction: function(callback) {
    this.set('modalState', 'closing');

    if(this.get('animateOut') !== 'none'){
      let modal = this.$();

      stop(modal);
      let fadeModal = animate(modal, {opacity: 0}, {duration: this.get('fadeOutDuration')}, 'modal-fade-out');

      fadeModal.then(callback);

    } else {
      callback();
    }

  },


  actions:{

    closeModalAction: function(){
      if(this.get('modalState', 'open')){
        this.animateOutFunction(()=>{
          this.send('closeModal');
        });
      }
    },

    closeModal: function(){
      this.sendAction('closeModal');
    },
  },

});
