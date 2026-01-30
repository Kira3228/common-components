<template>
  <div>
    <v-btn
      :x-small="xSmall"
      @click="$emit('click', $event)"
      :disabled="isDisabled"
      :elevation="elevation"
      :color="color"
      :height="height"
      :outlined="outlined"
      :icon="icon"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template #default>
        <slot />
      </template>
    </v-btn>
  </div>
</template>
<script lang="ts" setup>
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
</script>
