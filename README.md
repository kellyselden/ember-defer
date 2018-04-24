ember-defer
==============================================================================

[![npm version](https://badge.fury.io/js/ember-defer.svg)](https://badge.fury.io/js/ember-defer)
[![Build Status](https://travis-ci.org/kellyselden/ember-defer.svg?branch=master)](https://travis-ci.org/kellyselden/ember-defer)

A deferred promise shim

Installation
------------------------------------------------------------------------------

```
ember install ember-defer
```


Usage
------------------------------------------------------------------------------

```js
import Deferred from 'ember-defer';

let deferred = new Deferred();

deferred.resolve();

await deferred.promise;
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-defer`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
