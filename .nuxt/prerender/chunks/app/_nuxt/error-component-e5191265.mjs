import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/roman/Develop/corly/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/roman/Develop/corly/node_modules/vue/server-renderer/index.mjs';
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
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-e148adac><section class="section-group justify-center items-center text-center" data-v-e148adac><h1 class="lg:text-8xl font-semibold text-volna text-center" data-v-e148adac>404!</h1><h2 class="text-6xl text-volna font-semibold p-2" data-v-e148adac>\u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="back" data-v-e148adac${_scopeId}><p class="text-5xl text-white p-2" data-v-e148adac${_scopeId}>\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</p></div>`);
      } else {
        return [
          createVNode("div", { class: "back" }, [
            createVNode("p", { class: "text-5xl text-white p-2" }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434")
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

export { error as default };
//# sourceMappingURL=error-component-e5191265.mjs.map
