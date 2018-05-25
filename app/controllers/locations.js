import Controller from '@ember/controller';
import { get } from '@ember/object';
import { set } from '@ember/object';
import $ from 'jquery';
import { later as runLater } from '@ember/runloop';

import TraceryGeneratable from 'inspiration-engine/mixins/tracery-generatable';
import foldArray from 'inspiration-engine/utils/computed/fold-array';
import grammarConfig from 'inspiration-engine/grammars/locations';

export default Controller.extend(TraceryGeneratable, {
  // Required for generation
  grammarConfig,

  // State
  locations: [],

  numRows: 5,
  numColumns: 0, /* Computed by jQuery */

  locationRows: foldArray('locations', 'numRows', 'numColumns'),

  init() {
    this._super(...arguments);

    // Add window resize hook and call it once
    let handleResize = this.handleResize.bind(this);
    $(window).on('resize', handleResize);

    runLater(() => handleResize());
  },

  willDestroy() {
    this._super(...arguments);
    $(window).off("resize");
  },

  handleResize(e) {
    const numColumns = get(this, 'numColumns');

    let newNumColumns = Math.ceil($('.container').width() / 200);
    set(this, 'numColumns', newNumColumns);

    if (numColumns != newNumColumns) {
      this.generateLocations();
    }
  },

  generateLocations() {
    const numRows = get(this, 'numRows');
    const numColumns = get(this, 'numColumns');

    let newLocations = [];

    for (let i = 0; i < numRows * numColumns; i++) {
      newLocations.push(this.generate());
    }

    set(this, 'locations', newLocations);
  },

  actions: {
    generateLocations() {
      this.generateLocations();
    },
  },
});
