import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

if (__SNOWPACK_ENV__.MODE === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
}
