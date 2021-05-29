import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@demo/mf-authentication',
  app: () => System.import('@demo/mf-authentication'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
