import type { SnackbarMessageProps } from "../interfaces/snackbar-message-props";
import { useMessagesStore } from "../stores/messages";

/**
 * Creates a new message and returns it's id
 * @param message Message options
 * @returns The message id
 */
export function addMessage(message: SnackbarMessageProps): number {
  return useMessagesStore().addMessage(
    message,
  );
}
