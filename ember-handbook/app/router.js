import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('component-architecture', function () {
    this.route('talk');
    this.route('haptics', function () {
      this.route('invocation');
      this.route('plug-and-play');
      this.route('blocks');
    });
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
      this.route('adapter');
      this.route('bridge');
      this.route('facade');;

      this.route('command');
      this.route('strategy');
    });
    this.route('styling');
    this.route('classification');
    this.route('glossary');
    this.route('best-practices');
    this.route('literature');
  });
});

export default Router;
