import Route from "@ember/routing/route";
import RouterService from "@ember/routing/router-service";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service declare intl;
  @service declare router: RouterService;

  beforeModel() {
    // explicitely set the locale - required for 'ember-cite'
    this.intl.setLocale("en");

    // scroll top in route change
    this.router.on("routeDidChange", () => {
      // keep the check for window.scrollTo for fastboot
      if (window.scrollTo) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    });
  }
}
