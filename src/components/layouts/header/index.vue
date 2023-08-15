<script lang="ts">
import { defineComponent } from 'vue';

import TopBar from '@/components/modules/TopBar/index.vue';
import LayoutContainer from '@/components/layouts/container/index.vue';

const descriptions = [
  {
    key: 'bussiness-strategy',
    label: 'Business Stratagy',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    icon: '/header/star-tab.svg'
  },
  {
    key: 'website-development',
    label: 'Website Development',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    icon: '/header/cube.svg'
  },
  {
    key: 'marketing-reporting',
    label: 'Marketing & Reporting',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    icon: '/header/mouse.svg'
  },
]

export default defineComponent({
  components: {
    TopBar,
    LayoutContainer,
  },
  setup() {
    return {
      descriptions
    }
  }
});
</script>

<template>
  <header class="header">
    <TopBar />

    <layout-container>
      <h1 class="headline">
        A digital
        <br />
        agency.
      </h1>

      <ul v-if="descriptions.length" class="list">
        <li :key="key" class="list-element" v-for="({ key, icon, label, description }) in descriptions">
          <img :src="icon" class="image" :alt="label" />
          <div class='content-inner'>
            <h2 class="data-label">{{ label }}</h2>
            <span class="data-description">{{ description }}</span>
          </div>
        </li>
      </ul>
    </layout-container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-color: #000;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: center center url("/header/background.jpeg");
    opacity: .3;
  }

  .layout-container {
    .headline {
      position: relative;
      display: inline-block;
      z-index: 1;
      font-size: 8em;
      font-weight: 900;
      letter-spacing: .04em;
      text-transform: uppercase;
      margin-top: .9em;
      line-height: 1.1em;
      background: linear-gradient(145deg, #f81f01, #ee076e);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      &:before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        color: #fff;
      }
    }

    .list {
      margin: 7em 0 0 0;
      padding-bottom: 15em;
      display: flex;
      position: relative;
      gap: 3em;

      .list-element {
        .image {
          margin-bottom: 2em;
        }

        .content-inner {
          .data-label {
            display: block;
            color: #c6c9d8;
            margin-bottom: 1em;
            font-size: 1.5em;
          }

          .data-description {
            display: block;
            font-size: 1.15em;
            color: rgba(198, 201, 216, 0.75);
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
