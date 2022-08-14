import _sfc_main from "./vscale.vue_vue_type_script_setup_true_lang.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Vscale = withInstall(_sfc_main);
export {
  Vscale as default
};
