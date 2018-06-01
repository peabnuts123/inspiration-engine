'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules/materialize-css/sass'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('node_modules/materialize-css/dist/js/materialize.js');
  app.import('node_modules/lodash/lodash.js', {
    using: [
      { transformation: 'cjs', as: 'lodash' }
    ]
  });

  app.import('vendor/tracery/tracery.js', {
    using: [
      { transformation: 'cjs', as: 'tracery' }
    ]
  });
  app.import('vendor/tracery/mods-eng-basic.js', {
    using: [
      { transformation: 'cjs', as: 'tracery/mods-eng-basic' }
    ]
  });

  return app.toTree();
};
