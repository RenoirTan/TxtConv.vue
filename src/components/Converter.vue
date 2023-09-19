<script setup>
import { computed, ref } from 'vue';
import TextBox from './TextBox.vue';
import CodecSelector from './CodecSelector.vue';
import { rot13Decode, rot13Encode } from '../converters/rot13';
import { oppositeCaseDecode, oppositeCaseEncode } from '../converters/oppositeCase';

const leftSide = ref("");
const rightSide = computed({
  get() {
    if (codec.value === "rot13") {
      return rot13Encode(leftSide.value);
    } else if (codec.value === "oppositeCase") {
      return oppositeCaseEncode(leftSide.value);
    } else {
      return leftSide.value;
    }
  },
  set(newValue) {
    if (codec.value === "rot13") {
      leftSide.value = rot13Decode(newValue);
    } else if (codec.value === "oppositeCase") {
      return oppositeCaseDecode(newValue);
    } else {
      leftSide.value = newValue;
    }
  }
});
const codec = ref("rot13");
</script>

<template>
  <form id="cnv-form">
    <TextBox v-model="leftSide" />
    <CodecSelector v-model="codec"/>
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