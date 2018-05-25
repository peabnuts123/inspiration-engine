'use strict';

define('inspiration-engine/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/nav-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nav-bar.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/locations.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/locations.js should pass ESLint\n\n38:16 - \'e\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/not-found.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/not-found.js should pass ESLint\n\n');
  });

  QUnit.test('grammars/locations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'grammars/locations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/tracery-generatable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/tracery-generatable.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/locations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/locations.js should pass ESLint\n\n');
  });

  QUnit.test('routes/not-found.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/not-found.js should pass ESLint\n\n');
  });

  QUnit.test('services/tracery.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/tracery.js should pass ESLint\n\n');
  });

  QUnit.test('utils/computed/fold-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/computed/fold-array.js should pass ESLint\n\n');
  });
});
define('inspiration-engine/tests/test-helper', ['inspiration-engine/app', 'inspiration-engine/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('inspiration-engine/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('inspiration-engine/config/environment', [], function() {
  var prefix = 'inspiration-engine';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('inspiration-engine/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
