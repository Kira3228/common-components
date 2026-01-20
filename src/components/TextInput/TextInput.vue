<template>
  <div class="tw-flex tw-items-center">
    <v-textarea
      v-if="isTextarea"
      :value="value"
      filled
      auto-grow
      :label="label"
      @input="handleInput"
    >
    </v-textarea>
    <v-text-field
      v-else
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
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  isSearch: boolean;
  label: string;
  placeholder: string;
  value: string | number;
  isTextarea: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  isSearch: false,
  isTextarea: false,
});

const emit = defineEmits<{ (e: `input`): void }>();
const handleInput = () => {
  emit(`input`);
};
</script>
