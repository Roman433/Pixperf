import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
import "defu";
const _imports_0$1 = "" + __buildAssetsURL("nods.ce3059a2.png");
const TheAboutTri_vue_vue_type_style_index_0_scoped_06fb936f_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-06fb936f><div class="first_main mt-32" data-v-06fb936f><div class="w-1/2 with_img pl-16" data-v-06fb936f><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-06fb936f></div><div class="gradient w-1/2" data-v-06fb936f><h1 class="text-white font-semibold text-7xl" data-v-06fb936f>Почему именно мы?</h1><h2 class="text-5xl mt-4 text-volna" data-v-06fb936f>большинство клиентов </h2><p class="text-white text-2xl mt-3" data-v-06fb936f> довольны качествам, скоростью а также отзывчивостью и гибкостью сотрдуников</p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAboutTri.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-06fb936f"]]);
const TheAccordion_vue_vue_type_style_index_0_scoped_882bffc4_lang = "";
const _sfc_main$2 = {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Сколько времени уходит на созданиие сайта?",
          content: "обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности",
          open: false
        },
        {
          id: 2,
          title: "Сколько времени уходит на созданиие сайта?",
          content: "обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности",
          open: false
        },
        {
          id: 3,
          title: "Сколько времени уходит на созданиие сайта?",
          content: "обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности",
          open: false
        }
      ]
    };
  },
  methods: {
    toggleAccordion(id) {
      this.items = this.items.map((item) => {
        if (item.id === id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-882bffc4><!--[-->`);
  ssrRenderList($data.items, (item) => {
    _push(`<div class="m-2 text-white justify-between w-full" data-v-882bffc4><div class="title_svg w-full flex items-center" data-v-882bffc4><div class="svg_one p-4" data-v-882bffc4><div class="${ssrRenderClass({ "active": item.open })}" data-v-882bffc4><svg class="svg" width="32" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-882bffc4><path d="M25.5 13.4019C27.5 14.5566 27.5 17.4434 25.5 18.5981L4.5 30.7224C2.5 31.8771 -1.50515e-06 30.4338 -1.4042e-06 28.1244L-3.44255e-07 3.87564C-2.43308e-07 1.56624 2.5 0.122865 4.5 1.27757L25.5 13.4019Z" fill="#1EEBCD" data-v-882bffc4></path></svg></div></div><h1 class="" data-v-882bffc4>${ssrInterpolate(item.title)}</h1></div>`);
    if (item.open) {
      _push(`<p class="${ssrRenderClass([{ "active-text": item.open }, "inactive-text m-1 text-3xl"])}" data-v-882bffc4>${ssrInterpolate(item.content)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAccordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-882bffc4"]]);
const _imports_0 = "" + __buildAssetsURL("avatar.7cb5f1b7.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-400 bg-gray-900 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="flex flex-col text-center w-full mb-20"><h1 class="text-3xl lg:text-6xl font-semibold title-font mb-4 text-white tracking-widest">НАША КОМАНДА</h1></div><div class="flex flex-wrap -m-4"><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"${ssrRenderAttr("src", _imports_0)}><div class="flex-grow sm:pl-8"><h2 class="title-font font-semibold text-2xl lg:text-4xl text-white">Роман</h2><h3 class="text-volna font-semibold text-lg lg:text-xl mb-3">Fullstack developer</h3><p class="mb-4 text-white text-xl">Программирование - это искусство создания красоты из хаоса</p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"${ssrRenderAttr("src", _imports_0)}><div class="flex-grow sm:pl-8"><h2 class="title-font font-semibold text-2xl lg:text-4xl text-white">Илияс</h2><h3 class="text-volna font-semibold text-lg lg:text-xl mb-3">Designer/ UX UI</h3><p class="mb-4 text-white text-lg">Дизайн - это то, как мы выражаем себя, кем мы являемся и какие идеи воплощаем в реальность</p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const about_vue_vue_type_style_index_0_scoped_ab1fb697_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheAboutTri = __nuxt_component_0;
  const _component_TheAccordion = __nuxt_component_1;
  const _component_TheTeam = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainer" }, _attrs))} data-v-ab1fb697><div class="container mx-auto" data-v-ab1fb697><div class="" data-v-ab1fb697></div>`);
  _push(ssrRenderComponent(_component_TheAboutTri, null, null, _parent));
  _push(`<div class="" data-v-ab1fb697>`);
  _push(ssrRenderComponent(_component_TheAccordion, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TheTeam, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab1fb697"]]);
export {
  about as default
};
//# sourceMappingURL=about-d4b18821.js.map
