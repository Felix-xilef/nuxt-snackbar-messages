import { MessageType } from "../enums/message-type";
import type { SnackbarMessageProps } from "../interfaces/snackbar-message-props";

export const useMessagesStore = defineStore(
  'messages',
  () => {
    const messages = ref<(SnackbarMessageProps & { id: number; })[]>([]);


    function addMessage(message: SnackbarMessageProps): number {
      const id = Date.now();

      messages.value.push({
        ...message,
        id,
      });

      logMessage(
        message,
      );

      return id;
    }

    function removeMessage(id: number) {
      const index = messages.value.findIndex(
        ({ id: messageId }) => id === messageId,
      );

      if (index > -1) {
        messages.value.splice(
          index,
          1,
        );
      }
    }

    function logMessage(message: SnackbarMessageProps) {
      switch (message.type) {
        case MessageType.Error:
          console.error(
            message.message,
          );
          break;

        case MessageType.Warn:
          console.warn(
            message.message,
          );
          break;

        case MessageType.Info:
          console.info(
            message.message,
          );
      }
    }


    return {
      messages,
      addMessage,
      removeMessage,
    };
  },
);
