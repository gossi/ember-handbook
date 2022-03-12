import { action } from "@ember/object";
import Component from "@glimmer/component";

import PageComponent from "../component";

interface PageMenuArgs {
  page: PageComponent;
}

export default class PageMenuComponent extends Component<PageMenuArgs> {
  @action
  setMenu() {
    this.args.page.menu = true;
  }
}
