import { Config } from '@stencil/core';

export const config: Config = {
  testing: {
    browserHeadless: true,
    browserSlowMo: 5000,
    browserDevtools: true,
  },
  namespace: 'set-content-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
