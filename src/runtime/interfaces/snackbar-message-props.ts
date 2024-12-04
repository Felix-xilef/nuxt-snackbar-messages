import type { MessageType } from "../enums/message-type";

export interface SnackbarMessageProps {
  type: MessageType;
  message: string;
  timeout?: number;
}
