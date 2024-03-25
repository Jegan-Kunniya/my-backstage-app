import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { techdocsContentRendererPlugin, TechdocsContentRendererPage } from '../src/plugin';

createDevApp()
  .registerPlugin(techdocsContentRendererPlugin)
  .addPage({
    element: <TechdocsContentRendererPage />,
    title: 'Root Page',
    path: '/techdocs-content-renderer'
  })
  .render();
