<template>
  <v-text-field
    :outlined="outlined"
    dense
    :label="label"
    :placeholder="placeholder"
    :value="value"
    hide-details="auto"
    color="primary"
    @input="handleInput"
  >
    <template v-if="isSearch" v-slot:append>
      <v-btn icon dark color="primary" @click.stop="">
        <span class="material-icons"> search </span>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script lang="ts" setup>
import { useDebounce } from "../../lib/debounce";

interface IProps {
  isSearch?: boolean;
  label?: string;
  placeholder?: string;
  value?: string | number;
  isTextarea?: boolean;
  outlined?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  isSearch: false,
  isTextarea: false,
});

const emit = defineEmits<{
  (e: `input`, value: any): void;
  (e: `debounce`, value: any): void;
}>();

const { debounce } = useDebounce();

const handleInput = (newValue: string | number) => {
  emit(`input`, newValue);
  debounce(() => {
    emit("debounce", newValue);
  }, 500);
};
</script>
