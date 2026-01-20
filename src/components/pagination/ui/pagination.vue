<template>
  <div>
    <v-pagination
      :total-visible="totalVisible"
      :length="length"
      :value="value"
      @input="handleChangePage"
    />
  </div>
</template>
<script setup lang="ts">
interface IProps {
  length: number;
  value?: number | undefined;
  totalVisible: number;
}
const props = defineProps<IProps>();

const emits = defineEmits<{
  (e: `input`, newPage: number): void;
}>();

const handleChangePage = (newPage: number) => {
  emits("input", newPage);
};
</script>
