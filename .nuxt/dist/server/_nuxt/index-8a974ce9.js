import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { withCtx, createVNode, createTextVNode, useSSRContext, mergeProps, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
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
const _imports_0$2 = "" + __buildAssetsURL("man.4afe2eeb.png");
const TheMain_vue_vue_type_style_index_0_scoped_d4bd24a9_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><div data-v-d4bd24a9><div class="flex overflow-x-hidden w-full home" data-v-d4bd24a9><div class="mt-16 p-2 relative z-10 w-full lg:left mt-26 lg:mt-48 lg:p-2 lg:w-1/2" data-v-d4bd24a9><div class="lg:pb-4 border text-start" data-v-d4bd24a9><h1 class="text-volna title font-semibold text-5xl lg:text-7xl pb-2" data-v-d4bd24a9> Разработка<br data-v-d4bd24a9> сайтов </h1><h2 class="text-volna text-lg lg:text-5xl title-2 p-2" data-v-d4bd24a9>для твоего бизнеса</h2><h3 class="text-white text-lg hidden lg:flex lg:text-2xl ton" data-v-d4bd24a9> Мы - студия web-разработки, работаем уже более 3-х лет,готовы разработать для вас сайт в кротчайшие сроки. </h3><h3 class="text-white text-lg lg:hidden flex" data-v-d4bd24a9> Мы web-студия которая работает уже больше 3-х лет </h3></div><div class="flex w-full items-center pt-24 lg:pt-28 justify-between" data-v-d4bd24a9>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="button button-1 lg:mb-3" data-v-d4bd24a9${_scopeId}>Подробнее &gt;</button>`);
      } else {
        return [
          createVNode("button", { class: "button button-1 lg:mb-3" }, "Подробнее >")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#form",
    class: "vop text-white button-3 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` остались вопросы `);
      } else {
        return [
          createTextVNode(" остались вопросы ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="cul right w-1/2 h-full circle" data-v-d4bd24a9><img class="w-full button-3"${ssrRenderAttr("src", _imports_0$2)} alt="man" data-v-d4bd24a9></div></div></div><div class="horizontal-line" data-v-d4bd24a9></div><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMain.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-d4bd24a9"]]);
const _imports_0$1 = "" + __buildAssetsURL("money.72750db5.png");
const TheSec_vue_vue_type_style_index_0_scoped_3623f0ab_lang = "";
const _sfc_main$3 = {
  data() {
    return {
      content: "qqqq"
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3623f0ab><div class="lg:flex bor lg:justify-between" data-v-3623f0ab><div class="withtext w-full lg:w-1/2" data-v-3623f0ab><h1 class="text-3xl text-start lg:text-start lg:text-5xl p-2 text-volna font-semibold mb-6" data-v-3623f0ab> Причины сотрудничать с нами </h1><p class="text-white p-2 par_1 text-lg mb-4" data-v-3623f0ab> Пока конкуренты говорят о том, что они лучшие - мы это доказываем<br data-v-3623f0ab> делом. </p><p class="text-white p-2 text-lg mb-4" data-v-3623f0ab> Вы можете ознакомиться с информацией о нас и посмотреть наше <br data-v-3623f0ab> портфолио </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="offset btn_port" data-v-3623f0ab${_scopeId}>портфолио</button>`);
      } else {
        return [
          createVNode("button", { class: "offset btn_port" }, "портфолио")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="tom oly text-white" data-v-3623f0ab><div class="p-3" data-v-3623f0ab><h1 class="text-4xl lg:text-5xl p-1 lg:p-5" data-v-3623f0ab> Приемлимые <br data-v-3623f0ab> цены </h1><h2 class="text-xl lg:text-2xl lg:p-5 mb-32 lg:mb-32 lg:text-start" data-v-3623f0ab> мы максимально оптимизируем <br data-v-3623f0ab> наш труд, для того, чтобы цены <br data-v-3623f0ab> были доступными </h2></div><img class="w-1/2"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-3623f0ab></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSec.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-3623f0ab"]]);
const _imports_0 = "" + __buildAssetsURL("time.34bb9ad2.png");
const _imports_1 = "" + __buildAssetsURL("boy.5492cc36.png");
const _imports_2 = "" + __buildAssetsURL("headphones.247f513f.png");
const TheThird_vue_vue_type_style_index_0_scoped_fa0d2e56_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-fa0d2e56><div class="justify-between tors flex" data-v-fa0d2e56><div class="tor lg:w-1/3 text-white" data-v-fa0d2e56><div class="lg:p-6 p-2 m-4" data-v-fa0d2e56><h1 class="text-3xl p-4 lg:text-5xl lg:p-5" data-v-fa0d2e56> в срок сдаем <br data-v-fa0d2e56> работу! </h1><h2 class="text-xl p-4 mb-24 lg:text-2xl lg:p-5 lg:mb-32 text-start" data-v-fa0d2e56> расписываем каждый этап по <br data-v-fa0d2e56> срокам, и придерживаемся <br data-v-fa0d2e56> дедлайнов </h2></div><img class="img_1"${ssrRenderAttr("src", _imports_0)} alt="" data-v-fa0d2e56></div><div class="tor w-1/3 text-white" data-v-fa0d2e56><div class="p-6" data-v-fa0d2e56><h1 class="text-3xl lg:text-5xl p-4 lg:p-5" data-v-fa0d2e56> Команда <br data-v-fa0d2e56> специалистов </h1><h2 class="text-xl lg:text-2xl p-4 lg:p-5 mb-32 text-start" data-v-fa0d2e56> В нашей команде множество <br data-v-fa0d2e56> специалистов, и каждый из них <br data-v-fa0d2e56> хорошо знает свое </h2></div><img class="img_2"${ssrRenderAttr("src", _imports_1)} alt="" data-v-fa0d2e56></div><div class="tor text-white" data-v-fa0d2e56><div class="p-6" data-v-fa0d2e56><h1 class="p-4 text-3xl lg:text-5xl lg:p-4" data-v-fa0d2e56> Консультация <br data-v-fa0d2e56> перед заказом </h1><h2 class="text-xl third_H2 lg:text-2xl p-5 mb-32 text-start" data-v-fa0d2e56> Наши менеджеры в сети 24/7, <br data-v-fa0d2e56> и готовы помочь вам, а так же <br data-v-fa0d2e56> ответить на вопросы </h2></div><img class="img_3"${ssrRenderAttr("src", _imports_2)} alt="" data-v-fa0d2e56></div></div><div class="containers" data-v-fa0d2e56><div class="vertical-line" data-v-fa0d2e56></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheThird.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-fa0d2e56"]]);
const TheTarifs_vue_vue_type_style_index_0_scoped_9bfd04e2_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-y-hidden" }, _attrs))} data-v-9bfd04e2><div class="container text-center" data-v-9bfd04e2><h1 class="text-volna text-6xl p-1 font-semibold mb-12" data-v-9bfd04e2>Тарифы</h1><div class="cards flex lg:justify-between" data-v-9bfd04e2><div class="card1 bg-lighty p-2 rounded-xl" data-v-9bfd04e2><h1 class="text-white text-3xl p-6 font-semibold" data-v-9bfd04e2>сайт &quot;Каталог&quot;</h1><p class="text-white p-6" data-v-9bfd04e2> Сайт-каталог – это полноценный <br data-v-9bfd04e2> веб-ресурс, в котором <br data-v-9bfd04e2> потребители могут ознакомиться <br data-v-9bfd04e2> с товарами или услугами <br data-v-9bfd04e2> компании. Являясь удобным <br data-v-9bfd04e2> инструментом продаж, сайт <br data-v-9bfd04e2> -каталог может повысить <br data-v-9bfd04e2> доходность бизнеса <br data-v-9bfd04e2> и упростить <br data-v-9bfd04e2> задачу по предоставлению <br data-v-9bfd04e2> ассортимента целевой <br data-v-9bfd04e2> аудитории. </p><div class="cenik justify-between flex m-4" data-v-9bfd04e2><div class="" data-v-9bfd04e2><h2 class="text-white font-bold text-xl" data-v-9bfd04e2>от 60.000$</h2><p class="text-white text-start" data-v-9bfd04e2>от 15 дней</p></div><button class="button button-1" data-v-9bfd04e2> Подробнее &gt; </button></div></div><div class="card1 bg-lighty p-2 rounded-xl" data-v-9bfd04e2><h1 class="text-white text-3xl text-center p-6 font-semibold" data-v-9bfd04e2> &quot;универсальный&quot;</h1><p class="text-white p-6" data-v-9bfd04e2> Сайт-каталог – это полноценный <br data-v-9bfd04e2> веб-ресурс, в котором <br data-v-9bfd04e2> потребители могут ознакомиться <br data-v-9bfd04e2> с товарами или услугами <br data-v-9bfd04e2> компании. Являясь удобным <br data-v-9bfd04e2> инструментом продаж, сайт <br data-v-9bfd04e2> -каталог может повысить <br data-v-9bfd04e2> доходность бизнеса <br data-v-9bfd04e2> и упростить <br data-v-9bfd04e2> задачу по предоставлению <br data-v-9bfd04e2> ассортимента целевой <br data-v-9bfd04e2> аудитории. </p><div class="cenik justify-between flex m-4" data-v-9bfd04e2><div class="" data-v-9bfd04e2><h2 class="text-white font-bold text-xl" data-v-9bfd04e2>от 60.000$</h2><p class="text-white text-start" data-v-9bfd04e2>от 15 дней</p></div><button class="button button-1" data-v-9bfd04e2> Подробнее &gt; </button></div></div><div class="card1 bg-lighty p-2 rounded-xl" data-v-9bfd04e2><h1 class="text-white text-3xl p-6 font-semibold" data-v-9bfd04e2>сайт &quot;Каталог&quot;</h1><p class="text-white p-6" data-v-9bfd04e2> Сайт-катаог – это полноценный <br data-v-9bfd04e2> веб-ресурс, в котором <br data-v-9bfd04e2> потребители могут ознакомиться <br data-v-9bfd04e2> с товарами или услугами <br data-v-9bfd04e2> компании. Являясь удобным <br data-v-9bfd04e2> инструментом продаж, сайт <br data-v-9bfd04e2> -каталог может повысить <br data-v-9bfd04e2> доходность бизнеса <br data-v-9bfd04e2> и упростить <br data-v-9bfd04e2> задачу по предоставлению <br data-v-9bfd04e2> ассортимента целевой <br data-v-9bfd04e2> аудитории. </p><div class="cenik justify-between flex m-4" data-v-9bfd04e2><div class="" data-v-9bfd04e2><h2 class="text-white font-bold text-xl" data-v-9bfd04e2>от 60.000$</h2><p class="text-white text-start" data-v-9bfd04e2>от 15 дней</p></div><button class="button button-1" data-v-9bfd04e2> Подробнее &gt; </button></div></div></div></div><div class="vertical-line" data-v-9bfd04e2></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTarifs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9bfd04e2"]]);
const index_vue_vue_type_style_index_0_scoped_f3279bc1_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheMain = __nuxt_component_0;
  const _component_TheSec = __nuxt_component_1;
  const _component_TheThird = __nuxt_component_2;
  const _component_TheTarifs = __nuxt_component_3;
  const _component_TheFlowbite = resolveComponent("TheFlowbite");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-f3279bc1><div class="container overflow-x-hidden mx-auto pt-7" data-v-f3279bc1><div class="bck" data-v-f3279bc1>`);
  _push(ssrRenderComponent(_component_TheMain, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TheSec, null, null, _parent));
  _push(ssrRenderComponent(_component_TheThird, null, null, _parent));
  _push(ssrRenderComponent(_component_TheTarifs, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFlowbite, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f3279bc1"]]);
export {
  index as default
};
//# sourceMappingURL=index-8a974ce9.js.map
