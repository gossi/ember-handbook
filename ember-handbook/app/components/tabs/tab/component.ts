import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";

import TabsComponent from "../component";

interface TabArgs {
  activeTab?: TabComponent;
  register: (tab: TabsComponent) => void;
  label: string;
}

export default class TabComponent extends Component<TabArgs> {
  id = guidFor(this);

  get label(): string {
    return this.args.label;
  }
}
