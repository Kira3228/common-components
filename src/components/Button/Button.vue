<template>
  <v-btn
    @click="$emit('click', $event)"
    :disabled="isDisabled"
    :elevation="elevation"
    :color="color"
    :height="height"
    :outlined="outlined"
  >
    <template #default>
      <slot />
    </template>
  </v-btn>
</template>
<script lang="ts" setup>
interface ButtonProps {
  isDisabled?: boolean;
  elevation?: number;
  color?: string;
  height?: number | string;
  outlined?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  height: `auto`,
  color: `blue`,
});
</script>
