<script setup lang="ts">
function createAlert() {
  addMessage({
    type: MessageType.Error,
    message: 'haa',
  });
}
</script>

<template>
  <v-app>
    <v-btn
      text="New Alert"
      @click="createAlert()"
    ></v-btn>

    Nuxt module playground!

    <SnackbarMessages />
  </v-app>
</template>

<style scoped lang="scss">
</style>
