<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div id="codec-selector">
    <label for="codec" id="codec-label">Choose a codec</label>
    <select
      name="codec"
      id="codec"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option value="rot13">ROT13</option>
      <option value="oppositeCase">Opposite Case</option>
    </select>
  </div>
</template>

<style scoped>
  #codec-selector {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto auto 2em auto;
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