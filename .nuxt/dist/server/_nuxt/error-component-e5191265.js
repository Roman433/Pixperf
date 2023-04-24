import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "vuex";
import "defu";
const TheError_vue_vue_type_style_index_0_scoped_e148adac_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-e148adac><section class="section-group justify-center items-center text-center" data-v-e148adac><h1 class="lg:text-8xl font-semibold text-volna text-center" data-v-e148adac>404!</h1><h2 class="text-6xl text-volna font-semibold p-2" data-v-e148adac>возникла ошибка</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="back" data-v-e148adac${_scopeId}><p class="text-5xl text-white p-2" data-v-e148adac${_scopeId}>вернуться назад</p></div>`);
      } else {
        return [
          createVNode("div", { class: "back" }, [
            createVNode("p", { class: "text-5xl text-white p-2" }, "вернуться назад")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheError.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e148adac"]]);
const error_vue_vue_type_style_index_0_scoped_a8d3e1a1_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheError = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))} data-v-a8d3e1a1><div class="section-one" data-v-a8d3e1a1>`);
  _push(ssrRenderComponent(_component_TheError, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a8d3e1a1"]]);
export {
  error as default
};
//# sourceMappingURL=error-component-e5191265.js.map
