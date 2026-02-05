<template>
  <div>
    <v-dialog
      width="auto"
      max-width="50%"
      class="tw-absolute"
      @click:outside="close"
      :value="value"
      :overlay="false"
      transition="dialog-transition"
      @input="emit('input', $event)"
    >
      <v-card>
        <v-card-title primary-title> {{ title }} </v-card-title>
        <v-card-text>
          <slot name="content" />
        </v-card-text>
        <v-card-actions>
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" setup>
interface DialogProps {
  value?: boolean;
  title?: string;
  closeBtnTitle?: string;
  mainBtnTitle?: string;
}
const props = defineProps<DialogProps>();

const emit = defineEmits<{
  (e: "input", val: boolean): void;
  (e: `main-click`): void;
}>();

const close = () => {
  emit("input", false);
};

const mainButtonClick = () => {
  emit(`main-click`);
};
</script>
