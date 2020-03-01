import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig} from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target'

//Write it manually, but later use the docs.readme.json to generate
const angularValueAccessorBindings: ValueAccessorConfig[] = [

]

export const config: Config = {
  namespace: 'refactor-tech-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      /* 
        The name of your package when someone wants to install it
        ex: 'npm i @rt/angular'
      */
      componentCorePackage: '@rt/angular',

      /* 
       The folder that the generated components are added to.
      */
      directivesProxyFile: './src/components-angular',
      valueAccessorConfigs: angularValueAccessorBindings
    }),

    reactOutputTarget({
      componentCorePackage: '@rt/react',
      proxiesFile: './src/components-react'
    })
  ]
};
