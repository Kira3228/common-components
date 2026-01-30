<template>
  <v-menu open-on-hover>
    <template #activator="{ on, attrs }">
      <v-btn v-on="on" v-bind="attrs" color="gray" icon small>
        <template #default>
          <MoreIcon class="tw-my-1" />
        </template>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.text"
        :to="item.to"
        link
        @click="handleClick(item)"
      >
        <v-list-item-title> {{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import { MoreIcon } from "../Icons";
import { Option } from "./types/option.type";

interface OptionsProps {
  items: Option[];
}

const props = defineProps<OptionsProps>();

const emit = defineEmits<{
  (e: `click`, value: Option): void;
}>();
const handleClick = (data: Option) => {
  emit(`click`, data);
};
</script>
