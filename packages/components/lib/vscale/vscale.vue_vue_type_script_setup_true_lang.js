"use strict";
const vue = require("vue");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "vscale",
  props: {
    display: { default: "inline-block" },
    delay: { default: "300" },
    screenW: { default: "1536" }
  },
  setup(__props) {
    const props = __props;
    const debounce = (fn, delay) => {
      let timer = null;
      return (...rest) => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          fn.apply(this, rest);
        }, delay);
      };
    };
    let VScaleUseDebounce = null;
    const target = vue.ref();
    vue.onMounted(() => {
      let VScaleListener = () => {
        let val = window.innerWidth / parseInt(props.screenW);
        target.value.style.zoom = val;
      };
      VScaleListener();
      VScaleUseDebounce = debounce(VScaleListener, parseInt(props.delay));
      window.addEventListener("resize", VScaleUseDebounce);
    });
    vue.onUnmounted(() => {
      window.removeEventListener("resize", VScaleUseDebounce);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        style: vue.normalizeStyle("display:" + __props.display),
        ref_key: "target",
        ref: target
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
module.exports = _sfc_main;
