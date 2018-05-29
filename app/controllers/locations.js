import Controller from '@ember/controller';

import TraceryGeneratable from 'inspiration-engine/mixins/tracery-generatable';
import grammarConfig from 'inspiration-engine/grammars/locations';

export default Controller.extend(TraceryGeneratable, {
  // Required for generation
  grammarConfig,
});
