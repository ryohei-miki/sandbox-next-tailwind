import { extendTheme } from "@chakra-ui/react";

const ComponentStyle = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    sizes: {
      xl: {
        h: "156px",
        fontSize: "lg",
        px: "32px",
      },
    },
  },
};

const Colors = {
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
};

const GlobalStyles = {
  html: {
    fontSize: "100%",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      ...GlobalStyles,
    },
  },
  colors: {
    ...Colors,
  },
  components: {
    ...ComponentStyle,
  },
});

export default theme;
