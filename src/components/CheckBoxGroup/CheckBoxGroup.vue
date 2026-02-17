<template>
  <div>
    <v-checkbox
      v-for="(item, index) in items"
      :key="getKey(item, index)"
      dense
      :label="getLabel(item)"
      :value="getValue(item)"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts" generic="T">
import { computed } from "vue";

interface CheckBoxGroupProps {
  items: T[];
  itemText?: string;
  itemValue?: string;
  value?: any[];
}

const props = defineProps<CheckBoxGroupProps>();
const emit = defineEmits<{
  (e: "input", value: any[]): void;
}>();

const model = computed({
  get: () => props.value || [],
  set: (val) => emit("input", val),
});

const getLabel = (item: T) => {
  if (typeof props.itemText === "string") return (item as any)[props.itemText];
  return String(item);
};

const getValue = (item: T) => {
  if (typeof props.itemValue === "string")
    return (item as any)[props.itemValue];
  return item;
};

const getKey = (item: T, index: number) => {
  const val = getValue(item);
  return typeof val === "string" || typeof val === "number" ? val : index;
};
</script>
