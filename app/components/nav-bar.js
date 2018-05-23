import Component from '@ember/component';
import { set } from '@ember/object';
import { inject } from '@ember/service';

class Link {
  constructor(title, route) {
    this.title = title;
    this.route = route;
  }
}

export const links = [
  new Link("Locations", 'locations'),
];

export default Component.extend({
  router: inject(),
  links: null,


  init() {
    this._super(...arguments);

    set(this, 'links', links);
  },

  didInsertElement() {
    this._super();
    this.$('#mobile-nav').sidenav();
  }
});
