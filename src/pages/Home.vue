<script lang="ts">

import { defineComponent } from 'vue';

import HomeHeader from '@/components/pages/home/header/index.vue'
import HomeAbout from '@/components/pages/home/about/index.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeAbout
  }
})
</script>

<template>
  <main>
    <home-header />
    <home-about />
  </main>
</template>
