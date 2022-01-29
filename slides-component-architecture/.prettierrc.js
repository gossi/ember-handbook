'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: ['*.md', '*.hbs'],
      options: {
        singleQuote: false
      }
    }
  ]
};
