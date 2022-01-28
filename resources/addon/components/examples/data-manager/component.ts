import Component from "@glimmer/component";

interface DataManagerArgs {
  items: unknown[];
}

export default class DataManagerComponent extends Component<DataManagerArgs> {
  get sortedItems(): any[] {
    return [...this.args.items].sort();
  }
}
