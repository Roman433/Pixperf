import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./ThePricing-f827480e.js";
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
const TheDev_vue_vue_type_style_index_0_scoped_83b3e1a9_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-83b3e1a9><section id="hero1" class="hero" data-v-83b3e1a9><div class="inner" data-v-83b3e1a9><div class="copy" data-v-83b3e1a9><h1 сlass="uppercase ha" data-v-83b3e1a9>Вы можете заказать у нас сайт</h1></div></div></section><div class="text-center mt-12" data-v-83b3e1a9><h3 class="text-white text-3xl lg:text-5xl" data-v-83b3e1a9>За нас говорят цифры</h3></div><section class="text-white body-font" data-v-83b3e1a9><div class="container px-5 py-24 mx-auto" data-v-83b3e1a9><div class="flex flex-wrap -m-4 text-center" data-v-83b3e1a9><div class="p-4 sm:w-1/4 w-1/2" data-v-83b3e1a9><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900" data-v-83b3e1a9> 500+ </h2><p class="leading-relaxed" data-v-83b3e1a9>Проектов</p></div><div class="p-4 sm:w-1/4 w-1/2" data-v-83b3e1a9><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900" data-v-83b3e1a9> 1.8K </h2><p class="leading-relaxed" data-v-83b3e1a9>Клиентов</p></div><div class="p-4 sm:w-1/4 w-1/2" data-v-83b3e1a9><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900" data-v-83b3e1a9> 3 года </h2><p class="leading-relaxed" data-v-83b3e1a9>опыта</p></div><div class="p-4 sm:w-1/4 w-1/2" data-v-83b3e1a9><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900" data-v-83b3e1a9> 12 </h2><p class="leading-relaxed" data-v-83b3e1a9> Зарубежных<br data-v-83b3e1a9> сайтов </p></div></div></div></section></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheDev.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-83b3e1a9"]]);
const _imports_0 = "" + __buildAssetsURL("table.45c697b0.png");
const TheAbout_vue_vue_type_style_index_0_scoped_50605ce5_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-50605ce5><div class="first_main mt-32" data-v-50605ce5><div class="gradient w-1/2" data-v-50605ce5><h1 class="text-white font-bold text-7xl" data-v-50605ce5>Для чего вам сайт?</h1><h2 class="text-5xl mt-4 text-volna" data-v-50605ce5>Создание сайта поможет</h2><p class="text-white text-2xl mt-3" data-v-50605ce5> расширить ваш бизнес, а также увеличит кофморт его ведения</p></div><div class="w-1/2 with_img pl-16" data-v-50605ce5><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-50605ce5></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAbout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-50605ce5"]]);
const dev_vue_vue_type_style_index_0_scoped_ebde3f33_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheDev = __nuxt_component_0;
  const _component_TheAbout = __nuxt_component_1;
  const _component_ThePricing = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-ebde3f33>`);
  _push(ssrRenderComponent(_component_TheDev, null, null, _parent));
  _push(`<div class="container mx-auto" data-v-ebde3f33>`);
  _push(ssrRenderComponent(_component_TheAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_ThePricing, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ebde3f33"]]);
export {
  dev as default
};
//# sourceMappingURL=dev-ba805798.js.map
