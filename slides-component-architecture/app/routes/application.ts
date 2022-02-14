import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service declare intl;

  beforeModel() {
    // explicitely set the locale - required for 'ember-cite'
    this.intl.setLocale('en');
  }
}
