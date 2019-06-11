import { SheetsRegistry } from 'jss';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { theme } from './styleguide';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const createPageContext = () => ({
  theme,
  //RTL jss preset ... please work
  jss,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator.
  generateClassName: createGenerateClassName()
});

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  /* eslint-disable no-underscore-dangle */
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
