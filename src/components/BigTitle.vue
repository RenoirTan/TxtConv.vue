<script setup>
import Icon from './Icon.vue';

</script>

<template>
  <div class="bigtitle">
    <div class="bigname">
      <Icon class="bigname-icon"/>
      <h1 class="bigtitle-items">TxtConv</h1>
    </div>
    <p class="desc bigtitle-items">Convert some text!</p>
    <p class="disclaimer bigtitle-items">IDK what I'm doing.</p>
  </div>
</template>

<style scoped>
  .bigtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 6vh;
  }

  .bigtitle-items {
    text-align: center;
    align-items: center;
    margin: auto 5px;
  }

  .bigname {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .bigname-icon {
    margin: auto 5px;
  }

  @media (min-width: 1024px) {
    .bigtitle {
      margin-top: auto;
    }
  }
</style>