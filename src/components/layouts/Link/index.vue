<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function as PropType<(e: HTMLButtonElement) => void>,
      default: () => null,
    },
    label: {
      type: String,
      required: true,
    }
  },
  computed: {},
});
</script>

<template>
  <a class="layout-link" :href="href">
    <span class="data-link">{{ label }}</span>
  </a>
</template>

<style lang="scss" scoped>
.layout-link {
  display: inline-block;
  position: relative;
  text-decoration: none;

  .data-link {
    color: #1f1f25;
    font-size: 1em;
    font-weight: 500;
    display: inline-block;
    transition: color 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 20%;
    height: 2px;
    background-color: #f9004d;
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover .data-link {
    color: #f9004d;
  }
}
</style>
