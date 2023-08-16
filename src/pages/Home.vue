<script lang="ts">

import { defineComponent } from 'vue';

import HomeHeader from '@/components/pages/home/header/index.vue';
import HomeAbout from '@/components/pages/home/about/index.vue';
import HomeService from '@/components/pages/home/service/index.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeAbout,
    HomeService
  }
})
</script>

<template>
  <main>
    <home-header />
    <home-about />
    <home-service />
  </main>
</template>
