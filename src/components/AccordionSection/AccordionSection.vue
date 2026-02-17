<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ title }} </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script lang="ts" setup>
interface AccordionSectionProps {
  title: string;
}

const props = defineProps<AccordionSectionProps>();
</script>
