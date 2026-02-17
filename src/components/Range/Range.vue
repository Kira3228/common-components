<template>
  <div class="tw-flex tw-gap-4">
    <TextInput
      v-model.number.trim="minVal"
      type="number"
      :label="firstLabel"
      @keypress="allowOnlyNumbers"
      only-number
    />
    <TextInput
      v-model.number.trim="maxVal"
      type="number"
      :label="secondLabel"
      @keypress="allowOnlyNumbers"
      only-number
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { TextInput } from "../TextInput";

interface RangeProps {
  value?: [number | null, number | null] | [];
  firstLabel?: string;
  secondLabel?: string;
}

const props = withDefaults(defineProps<RangeProps>(), {
  value: () => [],
  firstLabel: `От`,
  secondLabel: `До`,
});

const emit = defineEmits<{
  (e: "input", value: [number, number]): void;
}>();

const minVal = computed({
  get: () => props.value?.[0] ?? "",
  set: (val: string | number) => {
    const num = val === "" ? undefined : Number(val);
    const currentMax = props.value?.[1];
    emit("input", [num as number, currentMax as number]);
  },
});

const maxVal = computed({
  get: () => props.value?.[1] ?? "",
  set: (val: string | number) => {
    const num = val === "" ? undefined : Number(val);
    const currentMin = props.value?.[0];
    emit("input", [currentMin as number, num as number]);
  },
});

const allowOnlyNumbers = (evt: KeyboardEvent) => {
  if (!/\d/.test(evt.key)) {
    evt.preventDefault();
  }
};
</script>
