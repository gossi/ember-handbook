import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PageComponent extends Component {
  @tracked menu = false;
}
