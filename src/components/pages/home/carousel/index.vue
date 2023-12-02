<script lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from '@/components/layouts/Container/index.vue';
import LayoutCarousel from '@/components/layouts/Carousel/index.vue';

export default defineComponent({
  components: {
    LayoutContainer,
    LayoutCarousel,
  },
  setup() {
    return {}
  }
});
</script>

<template>
  <layout-container class="container">
    <div class='inner-headline'>
      <h3 class='headline'>Our Works</h3>
      <span class="subheadline">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</span>
    </div>
  </layout-container>
  <layout-carousel />
</template>

<style lang="scss" scoped>
.container {
  margin: 3em 0;

  .inner-headline {

    .headline {
      font-weight: 700;
      font-size: 3em;
      color: #1f1f25;
      margin: 0;
    }

    .subheadline {
      display: block;
      font-weight: 300;
      color: #717173;
      font-size: 1.15em;
      margin-top: 1em;
    }
  }
}
</style>
