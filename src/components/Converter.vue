<script setup>
import { computed, ref } from 'vue';
import TextBox from './TextBox.vue';
import CodecSelector from './CodecSelector.vue';
import { rot13Encode } from '../converters/rot13';

const leftSide = ref("");
const rightSide = ref("");
const result = computed(() => {
  return rot13Encode(leftSide.value);
})
const codec = ref("");
</script>

<template>
  <form id="cnv-form">
    <TextBox v-model="leftSide" />
    <CodecSelector v-model="codec"/>
    <TextBox v-model="rightSide" />
  </form>
  <div>
    <p>Left Side: {{ leftSide }}</p>
    <p>Right Side: {{ rightSide }}</p>
    <p>Codec: {{ codec }}</p>
    <p>Result: {{ result }}</p>
  </div>
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