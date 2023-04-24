import { useSSRContext, mergeProps } from 'file:///Users/roman/Develop/corly/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/roman/Develop/corly/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/hookable/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/unctx/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/unhead/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/h3/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/ufo/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/destr/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/scule/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/ohash/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/roman/Develop/corly/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white mt-44 bg-lighty opacity-32 rounded-lg relative" }, _attrs))}><div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"><div class="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"><div class="bg-gray relative flex flex-wrap py-6 rounded shadow-md"><div class="lg:w-1/2 px-6"><h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2><p class="mt-1">\u0413\u043E\u0440\u043E\u0434 \u0410\u043B\u043C\u0430\u0442\u044B, \u0411\u043E\u0441\u0442\u0430\u043D\u0434\u044B\u043A\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D</p></div><div class="lg:w-1/2 px-6 mt-4 lg:mt-0"><h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2><a class="text-green-400 leading-relaxed">example@email.com</a><h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2><p class="leading-relaxed">123-456-7890</p></div></div></div><div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"><h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2><p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p><div class="relative mb-4"><label for="name" class="leading-7 text-sm text-white">Name</label><input type="text" id="name" name="name" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="email" class="leading-7 text-sm text-white">Email</label><input type="email" id="email" name="email" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="message" class="leading-7 text-sm text-white">Message</label><textarea id="message" name="message" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea></div><button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheCont.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheCont = __nuxt_component_0;
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

export { contacts as default };
//# sourceMappingURL=contacts-96eeb143.mjs.map
