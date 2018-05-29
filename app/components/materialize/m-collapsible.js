import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagName: 'ul',
  classNames: ['collapsible'],

  /* Attributes */
  title: '',
  icon: '',
  
  didInsertElement() {
    this._super(...arguments);

    $(this.element).collapsible();
  },
});
