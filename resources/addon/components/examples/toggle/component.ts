import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';
import { tracked } from '@glimmer/tracking';
import { ensureSafeComponent } from '@embroider/util';

import LabelComponent from './label';
import SwitchComponent from './switch';

export interface ToggleLabelArgs {
  for: string;
  invoke: (value: boolean) => void;
  value: boolean;
}

interface ToggleArgs {
  id?: string;
  checked?: boolean;
  label?: string;
  onLabel?: string;
  offLabel?: string;
  enabled?: boolean;
  change?: (value: boolean) => void;

  labelComponent?: Component<ToggleLabelArgs>;
  switchComponent?: Component;
}

export default class ToggleComponent extends Component<ToggleArgs> {
  @tracked checked: boolean;
  enabled: boolean;

  constructor(owner: Owner, args: ToggleArgs) {
    super(owner, args);

    // set initial state
    this.enabled = args.enabled || true;
    this.checked = args.checked || false;
  }

  get id(): string {
    return this.args.id ?? guidFor(this);
  }

  get switchComponent() {
    return ensureSafeComponent(
      this.args.switchComponent ?? SwitchComponent,
      this
    );
  }

  get labelComponent() {
    return ensureSafeComponent(
      this.args.labelComponent ?? LabelComponent,
      this
    );
  }

  @action
  change(checked?: boolean) {
    if (checked === undefined) {
      checked = !this.checked;
    }

    if (this.enabled && this.checked !== checked) {
      this.checked = checked;

      if (this.args.change) {
        this.args.change(this.checked);
      }
    }
  }
}
