<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue", "changed"]);
</script>

<template>
  <!--
    Cannot use v-model for v-textarea because that for some reason directly
    edits the underlying <textarea> which has wonky effects: textarea not
    growing correctly in Firefox and no input in Chromium browsers.
    Instead use model-value.
    
    type="text" also messes things up??? wtf is happening underneath
  -->
  <v-textarea
    :model-value="modelValue"
    @input="$emit('update:modelValue', $event.target.value); $emit('changed')"
    :label="label"
    variant="solo"
    auto-grow
    counter
    rounded="10px"
    rows="3"
    class="mytextbox"
  >
  </v-textarea>
</template>

<style scoped>
</style>