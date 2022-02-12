import TextControl from '...';
import NumberControl from '...';

interface Control {}

class ControlFactory {
  static createControl(type: string): Control | undefined {
    if (type === 'text') {
      return new TextControl();
    } else if (type === 'number') {
      return new NumberControl();
    }
  }
}
