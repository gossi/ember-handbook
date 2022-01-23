import hljs from 'highlight.js';

export function highlight(code: string, language: string) {
  if (language && hljs.listLanguages().includes(language)) {
    return hljs.highlight(language, code).value;
  }

  return hljs.highlightAuto(code).value;
}
