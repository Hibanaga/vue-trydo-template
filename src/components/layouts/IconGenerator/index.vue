<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconGenerator',
  props: {
    children: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 1,
      required: false,
    },
    fill: {
      type: String,
      default: 'none',
      required: false,
    },
    stroke: {
      type: String,
      default: 'currentColor',
      required: false,
    },
    strokeWidth: {
      type: Number,
      default: 1,
      required: false,
    },
    hover: {
      type: String,
      default: 'currentColor',
      required: false,
    },
  },
  computed: {
    computedSize(): string {
      return `${this.size}em`;
    },
  },
});
</script>

<template>
  <svg
      :stroke="stroke"
      :fill="fill"
      :stroke-width="strokeWidth"
      viewBox="0 0 24 24"
      :width="computedSize"
      :height="computedSize"
      xmlns="http://www.w3.org/2000/svg"
      v-html="children"
  />
</template>
