<script setup lang="ts">
import { computed, onMounted } from "vue";
import { MessageType } from "../enums/message-type";
import type { SnackbarMessageProps } from "../interfaces/snackbar-message-props";

const ALERT_ICON = {
  [MessageType.Success]: 'mdi-check-circle',
  [MessageType.Warn]: 'mdi-alert-circle',
  [MessageType.Error]: 'mdi-close-circle',
  [MessageType.Info]: 'mdi-information',
}

const props = withDefaults(
  defineProps<SnackbarMessageProps>(),
  {
    timeout: -1,
  },
);

const currentIcon = computed(
  () => ALERT_ICON[props.type],
);

const emits = defineEmits([
  'close',
]);

onMounted(() => {
  if (props.timeout > 0) {
    setTimeout(
      () => emits('close'),
      props.timeout,
    );
  }
});
</script>

<template>
  <v-alert
    :type="type"
    :icon="false"
    class="snackbar-message"
  >
    <v-row
      align="center"
      no-gutters
      class="snackbar-message-content"
    >
      <v-col cols="auto">
        <v-icon
          :icon="currentIcon"
        ></v-icon>
      </v-col>

      <v-col cols="auto">
        <div class="message-container">
          {{ message }}
        </div>
      </v-col>

      <v-col cols="auto">
        <v-btn
          variant="text"
          icon="mdi-close-circle-outline"
          aria-label="Close alert"
          @click="emits('close')"
        ></v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<style scoped>
.snackbar-message {
  padding: 4px 12px;
}

.snackbar-message-content {
  gap: 10px;
  flex-wrap: nowrap;
}

.message-container {
  min-width: 140px;
  max-width: 85vw;
}
</style>
