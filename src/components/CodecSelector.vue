<script setup>
import { computed, reactive, ref } from 'vue';

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const selected = ref("ROT13");
// displayed: underlying
const codecs = reactive({
  "ROT13": "rot13",
  "Opposite Case": "oppositeCase"
});
const codecsDisplayed = computed(() => {
  return Object.keys(codecs);
});
const onInput = (event) => {
  emit("update:modelValue", codecs[selected.value]);
}
</script>

<template>
  <div id="codec-selector">
    <v-autocomplete
      label="Choose a codec"
      :items="codecsDisplayed"
      variant="underlined"
      id="codec"
      v-model="selected"
      @update:modelValue="onInput"
      auto-select-first
    >
    </v-autocomplete>
  </div>
</template>

<style scoped>
  #codec-selector {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto auto 2em auto;
    width: 12em;
  }

  #codec-label {
    margin-right: 1em;
  }

  @media (min-width: 1024px) {
    #codec-selector {
      display: flex;
      flex-direction: column;
      margin: auto 1em;
    }

    #codec-label {
      margin: auto auto 0.5em auto;
    }
  }
</style>