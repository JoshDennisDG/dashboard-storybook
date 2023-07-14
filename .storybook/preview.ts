import type { Preview } from "@storybook/react";
import theme from "../src/theme";

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", JSON.stringify(theme));
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme: JSON.parse(localStorage.getItem("theme") as any),
    },
  },
};

export default preview;
