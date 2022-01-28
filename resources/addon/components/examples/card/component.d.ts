import Component from '@glimmer/component';

import CardBodyComponent from './body/component';
import CardFooterComponent from './footer/component';
import CardHeaderComponent from './header/component';

export interface CardYield {
  Header: CardHeaderComponent;
  Body: CardBodyComponent;
  Footer: CardFooterComponent;
}

/**
 * Card component implementing the builder interface
 *
 * @yield CardYield
 */
export default class CardComponent extends Component {}
