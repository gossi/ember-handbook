import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('component-architecture', function () {
    this.route('haptics');
    this.route('types', function () {
      this.route('presentational');
      this.route('container');
      this.route('provider');
      this.route('composable');
      this.route('data-entry');
    });
    this.route('patterns', function () {
      this.route('factory');
      this.route('prototype');
      this.route('builder');

      this.route('decorator');
      this.route('proxy');
      this.route('adapter');
      this.route('composite');

      this.route('flyweight');
      this.route('strategy');
    });
    this.route('classification');
    this.route('specialization', function () {
      this.route('inheritance');
      this.route('composition');
    });
    this.route('best-practices');
  });
});

export default Router;
