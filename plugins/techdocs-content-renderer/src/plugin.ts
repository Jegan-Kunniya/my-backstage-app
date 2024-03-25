import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react';
import { rootRouteRef } from './routes';
import { TextSizeAddon } from './components/TextSize/TextSize';
import { TextViewerAddon } from './components/TextViewer';

export const techdocsContentRendererPlugin = createPlugin({
  id: 'techdocs-content-renderer',
  routes: {
    root: rootRouteRef,
  },
});

export const TechdocsContentRendererPage =
  techdocsContentRendererPlugin.provide(
    createRoutableExtension({
      name: 'TechdocsContentRendererPage',
      component: () =>
        import('./components/ExampleComponent').then(m => m.ExampleComponent),
      mountPoint: rootRouteRef,
    }),
  );

export const TextSize = techdocsContentRendererPlugin.provide(
  createTechDocsAddonExtension({
    name: 'TextSize',
    location: TechDocsAddonLocations.Settings,
    component: TextSizeAddon,
  }),
);

export const TextViewer = techdocsContentRendererPlugin.provide(
  createTechDocsAddonExtension({
    name: 'TextViewer',
    location: TechDocsAddonLocations.Content,
    component: TextViewerAddon,
  }),
);
