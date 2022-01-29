import { htmlSafe } from '@ember/template';
import { SafeString } from '@ember/template/-private/handlebars';
import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import { getCodeSnippet } from 'ember-code-snippet';

import hljs from 'highlight.js';

export function highlight(code: string, language: string) {
  if (language && hljs.listLanguages().includes(language)) {
    return hljs.highlight(language, code).value;
  }

  return hljs.highlightAuto(code).value;
}

interface CodeSnippetArgs {
  name: string;
}

export default class CodeSnippetComponent extends Component {
  source: SafeString;
  language: string;

  constructor(owner: Owner, args: CodeSnippetArgs) {
    super(owner, args);

    const snippet = getCodeSnippet(args.name);

    this.language = snippet.language;
    this.source = htmlSafe(highlight(snippet.source, snippet.language));
  }
}
