import Ember from 'ember';

export function strictEq(params/*, hash*/) {
  return params[0] === params[1];
}

export default Ember.Helper.helper(strictEq);
