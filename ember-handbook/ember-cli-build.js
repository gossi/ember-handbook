'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const deflate = require('markdown-it-plantuml/lib/deflate');
const walkSync = require('walk-sync');

const PLANTUML_SKIN = `
skinparam defaultFontName Segoe UI

skinparam class {
	BackgroundColor #F8FAFF
	ArrowColor #395383
	BorderColor #395383
}

skinparam rectangle {
	BackgroundColor #F8FAFF
	ArrowColor #395383
	BorderColor #395383
}
`;

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    snippetPaths: ['app', 'snippets', '../resources/addon'],
    snippetSearchPaths: ['app'],

    // babel: {
    //   sourceMaps: 'inline'
    // },

    'markdown-it-templates': {
      options: {
        linkify: true,
        html: true,
        typographer: true
      },
      plugins: [
        'markdown-it-abbr',
        'markdown-it-anchor',
        'markdown-it-deflist',
        'markdown-it-ember',
        'markdown-it-emoji',
        [
          'markdown-it-highlightjs',
          { inline: true }
        ],
        'markdown-it-ins',
        'markdown-it-mark',
        [
          'markdown-it-plantuml',
          {
            openMarker: '```plantuml',
            closeMarker: '```',
            generateSource(umlCode, pluginOptions) {
              const diagramName = pluginOptions.diagramName || 'uml';
              const server =
                pluginOptions.server ||
                // 'http://localhost:32768' ||
                'https://www.plantuml.com/plantuml';
              const zippedCode = deflate.encode64(
                deflate.zip_deflate(
                  unescape(
                    encodeURIComponent(
                      `@start${diagramName}${PLANTUML_SKIN}${umlCode}\n@end${diagramName}`
                    )
                  ),
                  9
                )
              );

              return `${server}/svg/${zippedCode}`;
            },
            render(tokens, idx, options, environment, slf) {
              // suggested solution
              // fetch while build is running and place svg right into the
              // template
              // https://github.com/markdown-it/markdown-it/blob/master/docs/development.md#i-need-async-rule-how-to-do-it
              // -> at least for prod builds, dev builds might be good with the
              // solution below:

              // diagram as component (fetching svg on-the-fly)
              const attribute = tokens[idx].attrs.find(entry => {
                return entry[0] === 'src';
              });
              return `<Diagram @src="${attribute[1]}"/>`;

              // Diagram as <img>
              // const img = slf.rules.image(
              //   tokens,
              //   idx,
              //   options,
              //   environment,
              //   slf
              // );
              // return `<figure>${img}</figure>`;
            }
          }
        ],
        'markdown-it-sub',
        'markdown-it-sup'
      ],
      format(content) {
        let body = content.html;
        let footer = '';
        if (content.html.includes('<h2 id="references">')) {
          const index = content.html.indexOf('<h2 id="references">');
          body = content.html.slice(0, Math.max(0, index));
          footer = content.html.slice(Math.max(0, index));
        }

        return `
        <Article @data="${encodeURIComponent(
          JSON.stringify(content.attributes)
        )}" @toc="${encodeURIComponent(JSON.stringify(content.toc))}" as |art|>
          <art.Header/>
          <art.Body>
            ${body}
          </art.Body>
          ${footer ? `<art.Footer>${footer}</art.Footer>` : ''}
        </Article>
        `;
      }
    },

    prember: {
      urls() {
        const routes = walkSync('app', {
          ignore: ['application', 'components', 'templates', 'styles']
        });
        const urls = ['/'];

        for (const file of routes) {
          if (file.endsWith('/') && !file.endsWith('index/')) {
            urls.push(`/${file}`);
          }
        }

        console.log(urls);

        return urls;
      }
    }
  });

  // app.import('node_modules/highlight.js/styles/zenburn.css');

  app.import('node_modules/highlight.js/styles/atom-one-dark.css');

  return app.toTree();
  // const { Webpack } = require('@embroider/webpack');
  // return require('@embroider/compat').compatBuild(app, Webpack);
};
