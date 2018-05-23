import Route from '@ember/routing/route';
import { links } from 'inspiration-engine/components/nav-bar';

export default Route.extend({
  beforeModel() {
    this.transitionTo(links[0].route);
  }
});
