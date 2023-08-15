<script lang="ts">
import { defineComponent } from 'vue';

import LayoutButton from '@/components/layouts/button/index.vue';
import navigation from '@/assets/navigation';
import { ButtonSizes, ButtonStyles } from '@/utils/ButtonProps';
import Routes from '@/utils/routes';

export default defineComponent({
  name: 'TopBar',
  components: {
    LayoutButton,
  },
  setup() {
    return {
      Routes,
      nav: navigation,
      ButtonSizes,
      ButtonStyles,
    }
  }
});
</script>

<template>
  <nav class="container">
    <div class="row">
      <div class="column-logo">
        <router-link :to="Routes.Home">
          <img src="/header/logo.svg" class="image" alt="logo alt image" />
        </router-link>
      </div>
      <div class="column-nav">
        <ul class="nav-list">
          <li v-bind:key="element.key" v-for="(element) in nav" class="list-element">
            <router-link :to="element.href" class="data-link">
              <span class="data-value">{{ element.label }}</span>
            </router-link>

            <ul class="list-sub-menu" v-if="element.elements">
              <li v-bind:key="subElement.key" v-for="(subElement) in element.elements" class="list-sub-element">
                <router-link :to="subElement.href" class="data-sub-link">
                  <span class="data-value">{{ subElement.label }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <layout-button label="BUY NOW" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 10em;
  position: relative;

  .row {
    height: 100%;
    max-width: 1820px;
    margin: 0 auto;
    padding: 3em 0;

    display: flex;
    justify-content: space-between;

    .column-logo {
      display: flex;
      align-items: center;
    }

    .column-nav {
      height: 100%;
      display: flex;
      align-items: center;

      .nav-list {
        height: 100%;

        display: flex;
        align-items: center;

        .list-element {
          position: relative;
          margin-right: 1.25em;

          .list-sub-menu {
            position: absolute;
            left: 0;
            top: 100%;
            width: 10em;
            background-color: #FFF;
            padding: .75em;
            border-radius: .25em;
            opacity: 0;
            pointer-events: none;
            transition: 150ms ease-in-out;

            .list-sub-element {
              width: 100%;
              margin-top: .25em;

              .data-sub-link {
                padding: .25em;
                width: 100%;
                display: block;
                text-decoration: none;
                transition: 150ms ease-in;
                border-radius: .25em;

                &:hover {
                  background-color: rgba(249, 0, 77, .07);

                  .data-value {
                    color: #f9004d;
                  }
                }

                .data-value {
                  color: #1f1f25;
                  font-weight: 500;
                  transition: 150ms ease-in;
                }
              }
            }
          }

          .data-link {
            height: 100%;
            display: block;
            padding: 1.5em .5em;
            text-decoration: none;
            transition: 150ms ease-in;

            &:hover {
              .data-value {
                color: #f9004d;
              }
            }

            .data-value {
              color: #c6c9d8;
              font-weight: 500;
              transition: 150ms ease-in;
            }
          }

          &:hover {
            .list-sub-menu {
              pointer-events: initial;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
