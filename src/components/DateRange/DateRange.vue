<template>
  <div class="tw-flex tw-gap-4">
    <DateInput v-model="minVal" :label="firstLabel" />
    <DateInput v-model="maxVal" :label="secondLabel" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import DateInput from "../DateInput/DateInput.vue";

interface Props {
  value?: [string | undefined, string | undefined];
  firstLabel?: string;
  secondLabel?: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (
    e: `input`,
    data: [string | undefined | null, string | undefined | null],
  ): void;
}>();

const minVal = computed({
  get: () => props.value?.[0] ?? "",
  set: (val: string) => {
    const newVal = val === "" || val === null ? null : val;
    const currentMax = props.value?.[1];
    if (newVal && currentMax) {
      if (newVal > currentMax) {
        emit("input", [currentMax, currentMax]);
      } else {
        emit("input", [newVal, currentMax]);
      }
    } else {
      emit("input", [newVal, currentMax]);
    }
  },
});

const maxVal = computed({
  get: () => props.value?.[1] ?? "",
  set: (val: string) => {
    const newVal = val === "" || val === null ? null : val;
    const currentMin = props.value?.[0];

    if (newVal && currentMin) {
      if (newVal < currentMin) {
        emit("input", [currentMin, currentMin]);
      } else {
        emit("input", [currentMin, newVal]);
      }
    } else {
      emit("input", [currentMin, newVal]);
    }
  },
});
</script>
