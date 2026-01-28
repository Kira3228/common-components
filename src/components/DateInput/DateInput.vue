<template>
  <div class="tw-flex tw-items-center tw-gap-4">
    <v-menu
      ref="menuRef"
      left
      v-model="isMenuOpen"
      :close-on-content-click="false"
      offset-y
      max-width="290px"
      min-width="auto"
      hide-details="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value="dateFormatted"
          :label="label"
          persistent-hint
          readonly
          prepend-inner-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
        >
          <template v-slot:append>
            <v-icon v-if="dateFormatted" @click.stop="clearDate">
              mdi-close
            </v-icon>
            <v-icon v-else style="opacity: 0; pointer-events: none">
              mdi-close
            </v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="internalDate"
        no-title
        @input="isMenuOpen = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
import { useDebounce } from "../../lib/debounce";
import { ref, computed } from "vue";

interface IProps {
  value?: string | null;
  label?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  value: null,
});

const emit = defineEmits<{
  (e: "input", value: string | null): void;
  (e: `debounce`, vallue: any): void;
}>();

const isMenuOpen = ref(false);

const { debounce } = useDebounce();

const internalDate = computed({
  get: () => props.value || null,
  set: (val: string | null) => {
    emit("input", val);
    debounce(() => {
      emit(`debounce`, val);
    });
  },
});

const formatDate = (dateStr: string | null): string | null => {
  if (!dateStr) return null;
  const parts = dateStr.split("-");
  if (parts.length !== 3) return null;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
};

const dateFormatted = computed(() => formatDate(internalDate.value));

const clearDate = () => {
  internalDate.value = null;
};
</script>
