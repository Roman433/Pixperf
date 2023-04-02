import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/roman/Develop/corly/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}