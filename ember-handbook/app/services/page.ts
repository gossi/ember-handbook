import Service from '@ember/service';

import { tracked } from 'tracked-built-ins';

// IMPORTANT NOTE!
// READ FIRST:
// After working on this, it lead to this:
// https://gist.github.com/gossi/c3d6fded03be001d8b9763a8219b0a5e

interface Link {
  href?: string;
  type?: string;
  rel?: string;
  integrity?: string;
  media?: string;
  title?: string;
}

interface Meta {
  name?: string;
  httpEquiv?: string;
  charset?: string;
  content?: string;
}

/**
 * Class to control information on the page, mainly everything that goes into
 * the `<head>` tag. Maybe it be `<title>`, `<meta>` or `<link>`.
 *
 * Based on https://github.com/keeko/framework/blob/master/src/page/Page.php
 */
export default class PageService extends Service {
  /**
   * The title for the current page
   */
  @tracked public title?: string;

  /**
   * The suffix for the `title`
   */
  @tracked public titleSuffix?: string;

  /**
   * The prefix for the `title`
   */
  @tracked public titlePrefix?: string;

  /**
   * The default title (when no `title` is set).
   */
  @tracked public defaultTitle?: string;

  @tracked links: Link[] = [];
  @tracked meta: Meta[] = [];

  /**
   * Returns the full title. Means when there is a `title` set it will be
   * wrapped in prefix and suffix. If there is no `title` then `defaultTitle` is
   * returned.
   */
  public get fullTitle(): string {
    if (this.title) {
      return `${this.titlePrefix} ${this.title} ${this.titleSuffix}`.trim();
    }

    return this.defaultTitle || '';
  }

  public addLink(link: Link) {
    this.links.push(link);
  }

  public addMeta(meta: Meta) {
    this.meta.push(meta);
  }

  /**
   * Reset to default contents
   */
  public reset() {
    this.title = '';
    this.links.clear();
    this.meta.clear();
  }
}
