<script setup>
import { ref } from 'vue';
import TextBox from './TextBox.vue';

const leftSide = ref("");
const rightSide = ref("");
</script>

<template>
  <form id="cnv-form">
    <TextBox v-model="leftSide" />
    <p>hahah</p>
    <TextBox v-model="rightSide" />
  </form>
</template>

<style scoped>
  #cnv-form {
    display: grid;
    grid-auto-flow: row;
  }

  @media (min-width: 1024px) {
    #cnv-form {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 3fr 1fr 3fr;
    }
  }
</style>