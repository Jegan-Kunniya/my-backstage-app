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
