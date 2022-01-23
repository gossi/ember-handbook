import { htmlSafe } from '@ember/string';
import { SafeString } from '@ember/string/-private/handlebars';
import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';
import { tracked } from '@glimmer/tracking';

import fetch from 'fetch';

interface DiagramArgs {
  src: string;
}

export default class DiagramComponent extends Component<DiagramArgs> {
  @tracked svg!: SafeString;

  constructor(owner: Owner, args: DiagramArgs) {
    super(owner, args);

    fetch(args.src).then(async response => {
      this.svg = htmlSafe(await response.text());
    });
  }
}
