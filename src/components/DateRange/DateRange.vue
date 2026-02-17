<template>
  <div class="tw-flex tw-gap-4">
    <DateInput />
    <DateInput />
  </div>
</template>
<script setup lang="ts">
import DateInput from "../DateInput/DateInput.vue";

interface Props {}
const props = defineProps<Props>();
</script>
