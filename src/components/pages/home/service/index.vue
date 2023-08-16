<script lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from '@/components/layouts/container/index.vue';

const tabs = [
  {
    key: 'business-stratagy',
    label: 'Business Stratagy',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    imageUrl: '/service/network.svg'
  },
  {
    key: 'website-development',
    label: 'Website Development',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    imageUrl: '/service/layers.svg'
  },
  {
    key: 'marketing-reporting',
    label: 'Marketing & Reporting',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    imageUrl: '/service/society.svg'
  },
  {
    key: 'mobile-app',
    label: 'Mobile App Development',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    imageUrl: '/service/computer.svg'
  },
]

export default defineComponent({
  components: {
    LayoutContainer,
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
      </div>

      <div class="column-nav">
        <ul class="list">
          <li class="list-element" :key="key" v-for="({ key, label, description, imageUrl }) in tabs">
            <img :src="imageUrl" class="image" :alt="label" />
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

      .data-headline {

      }

      .data-description {
        .image {

        }
      }
    }

    .column-nav {
      width: 60%;

      .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .list-element {
          .image {
          }

          .inner-content {
            .data-label {
            }

            .data-description {
            }
          }
        }
      }
    }
  }
}
</style>
