import Component from '@glimmer/component';

import slugify from 'slugify';

interface Meta {
  [key: string]: any;
  title: string;
  type?: string;
}

interface ArticleLayoutBasicArgs {
  data: string;
  toc: string;
}

const TYPES: { [key: string]: string } = {
  tech: 'TechArticle',
  article: 'Article'
};

export default class ArticleLayoutBasicComponent extends Component<
  ArticleLayoutBasicArgs
> {
  get meta(): Meta {
    return JSON.parse(
      decodeURIComponent(this.args.data ? this.args.data : '{}')
    );
  }

  get title(): string {
    return this.meta.title;
  }

  get slug(): string {
    return slugify(this.title, { lower: true });
  }

  get toc(): object {
    return JSON.parse(decodeURIComponent(this.args.toc ? this.args.toc : '{}'));
  }

  get type(): string {
    const { type } = this.meta;
    if (type && TYPES[type]) {
      return TYPES[type];
    }
    return TYPES.article;
  }
}
