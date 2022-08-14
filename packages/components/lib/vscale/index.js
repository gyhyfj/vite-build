"use strict";
const vscale_vue_vue_type_script_setup_true_lang = require("./vscale.vue_vue_type_script_setup_true_lang.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Vscale = withInstall(vscale_vue_vue_type_script_setup_true_lang);
module.exports = Vscale;
