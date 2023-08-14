<script lang="ts">
import Routes from '@/utils/routes';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'TopBar',
    setup() {
      const route = useRoute();

      const nav = [
        {
          key: 'home',
          label: "Home",
          href: Routes.Home,
          elements: [
            { key: 'lorem', label: "Lorem", href: Routes.Home },
            { key: 'lorem-ipsum', label: "Lorem Ipsum", href: Routes.Home },
            { key: 'ipsum', label: "Ipsum", href: Routes.Home },
          ]
        },
        {
          key: "service",
          label: "Service",
          href: Routes.Service,
          elements: [
            { key: 'service', label: "Service", href: Routes.Service },
            { key: 'service-details', label: "Service Details", href: Routes.Service },
          ]
        },
        {
          key: 'about',
          label: "About",
          href: Routes.About,
        },
        {
          key: "pages",
          label: "Pages",
          href: Routes.Pages,
          elements: [
            { key: "blog-list", label: "Blog List", href: Routes.Pages },
            { key: "blog-details", label: "Blog Details", href: Routes.Pages },
            { key: "service", label: "Service", href: Routes.Pages },
            { key: "service-details", label: "Service Details", href: Routes.Pages },
            { key: "portfolio", label: "Portfolio", href: Routes.Pages },
            { key: "portfolio-details", label: "Portfolio Details", href: Routes.Pages },
          ]
        },
        {
          key: "blocks",
          label: "Blocks",
          href: Routes.Blocks,
          elements: [
            { key: "portfolio", label: "Portfolio", href: Routes.Blocks },
            { key: "team", label: "Team", href: Routes.Blocks },
            { key: "service", label: "Service", href: Routes.Blocks }
          ]
        },
        {
          key: "contact",
          label: "Contact",
          href: Routes.Contact,
        }
      ]

      return {
        Routes,
        route,
        nav,
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
                <span class="data-value">{{element.label}}</span>
              </router-link>

              <ul class="list-sub-menu" v-if="element.elements">
                <li v-bind:key="subElement.key" v-for="(subElement) in element.elements" class="list-sub-element">
                  <router-link :to="subElement.href" class="data-sub-link">
                    <span class="data-value">{{subElement.label}}</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 10em;

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
            min-width: 14em;
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
                  background-color: rgba(249,0,77,.07);

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
