<template>
  <div class="tw-flex-1 tw-min-w-0 tw-w-full tw-flex tw-flex-col">
    <v-data-table
      v-if="!isLoading"
      :multi-sort="true"
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :item-key="key"
      class="elevation-1 tw-text-xs"
      color="primary"
      :single-select="false"
      hide-default-footer
      @click:row="handleRowClick"
      :loading="isLoading"
      loading-text="Загрузка данных"
      :show-select="showSelect"
      :value="value"
      @input="handleInput"
      :dense="dense"
      :sort-by.sync="localSortBy"
      :sort-desc.sync="localSortDesc"
    >
      <template #top>
        <slot name="select-preset" />
      </template>
      <template
        v-for="header in headers"
        v-slot:[`item.${header.value}`]="{ item, value }"
      >
        <slot
          :name="`item.${header.value}`"
          :item="item"
          :value="value"
          :header="header"
        >
          {{ value }}
        </slot>
      </template>
      <template #footer>
        <slot name="footer" />
      </template>
    </v-data-table>
    <div v-else>
      <v-skeleton-loader type="table-thead" class="table-skeleton" />
      <v-skeleton-loader type="table-tbody" class="table-skeleton" />
    </div>
    <slot name="modal"></slot>
  </div>
</template>
<script lang="ts" setup generic="H, I">
import { ref, watch } from "vue";
import { Header } from "./header.type";

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
  showSelect?: boolean;
  value?: any;
  dense?: boolean;
  itemKey?: string;
  sortBy?: any;
  sortDesc?: any;
}

const props = defineProps<IProps>();
const key = ref(props.itemKey || "id");

const emits = defineEmits<{
  (e: `update:page`, newPage: number): void;
  (e: `click-row`, data: any): void;
  (e: `input`, data: H[]): void;
  (e: `change`, data: any): void;
  (e: `update:sortBy`, value: any): void;
  (e: `update:sortDesc`, value: any): void;
}>();

const localSortBy = ref(props.sortBy);
const localSortDesc = ref(props.sortDesc);

watch(
  () => props.sortBy,
  (val) => {
    localSortBy.value = val;
  },
);
watch(
  () => props.sortDesc,
  (val) => {
    localSortDesc.value = val;
  },
);

watch(
  [localSortBy, localSortDesc],
  () => {
    emits("update:sortBy", localSortBy.value);
    emits("update:sortDesc", localSortDesc.value);
    emits("change", {
      sortBy: localSortBy.value,
      sortDesc: localSortDesc.value,
    });
  },
  { deep: true },
);

const handleRowClick = (data: any) => emits("click-row", data);
const handleInput = (data: any) => emits("input", data);
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
