import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';
import { get } from '@ember/object';
import { set } from '@ember/object';
import { assert } from '@ember/debug';

export default Mixin.create({
  // Services
  tracery: inject(),

  // State
  _generator: null,

  init() {
    this._super(...arguments);

    const tracery = get(this, 'tracery');

    // Validate inputs
    const grammarConfig = get(this, 'grammarConfig');
    assert("Must define a property called `grammarConfig` on tracery-generatable", grammarConfig);

    // Construct generator
    set(this, '_generator', tracery.create(grammarConfig));
  },

  generate() {
    const generator = get(this, '_generator');
    return generator.generate();
  },
});
