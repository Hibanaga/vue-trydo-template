<script lang="ts">
import { defineComponent } from 'vue';

import TopBar from '@/components/modules/TopBar/index.vue';

export default defineComponent({
  components: {
    TopBar,
  },
});
</script>

<template>
  <header class="header">
    <TopBar />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    height: 100vh;
    width: 100%;
    background: center center url("/header/background.jpeg");
    background-size: cover;
  }
</style>
