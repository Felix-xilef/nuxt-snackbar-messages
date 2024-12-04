import { addComponent, addImports, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'snackbar-messages',
    configKey: 'snackbarMessages',
  },

  async setup(_options, _nuxt) {
    await installModule(
      '@pinia/nuxt',
    );
    await installModule(
      'vuetify-nuxt-module',
    );


    const { resolve } = createResolver(
      import.meta.url,
    );

    addImports([
      {
        name: 'MessageType',
        from: resolve(
          'runtime',
          'enums',
          'message-type',
        ),
      },
      {
        name: 'addMessage',
        from: resolve(
          'runtime',
          'composables',
          'add-message',
        ),
      },
      {
        name: 'removeMessage',
        from: resolve(
          'runtime',
          'composables',
          'remove-message',
        ),
      },
    ]);

    addComponent({
      name: 'SnackbarMessages',
      filePath: resolve(
        'runtime',
        'components',
        'SnackbarMessageList.vue',
      ),
    });
  },
})
