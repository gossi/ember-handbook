import { action } from '@ember/object';
import Component from '@glimmer/component';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Reveal from 'reveal.js';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import RevealMenu from 'reveal.js-menu/menu';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import RevealChalkboard from 'reveal.js-plugins/chalkboard';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Highlight from 'reveal.js/plugin/highlight/highlight.js';

import RevealAttribution from './-plugins/attribution/plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeckArgs {}

export default class DeckComponent extends Component<DeckArgs> {
  @action
  setup(element: HTMLElement): void {
    const deck = new Reveal(element);
    deck.initialize({
      slideNumber: false,
      hash: true,
      hashOneBasedIndex: true,

      // plugins: [Markdown, RevealMenu, RevealChalkboard],
      plugins: [Markdown, Highlight, RevealAttribution],
      menu: {
        path: '/reveal.js-menu',
        // Specifies which side of the presentation the menu will
        // be shown. Use 'left' or 'right'.
        side: 'right',

        // Specifies the width of the menu.
        // Can be one of the following:
        // 'normal', 'wide', 'third', 'half', 'full', or
        // any valid css length value
        width: 'wide',

        // Add slide numbers to the titles in the slide list.
        // Use 'true' or format string (same as reveal.js slide numbers)
        numbers: false,

        // Specifies which slide elements will be used for generating
        // the slide titles in the menu. The default selects the first
        // heading element found in the slide, but you can specify any
        // valid css selector and the text from the first matching
        // element will be used.
        // Note: that a section data-menu-title attribute or an element
        // with a menu-title class will take precedence over this option
        titleSelector: 'h1, h2, h3, h4, h5, h6',

        // If slides do not have a matching title, attempt to use the
        // start of the text content as the title instead
        useTextContentForMissingTitles: false,

        // Hide slides from the menu that do not have a title.
        // Set to 'true' to only list slides with titles.
        hideMissingTitles: false,

        // Adds markers to the slide titles to indicate the
        // progress through the presentation. Set to 'false'
        // to hide the markers.
        markers: true,

        // Specify custom panels to be included in the menu, by
        // providing an array of objects with 'title', 'icon'
        // properties, and either a 'src' or 'content' property.
        custom: false,

        // Specifies the themes that will be available in the themes
        // menu panel. Set to 'true' to show the themes menu panel
        // with the default themes list. Alternatively, provide an
        // array to specify the themes to make available in the
        // themes menu panel, for example...
        //
        // [
        //     { name: 'Black', theme: 'dist/theme/black.css' },
        //     { name: 'White', theme: 'dist/theme/white.css' },
        //     { name: 'League', theme: 'dist/theme/league.css' },
        //     {
        //       name: 'Dark',
        //       theme: 'lib/reveal.js/dist/theme/black.css',
        //       highlightTheme: 'lib/reveal.js/plugin/highlight/monokai.css'
        //     },
        //     {
        //       name: 'Code: Zenburn',
        //       highlightTheme: 'lib/reveal.js/plugin/highlight/zenburn.css'
        //     }
        // ]
        //
        // Note: specifying highlightTheme without a theme will
        // change the code highlight theme while leaving the
        // presentation theme unchanged.
        themes: false,

        // Specifies the path to the default theme files. If your
        // presentation uses a different path to the standard reveal
        // layout then you need to provide this option, but only
        // when 'themes' is set to 'true'. If you provide your own
        // list of themes or 'themes' is set to 'false' the
        // 'themesPath' option is ignored.
        themesPath: 'dist/theme/',

        // Specifies if the transitions menu panel will be shown.
        // Set to 'true' to show the transitions menu panel with
        // the default transitions list. Alternatively, provide an
        // array to specify the transitions to make available in
        // the transitions panel, for example...
        // ['None', 'Fade', 'Slide']
        transitions: false,

        // Adds a menu button to the slides to open the menu panel.
        // Set to 'false' to hide the button.
        openButton: false,

        // If 'true' allows the slide number in the presentation to
        // open the menu panel. The reveal.js slideNumber option must
        // be displayed for this to take effect
        openSlideNumber: true,

        // If true allows the user to open and navigate the menu using
        // the keyboard. Standard keyboard interaction with reveal
        // will be disabled while the menu is open.
        keyboard: true,

        // Normally the menu will close on user actions such as
        // selecting a menu item, or clicking the presentation area.
        // If 'true', the sticky option will leave the menu open
        // until it is explicitly closed, that is, using the close
        // button or pressing the ESC or m key (when the keyboard
        // interaction option is enabled).
        sticky: false,

        // If 'true' standard menu items will be automatically opened
        // when navigating using the keyboard. Note: this only takes
        // effect when both the 'keyboard' and 'sticky' options are enabled.
        autoOpen: true,

        // If 'true' the menu will not be created until it is explicitly
        // requested by calling RevealMenu.init(). Note this will delay
        // the creation of all menu panels, including custom panels, and
        // the menu button.
        delayInit: false,

        // If 'true' the menu will be shown when the menu is initialised.
        openOnInit: false,

        // By default the menu will load it's own font-awesome library
        // icons. If your presentation needs to load a different
        // font-awesome library the 'loadIcons' option can be set to false
        // and the menu will not attempt to load the font-awesome library.
        loadIcons: true
      },
      chalkboard: {
        readOnly: false,
        toggleNotesButton: false,
        toggleChalkboardButton: false,
        grid: false
      }
    });

    // deck.on('slidechanged', (event: { currentSlide: HTMLElement }) => {
    //   this.section = findData('section', event.currentSlide);
    //   this.subsection = findData('subsection', event.currentSlide);

    //   if (!this.subsection) {
    //     const heading = event.currentSlide.querySelector('h3');
    //     this.subsection = heading?.textContent as string;
    //   }
    // });

    // deck.on('overviewshown', () => {
    //   this.deck.overview = true;
    // });
    // deck.on('overviewhidden', () => {
    //   this.deck.overview = false;
    // });

    // this.deck.running = true;
  }
}
