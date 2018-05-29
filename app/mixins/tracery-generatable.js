import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';
import { get } from '@ember/object';
import { set } from '@ember/object';
import { assert } from '@ember/debug';
import { later as runLater } from '@ember/runloop';
import { computed } from '@ember/object';
import $ from 'jquery';

import foldArray from 'inspiration-engine/utils/computed/fold-array';


export default Mixin.create({
  // Services
  tracery: inject(),

  numRows: 5,
  numColumns: 0, /* Computed by jQuery */

  items: [],
  itemRows: foldArray('items', 'numRows', 'numColumns'),

  // Computed
  _generator: computed('grammarConfig', function () {
    const tracery = get(this, 'tracery');
    const grammarConfig = get(this, 'grammarConfig');

    // Validate input
    assert("Must define a property called `grammarConfig` on tracery-generatable", grammarConfig);

    return tracery.create(grammarConfig);
  }),

  init() {
    this._super(...arguments);

    // Add window resize hook and call it once
    let handleResize = this.handleResize.bind(this);
    $(window).on('resize', handleResize);
    runLater(() => {
      this.handleResize()
      this.generateItems();
    });
  },

  willDestroy() {
    this._super(...arguments);
    $(window).off("resize");
  },

  handleResize() {
    let newNumColumns = Math.ceil($('.container').width() / 200);
    set(this, 'numColumns', newNumColumns);
  },

  generate() {
    const generator = get(this, '_generator');
    return generator.generate();
  },

  generateItems() {
    const numRows = get(this, 'numRows');
    const numColumns = get(this, 'numColumns');

    let newItems = [];

    for (let i = 0; i < numRows * numColumns; i++) {
      newItems.push(this.generate());
    }

    set(this, 'items', newItems);
  },

  actions: {
    generateLocations() {
      this.generateItems();
    },
  },
});
