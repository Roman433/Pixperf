import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("portfolio_1.7847ffa0.png");
const _imports_1 = "" + __buildAssetsURL("portfolio_2.1baef46f.svg");
const _imports_2 = "" + __buildAssetsURL("portfolio_3.d5973c19.svg");
const _imports_3 = "" + __buildAssetsURL("portfolio_4.332c75e7.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="text-gray-400 bg-gray-900 body-font mt-12"><div class="container px-5 py-24 mx-auto"><div class="flex flex-col text-center w-full mb-20"><h1 class="sm:text-8xl text-2xl text-volna font-medium title-font mb-4 text-white"> Портфолио </h1></div><div class="flex flex-wrap -m-4"><div class="lg:w-1/3 sm:w-1/2 p-4"><div class="flex relative"><img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_0)}><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"><h2 class="tracking-widest text-sm title-font font-medium text-green-400 mb-1"> THE SUBTITLE </h2><h1 class="title-font text-lg font-medium text-white mb-3"> Shooting Stars </h1><p class="leading-relaxed"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p></div></div></div><div class="lg:w-1/3 sm:w-1/2 p-4"><div class="flex relative"><img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_1)}><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"><h2 class="tracking-widest text-sm title-font font-medium text-green-400 mb-1"> THE SUBTITLE </h2><h1 class="title-font text-lg font-medium text-white mb-3"> The Catalyzer </h1><p class="leading-relaxed"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p></div></div></div><div class="lg:w-1/3 sm:w-1/2 p-4"><div class="flex relative"><img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_2)}><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"><h2 class="tracking-widest text-sm title-font font-medium text-green-400 mb-1"> THE SUBTITLE </h2><h1 class="title-font text-lg font-medium text-white mb-3"> The 400 Blows </h1><p class="leading-relaxed"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p></div></div></div><div class="lg:w-1/3 sm:w-1/2 p-4"><div class="flex relative"><img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_3)}><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"><h2 class="tracking-widest text-sm title-font font-medium text-green-400 mb-1"> THE SUBTITLE </h2><h1 class="title-font text-lg font-medium text-white mb-3"> Neptune </h1><p class="leading-relaxed"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=TheGallery-f0a00b9a.js.map
