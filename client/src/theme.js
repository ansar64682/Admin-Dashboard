// Color scheme
export const colorsDark = {
  white: {
    50: "#e0e0e0",
    100: "#c2c2c2",
    200: "#a3a3a3",
    300: "#858585",
    400: "#666666",
    500: "#525252",
    600: "#3d3d3d",
    700: "#292929",
    800: "#141414",
    900: "#000000",
  },
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#244f94ff",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },

  secondary: {
    50: "#fef7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
};

// Reverser function
const reverseColors = (colorsDark) => {
  const reversedColors = {};
  Object.entries(colorsDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const len = keys.length;
    const reversedObj = {};

    for (let i = 0; i < len; i++) {
      reversedObj[key[i]] = values[len - i - 1];
    }
    reversedColors[key] = reversedObj;
  });

  return reversedColors;
};

export const colorsLight = reverseColors(colorsDark);

// Theme controller

export const themeController = (mode) => {
  return {
    Palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark Colors
            primary: {
              ...colorsDark.primary,
              main: colorsDark.primary[400],
              light: colorsDark.primary[400],
            },
            secondary: {
              ...colorsDark.secondary,
              main: colorsDark.secondary[300],
            },
            neutral: {
              ...colorsDark.white,
              main: colorsDark.white[500],
            },

            background: {
              default: colorsDark.primary[600],
              alt: colorsDark.primary[500],
            },
          }
        : {
            // Light Colors
            primary: {
              ...colorsLight.primary,
              main: colorsLight.primary[50],
              light: colorsLight.primary[100],
            },
            secondary: {
              ...colorsLight.secondary,
              main: colorsLight.secondary[600],
              light: colorsLight.secondary[700],
            },
            neutral: {
              ...colorsLight.white,
              main: colorsLight.white[500],
            },
            background: {
              default: colorsLight.white[50],
              alt: colorsLight.white[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
