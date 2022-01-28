import Component from '@glimmer/component';

export interface ToggleLabelArgs {
  for: string;
  invoke: (value: boolean) => void;
  value: boolean;
}

export default class ToggleLabelComponent extends Component<ToggleLabelArgs> {}
