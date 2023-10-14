import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center mt-12"><h3 class="text-white text-3xl p-3 lg:text-5xl">\u0417\u0430 \u043D\u0430\u0441 \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0446\u0438\u0444\u0440\u044B</h3></div><section class="text-white body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -m-4 text-center"><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 500+ </h2><p class="leading-relaxed">\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 1.8K </h2><p class="leading-relaxed">\u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 3 \u0433\u043E\u0434\u0430 </h2><p class="leading-relaxed">\u043E\u043F\u044B\u0442\u0430</p></div><div class="p-4 sm:w-1/4 w-1/2"><h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"> 12 </h2><p class="leading-relaxed"> \u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445<br> \u0441\u0430\u0439\u0442\u043E\u0432 </p></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNums.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=TheNums-49300e32.mjs.map
