import EmberRouter from '@ember/routing/router';
import config from '@ember-handbook/slides-component-architecture/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // nothing to see here
});
