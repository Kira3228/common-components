<template>
  <div>
    <v-btn
      :x-small="xSmall"
      :disabled="isDisabled"
      :elevation="elevation"
      @click="handleClick"
      :color="color"
      :height="height"
      :outlined="outlined"
      :icon="icon"
      v-bind="$attrs"
      v-on="otherListeners"
    >
      <template #default>
        <slot />
      </template>
    </v-btn>
  </div>
</template>
<script lang="ts" setup>
import { computed, useListeners } from "vue";

interface ButtonProps {
  isDisabled?: boolean;
  elevation?: number;
  color?: string;
  height?: number | string;
  outlined?: boolean;
  icon?: boolean;
  xSmall?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  height: `auto`,
  color: `blue`,
});

const emit = defineEmits<{
  (e: `click`, event: Event): void;
}>();

const handleClick = (event: Event) => {
  emit("click", event);
};

const listeners = useListeners();
const otherListeners = computed(() => {
  const { click, ...rest } = listeners;
  return rest;
});
</script>
