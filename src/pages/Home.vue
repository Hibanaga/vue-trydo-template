<script lang="ts">

import { defineComponent } from 'vue';

import HomeHeader from '@/components/pages/home/header/index.vue';
import HomeAbout from '@/components/pages/home/about/index.vue';
import HomeService from '@/components/pages/home/service/index.vue';
import HomeCarousel from '@/components/pages/home/carousel/index.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeAbout,
    HomeService,
    HomeCarousel,
  }
})
</script>

<template>
  <main>
    <home-header />
    <home-about />
    <home-service />
    <home-carousel />
  </main>
</template>
