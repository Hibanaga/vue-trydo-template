<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconGenerator',
  props: {
    children: String,
    width: {
      type: String,
      default: '1em',
      required: false,
    },
    height: {
      type: String,
      default: '1em',
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
    hover: {
      type: String,
      default: 'currentColor',
      required: false,
    }
  }
});
</script>

<template>
  <svg
      :stroke="stroke"
      :fill="fill"
      stroke-width="2"
      viewBox="0 0 24 24"
      :width="width"
      :height="height"
      xmlns="http://www.w3.org/2000/svg"
      v-html="children"
  >
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  transition: fill 0.3s;

  &:hover {
    fill: var(--hover-color, transparent);
  }
}
</style>
