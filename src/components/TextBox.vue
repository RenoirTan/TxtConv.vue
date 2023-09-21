<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue", "changed"]);
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value); $emit('changed')"
  />
</template>