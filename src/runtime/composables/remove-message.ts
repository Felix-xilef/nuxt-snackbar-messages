import { useMessagesStore } from "../stores/messages";

/**
 * Remove a message by it's id
 * @param id Message id
 */
export function removeMessage(id: number) {
  return useMessagesStore().removeMessage(
    id,
  );
}
