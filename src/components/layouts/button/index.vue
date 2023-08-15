<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { ButtonSizes, ButtonStyles, ButtonVariants } from '@/utils/ButtonProps';

export default defineComponent({
  name: 'LayoutButton',
  props: {
    variant: {
      type: String as PropType<ButtonVariants>,
      required: false,
      default: ButtonVariants.Contained,
    },
    size: {
      type: String as PropType<ButtonSizes>,
      required: false,
      default: ButtonSizes.Medium
    },
    style: {
      type: String as PropType<ButtonStyles>,
      required: false,
      default: ButtonStyles.Primary,
    },
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function as PropType<(e: HTMLButtonElement) => void>,
      default: () => null,
    }
  }
});
</script>

<template>
  <div :class="['layout-button', `${variant}-variant`, `${style}-style`, `${size}-size`]">
    <button class="button">
      <span class="button-content">{{ label }}</span>
    </button>
  </div>
</template>

<style lang="scss">
.layout-button {
  transition: 150ms ease-in;

  .button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 150ms ease-in;

    .button-content {
      color: #FFF;
      padding-top: .1em;
      transition: 150ms ease-in;
    }
  }

  &.contained-variant {
    border: .15em solid #fff;
    border-radius: .25em;

    &:hover {
      transform: translateY(-.25em);
    }

    &.primary-style {
      border-color: #c6c9d8;

      .button {
        .button-content {
          color: #c6c9d8;
        }
      }

      &:hover {
        border-color: #f9004d;

        .button {
          background-color: #f9004d;

          .button-content {
            color: #FFF;
          }
        }
      }
    }

    &.secondary-style {
      .button {
        .button-content {

        }
      }
    }
  }

  &.small-size {
    .button {
      padding: .25em 1em;

      .button-content {
        font-size: .85em;
      }
    }
  }

  &.medium-size {
    .button {
      padding: .5em 1.5em;

      .button-content {
        font-size: 1em;
      }
    }
  }

  &.large-size {
    .button {
      padding: 1em 2em;

      .button-content {
        font-size: 1.15em;
      }
    }
  }
}
</style>
