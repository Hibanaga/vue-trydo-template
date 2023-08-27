<script lang="ts">
import { defineComponent } from 'vue';

import LayoutContainer from '@/components/layouts/Container/index.vue';

export default defineComponent({
  name: 'HomeCarousel',
  components: {
    LayoutContainer,
  },
  setup() {
    return {}
  }
});
</script>
<template>
  <layout-container class="container">
    <h1>title</h1>
  </layout-container>
</template>
<style lang="scss" scoped>
.container {
  padding: 5em 0;
}
</style>
