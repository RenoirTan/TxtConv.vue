<script setup>
import { computed, ref, watch } from 'vue';
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
    rightSideStored.value = newValue;
  }
});
const rightSideStored = ref("");
const codec = ref("rot13");
const lastEditedSide = ref("left");

watch(codec, (newValue, oldValue) => {
  if (lastEditedSide.value === "left") {
    rightSide.value = convertLeftToRight(leftSide.value, newValue);
  } else if (lastEditedSide.value === "right") {
    // don't use rightSide.value because that will trigger the set function
    // which defeats the purpose
    leftSide.value = convertRightToLeft(rightSideStored.value, newValue);
  }
});
</script>

<template>
  <form id="cnv-form">
    <TextBox v-model="leftSide" @changed="lastEditedSide = 'left'" label="Original" />
    <CodecSelector v-model="codec"/>
    <TextBox v-model="rightSide" @changed="lastEditedSide = 'right'" label="Converted" />
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