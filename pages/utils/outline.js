import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/utils/outline/outline.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/utils/outline/SimpleOutline.js': {
          js: require('docs/src/pages/utils/outline/SimpleOutline').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/outline/SimpleOutline'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
