import { ref } from 'vue';

export type ToastType = "success" | "error" | "info" | "warning";

const isVisible = ref(false);
const message = ref('');
const timeout = ref(3000);
const color = ref<ToastType>('success');

export const useToast = () => {
  const showToast = (msg: string, type: ToastType = 'success', time = 3000) => {
    message.value = msg;
    color.value = type;
    timeout.value = time;
    isVisible.value = true;
  };

  return { isVisible, message, color, timeout, showToast };
};
