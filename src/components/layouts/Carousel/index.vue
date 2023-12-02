<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<template>
  <swiper
      :slides-per-view="3.9"
      :space-between="45"
      :centered-slides=true
      :loop=true
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  .swiper-wrapper {
    .swiper-slide {
      min-height: 30em;
      background-color: blue;
    }
  }
}
</style>

