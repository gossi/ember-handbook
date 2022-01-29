declare module 'ember-code-snippet' {
  export function getCodeSnippet(
    name: string,
    unindent?: boolean
  ): {
    source: string;
    language: string;
    extension: string;
  };
}
