import { defineComponent, ref, onMounted, onUnmounted, openBlock, createElementBlock, normalizeStyle, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const target = ref();
    onMounted(() => {
      let VScaleListener = () => {
        let val = window.innerWidth / parseInt(props.screenW);
        target.value.style.zoom = val;
      };
      VScaleListener();
      VScaleUseDebounce = debounce(VScaleListener, parseInt(props.delay));
      window.addEventListener("resize", VScaleUseDebounce);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", VScaleUseDebounce);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle("display:" + __props.display),
        ref_key: "target",
        ref: target
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
