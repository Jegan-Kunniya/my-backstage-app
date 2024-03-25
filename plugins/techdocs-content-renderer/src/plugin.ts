import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const techdocsContentRendererPlugin = createPlugin({
  id: 'techdocs-content-renderer',
  routes: {
    root: rootRouteRef,
  },
});

export const TechdocsContentRendererPage = techdocsContentRendererPlugin.provide(
  createRoutableExtension({
    name: 'TechdocsContentRendererPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
