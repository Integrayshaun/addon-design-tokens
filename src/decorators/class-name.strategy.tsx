import { DecoratorFunction, useEffect } from "@storybook/addons";
import {
  initializeThemeState,
  pluckThemeFromContext,
  useThemeParameters,
} from "./helpers";

export interface ClassNameStrategyConfiguration {
  themes: Record<string, string>;
  defaultTheme: string;
  parentSelector?: string;
}

const DEFAULT_ELEMENT_SELECTOR = "html";

export const withThemeByClassName = ({
  themes,
  defaultTheme,
  parentSelector = DEFAULT_ELEMENT_SELECTOR,
}: ClassNameStrategyConfiguration): DecoratorFunction => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (storyFn, context) => {
    const { themeOverride } = useThemeParameters();
    const selected = pluckThemeFromContext(context);

    useEffect(() => {
      const selectedThemeName = themeOverride || selected || defaultTheme;
      const parentElement = document.querySelector(parentSelector);

      Object.entries(themes).forEach(([themeName, className]) => {
        const classNames = className.split(' ').filter(Boolean);

        if (themeName === selectedThemeName) {
          parentElement.classList.add(...classNames);
        } else {
          parentElement.classList.remove(...classNames);
        }
      });
    }, [themeOverride, selected, parentSelector]);

    return storyFn();
  };
};
