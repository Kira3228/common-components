<template>
  <v-text-field
    dense
    :label="label"
    @input="handleInput"
    :placeholder="placeholder"
    :value="value"
    hide-details="auto"
    color="primary"
    :rules="rules"
    @keypress="allowOnlyNumbers"
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
  rules?: any[];
  onlyNumbers?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  isSearch: false,
  isTextarea: false,
});

const emit = defineEmits<{
  (e: `input`, value: any): void;
  (e: `debounce`, value: any): void;
  (e: `keypress`, value: any): void;
}>();

const { debounce } = useDebounce();

const handleInput = (newValue: string | number) => {
  emit(`input`, newValue);
  debounce(() => {
    emit("debounce", newValue);
  }, 500);
};

const allowOnlyNumbers = (evt: KeyboardEvent) => {
  if (props.onlyNumbers && !/\d/.test(evt.key)) {
    evt.preventDefault();
  }
};
</script>
