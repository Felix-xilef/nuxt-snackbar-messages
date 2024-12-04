<script setup lang="ts">
import { computed } from 'vue';
import { useMessagesStore } from '../stores/messages';
import SnackbarMessage from './SnackbarMessage.vue';

const messagesStore = useMessagesStore();

const messages = computed(
  () => messagesStore.messages,
);
</script>

<template>
  <div class="messages-list-wrapper">
    <TransitionGroup
      name="messages-list-transition"
      tag="ul"
      class="messages-list"
    >
      <li
        v-for="message in messages"
        :key="`message-${message.id}`"
      >
        <SnackbarMessage
          v-bind="message"
          @close="messagesStore.removeMessage(message.id)"
          class="message-item"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.messages-list-wrapper {
  position: fixed;
  bottom: 0;
  right: 0;
}

.messages-list {
  position: relative;
  list-style-type: none;

  padding-bottom: 25px;
  padding-right: 25px;
}

.message-item {
  margin-top: 8px;
}


.messages-list-transition-move,
.messages-list-transition-enter-active,
.messages-list-transition-leave-active {
  transition: all .5s ease;
}

.messages-list-transition-enter-from,
.messages-list-transition-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.messages-list-transition-leave-active:not(:only-child) {
  position: absolute;
}
</style>
