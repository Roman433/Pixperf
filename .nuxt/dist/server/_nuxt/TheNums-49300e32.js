import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center mt-12"><h3 class="text-white text-3xl p-3 lg:text-5xl">За нас говорят цифры</h3></div><section class="text-white body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -m-4 text-center"><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 500+ </h2><p class="leading-relaxed">Проектов</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 1.8K </h2><p class="leading-relaxed">Клиентов</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 3 года </h2><p class="leading-relaxed">опыта</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 12 </h2><p class="leading-relaxed"> Зарубежных<br> сайтов </p></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNums.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as _
};
//# sourceMappingURL=TheNums-49300e32.js.map
