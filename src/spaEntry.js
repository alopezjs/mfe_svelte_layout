import singleSpaSvelte from "single-spa-svelte";
import myRootSvelteComponent from "./main";
const svelteLifecycles = singleSpaSvelte({
  component: myRootSvelteComponent,
  domElementGetter: () => document.getElementById("layout-app"),
  props: { someData: "data" },
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
