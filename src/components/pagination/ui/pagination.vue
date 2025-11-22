<template>
  <div>
    <v-pagination
      :total-visible="totalVisible"
      :length="length"
      v-model="page"
      @input="handleChangePage"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

interface IProps {
  length: number;
  value: number  | undefined;
  totalVisible: number;
}
const props = defineProps<IProps>();

const page = ref<number | undefined>(props.value);

const emits = defineEmits<{
  (e: `update-page`, newPage: number): void;
}>();

const handleChangePage = (newPage: number) => {
  emits("update-page", newPage);
};
watch(
  () => props.value,
  (newValue) => {
    page.value = newValue;
  }
);
</script>
