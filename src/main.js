import App from "./App.svelte";

const app = new App({
  target: document.querySelector("#layout-app"),
  props: {
    name: "world",
  },
});

export default app;
