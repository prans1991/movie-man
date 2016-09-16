import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movies-by-genre', 'Integration | Component | movies by genre', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{movies-by-genre}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#movies-by-genre}}
      template block text
    {{/movies-by-genre}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
