<script setup>
import { computed, ref } from 'vue';
import TextBox from './TextBox.vue';
import CodecSelector from './CodecSelector.vue';
import { convertLeftToRight, convertRightToLeft } from '../converters';

const leftSide = ref("");
const rightSide = computed({
  get() {
    return convertLeftToRight(leftSide.value, codec.value);
  },
  set(newValue) {
    leftSide.value = convertRightToLeft(newValue, codec.value);
  }
});
const codec = ref("rot13");
const lastEditedSide = ref("left");
</script>

<template>
  <form id="cnv-form">
    <TextBox v-model="leftSide" @changed="lastEditedSide = 'left'" />
    <CodecSelector v-model="codec"/>
    <TextBox v-model="rightSide" @changed="lastEditedSide = 'right'" />
  </form>
  <p>sideUpdated: {{ lastEditedSide }}</p>
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