import { addComponent, addImports, addImportsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-snackbar-messages',
    configKey: 'snackbarMessages',
  },

  async setup(_options, _nuxt) {
    const resolver = createResolver(
      import.meta.url,
    );

    await installModule(
      '@pinia/nuxt',
    );
    await installModule(
      'vuetify-nuxt-module',
    );

    addImports({
      name: 'MessageType',
      from: resolver.resolve(
        'runtime',
        'enums',
        'message-type',
      ),
    });

    addImportsDir(
      resolver.resolve(
        'runtime',
        'composables',
      ),
    );

    addComponent({
      name: 'SnackbarMessages',
      filePath: resolver.resolve(
        'runtime',
        'components',
        'SnackbarMessageList.vue',
      ),
    });
  },
})
