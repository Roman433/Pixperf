import { _ as _export_sfc, a as __nuxt_component_0$2 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("graphic.41bfbb7e.svg");
const _imports_1 = "" + __buildAssetsURL("body.f9ce0388.svg");
const _imports_2 = "" + __buildAssetsURL("features.c9a6db6a.svg");
const TheServMain_vue_vue_type_style_index_0_scoped_764de1df_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-2" }, _attrs))} data-v-764de1df><div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0" data-v-764de1df><div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3" data-v-764de1df><div class="borders rounded-3xl first_dev px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8" data-v-764de1df><div class="mb-12 space-y-4" data-v-764de1df><h3 class="text-xl font-semibold text-white" data-v-764de1df>Разработка</h3><p class="mb-6 text-sm text-white" data-v-764de1df> Услуги разработки сайтов включают создание веб-сайтов с нуля или модификацию существующих сайтов, чтобы соответствовать потребностям клиентов. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "dev",
    class: "block font-medium text-primary text-white underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`узнать больше`);
      } else {
        return [
          createTextVNode("узнать больше")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_0)} class="ml-auto w-2/3" alt="graphic" loading="lazy" width="900" height="600" data-v-764de1df></div><div class="border borders rounded-3xl first_dev dark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8" data-v-764de1df><div class="mb-12 space-y-4" data-v-764de1df><h3 class="text-xl font-semibold text-white" data-v-764de1df>UI / UX </h3><p class="mb-6 text-sm text-white" data-v-764de1df> Услуги UI/UX-дизайна включают проектирование интерфейса пользователя (UI) и оптимизацию пользовательского опыта (UX) на веб-сайтах, мобильных приложениях или других цифровых продуктах. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "design",
    class: "block font-medium text-white text-primary underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`узнать больше`);
      } else {
        return [
          createTextVNode("узнать больше")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_1)} class="ml-auto w-2/3" alt="illustration" loading="lazy" width="900" height="600" data-v-764de1df></div><div class="border borders rounded-3xl first_dev px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8" data-v-764de1df><div class="mb-12 space-y-4" data-v-764de1df><h3 class="text-xl font-semibold text-white" data-v-764de1df> Дизайн</h3><p class="mb-6 text-white text-sm" data-v-764de1df> Профессиональное создание визуальных решений для различных цифровых и физических продуктов, услуг и медиа-контента. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "design",
    class: "block font-medium text-white text-primary underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`узнать больше`);
      } else {
        return [
          createTextVNode("узнать больше")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_2)} class="ml-auto w-2/3" alt="illustration" loading="lazy" width="900" height="600" data-v-764de1df></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheServMain.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-764de1df"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TheServMain = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><section class="mt-32 text-center"><h1 class="text-3xl lg:text-5xl p-3 uppercase text-volna">услуги</h1></section>`);
  _push(ssrRenderComponent(_component_TheServMain, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheServ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheServ = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheServ, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  services as default
};
//# sourceMappingURL=services-96cd97d2.js.map
