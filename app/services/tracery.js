import Service from '@ember/service';

import tracery from 'tracery';
import baseEngModifiers from 'tracery/mods-eng-basic';

export default Service.extend({
  create(config) {
    let grammar = tracery.createGrammar(config);
    grammar.addModifiers(baseEngModifiers);

    grammar.generate = () => grammar.flatten('#origin#');

    return grammar;
  },
});
