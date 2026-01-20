<template>
  <div class="tw-flex-1 tw-min-w-0 tw-w-full tw-flex tw-flex-col">
    <v-data-table
      :multi-sort="true"
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      item-key="id"
      class="elevation-1 tw-text-xs"
      color="primary"
      :single-select="false"
      hide-default-footer
      :sort-by.sync="sortByList"
      :sort-desc.sync="sortDescList"
      @click:row="handleRowClick"
      :loading="isLoading"
      loading-text="Загрузка данных"
    >
      <template v-slot:top>
        <slot name="select-preset" />
      </template>
    </v-data-table>
    <slot name="modal"></slot>
  </div>
</template>

<script lang="ts" setup generic="H, I">
import { ref } from "vue";
import { Header } from "./header.type";
import { UiSelect } from "../Select";
interface IProps {
  isLoading?: boolean;
  headers?: Header[];
  items?: I;
  itemsPerPage?: number;
  paginationLength?: number;
  totalVisible?: number;
  sortByList?: any;
  sortDescList?: any;
  page?: number;
}

const props = defineProps<IProps>();

const emits = defineEmits<{
  (e: `update:page`, newPage: number): void;
  (e: `click-row`, data: any): void;
}>();
const page = ref(props.page);

const handleChangePage = (newPage: number) => {
  emits("update:page", newPage);
};
const handleRowClick = (data: any) => {
  emits(`click-row`, data);
};
</script>
<style scoped>
:deep(.no-wrap-table th),
:deep(.no-wrap-table td) {
  white-space: nowrap !important;
}

:deep(.v-data-table__wrapper) {
  overflow-x: auto;
}
</style>
