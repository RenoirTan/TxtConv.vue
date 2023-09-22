<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue", "changed"]);
</script>

<template>
  <v-textarea
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value); $emit('changed')"
    :label="label"
    variant="default"
    auto-grow
    class="mytextbox"
  >
  </v-textarea>
</template>

<style scoped>
.mytextbox {
  padding: 0;
  border-bottom: 2px solid green;
}
</style>