import Controller from '@ember/controller';
import { later as runLater } from '@ember/runloop';
import { inject } from '@ember/service';
import { set }  from '@ember/object';

export default Controller.extend({
  router: inject(),
  timer: 5,

  init() {
    this._super(...arguments);

    runLater(this.countDown.bind(this), 1000);
  },

  countDown() {
    set(this, 'timer', this.timer - 1);

    if (this.timer > 0) {
      runLater(this.countDown.bind(this), 1000);
    } else {
      this.router.transitionTo('index');
    }
  }
});
