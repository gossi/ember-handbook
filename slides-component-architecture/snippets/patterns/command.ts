import Component from '@glimmer/component';
import { command, Command, commandFor } from 'ember-command';

export default class CompareOfferCommand extends Command {
  execute(): void {
    // execute business logic
  }
}

class ProductScreenPriceComponent extends Component {
  @command compareOffer = commandFor(new CompareOfferCommand());
}
