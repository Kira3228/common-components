<template>
  <v-snackbar
    v-model="isVisible"
    :color="color"
    :timeout="timeout"
    top
    right
    text
    elevation="24"
  >
    <div class="d-flex align-center">
      <v-icon left color="inherit">
        {{ icons[color] }}
      </v-icon>
      {{ message }}
    </div>

    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="isVisible = false">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ToastType, useToast } from "./use-toast";

const { isVisible, message, color, timeout } = useToast();

const icons: Record<ToastType, string> = {
  success: "mdi-check-circle",
  error: "mdi-alert-circle",
  info: "mdi-information",
  warning: "mdi-alert",
};
</script>
