# Nuxt Snackbar Messages

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A module that makes it easy to add and use snackbar messages at a nuxt application.

> This module currently depends on [`@pinia/nuxt`][pinia-nuxt-href] and [`vuetify-nuxt-module`][vuetify-nuxt-href]

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-snackbar-messages?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Easy to use add and remove messages functions
- Messages easily displayed with the used of a single component
- 4 types of messages: `Error`, `Info`, `Warn`, `Success`
- Optional timeout for messages

## Quick Setup

**Before installing the module it is necessary to install the nuxt modules [`@pinia/nuxt`][pinia-nuxt-href] and [`vuetify-nuxt-module`][vuetify-nuxt-href]:**

```bash
yarn dlx nuxi module add pinia
yarn dlx nuxi module add vuetify-nuxt-module
```

Then install the module to your Nuxt application with one command:

```bash
yarn dlx nuxi module add snackbar-messages-nuxt
```

That's it! You can now use Nuxt Snackbar Messages in your Nuxt app ✨

## Usage

### Vue Component

For the module to work it is necessary to add the `SnackbarMessages` component inside the `v-app` component from **vuetify**:

```html
<v-app>
  <!-- Your content -->

  <SnackbarMessages />
</v-app>
```

> **Obs.:** Everything should work fine even if `SnackbarMessages` isn't an imediate child of `v-app`.

### New Message

To create a new message just call the `addMessage` function and the message will appear at the bottom right side of the screen:

```ts
const messageId = addMessage({
  type: MessageType.Success,
  message: 'Your success message',
  timeout: 2000,
});
```

#### `addMessage` requires the following arguments

- **\*type:** Type of the message that requires one of the values from the `MessageType` enum, that is also available
- **\*message:** The string message that will be shown
- **timeout:** An optional timeout in milliseconds determining in how much time the message will be removed

`addMessage` returns an number that is the id of the created message, which can be used to manually remove it

### Removing Message

All messages can be removed by the user and will be removed after the timeout, if provided, but you can also do so manully using the `removeMessage` function and the `id` that is returned when it is created by the `addMessage` function:

```ts
removeMessage(
  messageId,
);
```

---

<details>
  <summary>
    <strong>
      Local development
    </strong>
  </summary>

  ```bash
  # Install dependencies
  yarn install

  # Generate type stubs
  yarn dev:prepare

  # Develop with the playground
  yarn dev

  # Build the playground
  yarn dev:build
  ```

</details>

<!-- Links -->
[npm-version-src]: https://img.shields.io/npm/v/snackbar-messages-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/snackbar-messages-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/snackbar-messages-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/snackbar-messages-nuxt

[license-src]: https://img.shields.io/npm/l/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: ./LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

[pinia-nuxt-href]: https://www.npmjs.com/package/@pinia/nuxt
[vuetify-nuxt-href]: https://www.npmjs.com/package/vuetify-nuxt-module
