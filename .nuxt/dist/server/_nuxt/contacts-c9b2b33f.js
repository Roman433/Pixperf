import { _ as __nuxt_component_6 } from "./TheCont-0ac2f07d.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const contacts_vue_vue_type_style_index_0_scoped_16fcfe9f_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheCont = __nuxt_component_6;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mainer" }, _attrs))} data-v-16fcfe9f><div class="container mx-auto" data-v-16fcfe9f>`);
  _push(ssrRenderComponent(_component_TheCont, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-16fcfe9f"]]);
export {
  contacts as default
};
//# sourceMappingURL=contacts-c9b2b33f.js.map
