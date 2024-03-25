import { TechDocsAddonTester } from '@backstage/plugin-techdocs-addons-test-utils';

import React from 'react';

import { TextViewer } from '../../plugin';

describe('TextViewer', () => {
  it('renders without exploding', async () => {
    const { getByText } = await TechDocsAddonTester.buildAddonsInTechDocs([
      <TextViewer />,
    ])
      .withDom(<body>TEST_CONTENT</body>)
      .renderWithEffects();

    expect(getByText('TEST_CONTENT')).toBeInTheDocument();
  });
});
