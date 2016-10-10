import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal/modal-play-trailer', 'Integration | Component | modal/modal play trailer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal/modal-play-trailer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modal/modal-play-trailer}}
      template block text
    {{/modal/modal-play-trailer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
