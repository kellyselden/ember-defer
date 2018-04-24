import Deferred from 'ember-defer';
import { module, test } from 'qunit';

module('Unit | Utility | deferred', function() {
  test('it works', async function(assert) {
    let deferred = new Deferred();

    deferred.resolve('foo');

    let result = await deferred.promise;

    assert.equal(result, 'foo');
  });
});
