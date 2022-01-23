import { htmlSafe } from "@ember/template";
import Component from "@glimmer/component";
import { Owner } from "@glimmer/di";

import { getCodeSnippet } from "ember-code-snippet";

import { highlight } from "ember-handbook/utils/highlight";

interface CodeSnippetArgs {
  name: string;
}

export default class CodeSnippetComponent extends Component {
  source: string;
  language: string;

  constructor(owner: Owner, args: CodeSnippetArgs) {
    super(owner, args);

    const snippet = getCodeSnippet(args.name);

    this.language = snippet.language;
    this.source = htmlSafe(highlight(snippet.source, snippet.language));
  }
}
