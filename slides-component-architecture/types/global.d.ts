// Types for compiled templates
declare module '@ember-handbook/slides-component-architecture/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
