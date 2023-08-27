<script lang="ts">
import { defineComponent } from 'vue';
import IconGenerator from '@/components/layouts/IconGenerator/index.vue';
import LayoutContainer from '@/components/layouts/Container/index.vue';
import LayoutLink from '@/components/layouts/Link/index.vue';
import icons from '@/assets/icons';

const tabs = [
  {
    key: 'business-stratagy',
    label: 'Business Stratagy',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    svg: icons.network,
  },
  {
    key: 'website-development',
    label: 'Website Development',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    svg: icons.layers
  },
  {
    key: 'marketing-reporting',
    label: 'Marketing & Reporting',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    svg: icons.groupPeople
  },
  {
    key: 'mobile-app',
    label: 'Mobile App Development',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    svg: icons.monitor
  },
]

export default defineComponent({
  components: {
    LayoutContainer,
    IconGenerator,
    LayoutLink,
  },
  setup() {
    return {
      tabs,
    }
  }
});
</script>

<template>
  <section class="container">
    <layout-container class="row">
      <div class='column-description'>
        <h2 class="data-headline">Services</h2>
        <span class="data-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</span>
        <layout-link label="Request Custom Service" href="/" />
      </div>

      <div class="column-nav">
        <ul class="list">
          <li class="list-element" :key="key" v-for="({ key, label, description, svg }) in tabs">
            <icon-generator class="icon" :children="svg" :size="3" :stroke-width="1.25" />
            <div class="inner-content">
              <h3 class="data-label">{{ label }}</h3>
              <span class="data-description">{{ description }}</span>
            </div>
          </li>
        </ul>
      </div>
    </layout-container>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background-image: url("/service/bg-light.jpeg");

  .row {
    display: flex;
    padding: 4em 0;

    .column-description {
      width: 40%;
      margin-top: 5em;

      .data-headline {
        font-size: 4em;
        font-weight: 700;
        color: #1f1f25;
      }

      .data-description {
        display: block;
        font-size: 1.2em;
        line-height: 150%;
        color: rgba(29, 29, 36, .75);
        margin-bottom: 1em;

        .image {

        }
      }
    }

    .column-nav {
      width: 60%;

      .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2em 2em;

        .list-element {
          padding: 2em;
          transition: all .4s ease-in-out 0s;
          border-radius: .5em;
          position: relative;
          cursor: pointer;

          &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            background-image: linear-gradient(90deg, #f61b10, #ef0963);
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            transition: all .4s ease-in-out 0s;
            border-radius: .5em;
          }

          .icon {
            transition: all .4s ease-in-out 0s;
            color: #f9004d;
          }

          .inner-content {
            margin-top: .5em;

            .data-label {
              margin-bottom: 1em;
              transition: all .4s ease-in-out 0s;
            }

            .data-description {
              transition: all .4s ease-in-out 0s;
            }
          }

          &:hover {
            transform: translateY(-.25em);
            box-shadow: 0 10px 25px 10px rgba(0, 0, 0, .1);

            &::before {
              opacity: 1;
            }

            .icon {
              color: #FFF;
            }

            .inner-content {
              .data-label {
                color: #FFF;
              }

              .data-description {
                color: #FFF;
              }
            }
          }
        }
      }
    }
  }
}
</style>
