import Component from "@glimmer/component";
import { ensureSafeComponent } from "@embroider/util";

interface DemoArgs {
  demo?: string;
  source?: string;
}

export default class DemoComponent extends Component<DemoArgs> {
  get demo() {
    return ensureSafeComponent(`demo/${this.args.demo}`, this);
  }

  get source(): string | undefined {
    return this.args.demo
      ? `components/demo/${this.args.demo}/template.hbs`
      : this.args.source;
  }
}
