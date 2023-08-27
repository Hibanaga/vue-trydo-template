<script lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from '@/components/layouts/Container/index.vue';

export default defineComponent({
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
    <div class="column-image">
      <img src="/about.jpeg" class="image" alt="about alt image" />
    </div>
    <div class="column-content">
      <h3 class="data-headline">About</h3>
      <span class="data-description">
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form,
        by injected humour,
        or randomised words which dont look even slightly believable.
        If you are going to use a passage of Lorem Ipsum.
      </span>

      <ul class="list">
        <li class="list-element">
          <h4 class="data-label">Who we are</h4>
          <span class="data-description">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</span>
        </li>
        <li class="list-element">
          <h4 class="data-label">Who we are</h4>
          <span class="data-description">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</span>
        </li>
      </ul>
    </div>

  </layout-container>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  min-height: 85vh;
  display: flex;

  .column-image {
    width: 40%;

    .image {
      position: absolute;
      top: -20%;
      z-index: 2;
      border-radius: .25em;
      overflow: hidden;
    }
  }

  .column-content {
    width: 60%;
    margin-left: 7em;
    margin-top: 5em;

    .data-headline {
      font-weight: 700;
      font-size: 4em;
      color: #1f1f25;
    }

    .data-description {
      display: block;
      font-weight: 300;
      color: #717173;
      font-size: 1.15em;
      margin: 1.5em 0;
    }

    .list {
      display: flex;
      justify-content: space-between;
      gap: 2em;
      margin-top: 3.5em;

      .list-element {
        .data-label {
          font-weight: 500;
          font-size: 2em;
        }

        .data-description {
        }
      }
    }
  }
}
</style>
