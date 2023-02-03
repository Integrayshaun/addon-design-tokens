# storybook-addon-style-toolbox

Configurations for popular styling tools as well as theme toggling.

## 🏁 Getting Started

To get started, **install the package** as a dev dependency

yarn:

```zsh
yarn add -D storybook-addon-style-toolbox
```

npm:

```zsh
npm install -D storybook-addon-style-toolbox
```

pnpm:

```zsh
pnpm add -D storybook-addon-style-toolbox
```

Then, **include the addon** in your `.storybook/main.js` file

```js
module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "storybook-addon-style-toolbox"],
};
```

### 👇 Tool specific configuration

For tool-specific setup, check out the recipes below

- List coming soon

## 🤝 Contributing

If you'd like to contribute to this addon, **THANK YOU**, I'd love your help 🙏

### 📝 Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code
