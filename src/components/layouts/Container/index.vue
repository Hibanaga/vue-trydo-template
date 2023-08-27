<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'LayoutContainer',
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
  setup (props, { slots }) {
    return () => h('section', { class: 'layout-container' }, slots.default && slots.default());
  },
})
</script>

<template>
  <section class="layout-container">
    {{ children }}
  </section>
</template>

<style lang="scss">
.layout-container {
  max-width: 1260px;
  margin: 0 auto;
  width: 100%;
}
</style>
