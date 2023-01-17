import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#C9E6FC",
    200: "#95CAF9",
    300: "#5FA5EF",
    400: "#3882E0",
    500: "#0052CC",
    600: "#003FAF",
    700: "#002F92",
    800: "#002176",
    900: "#001761",
  },
  success: {
    100: "#C7F9D4",
    200: "#91F3B5",
    300: "#57DB95",
    400: "#2DB77B",
    500: "#00875A",
    600: "#007458",
    700: "#006153",
    800: "#004E4B",
    900: "#003C40",
  },
  info: {
    100: "#C9FBF3",
    200: "#95F8EF",
    300: "#5EEBEA",
    400: "#36CDD8",
    500: "#00A3BF",
    600: "#007FA4",
    700: "#005F89",
    800: "#00446E",
    900: "#00315B",
  },
  warning: {
    100: "#FFF2D2",
    200: "#FFE2A5",
    300: "#FFCE78",
    400: "#FFBA57",
    500: "#FF991F",
    600: "#DB7816",
    700: "#B75B0F",
    800: "#934209",
    900: "#7A2F05",
  },
  danger: {
    100: "#FBDFD0",
    200: "#F7B9A4",
    300: "#E78672",
    400: "#CF574C",
    500: "#AF1C1C",
    600: "#96141F",
    700: "#7D0E21",
    800: "#650820",
    900: "#530520",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme({ colors, config });
