'use strict';

module.exports = {
  name: 'ember-defer',

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  included() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/promise-native-deferred/index.js', {
      using: [
        { transformation: 'cjs', as: 'ember-defer' }
      ]
    });
  }
};
