// Color scheme - Glossy dim dark with blue tint
export const colorsDark = {
  grey: {
    0: "#ffffff", // Pure white
    50: "#f8fafc", // Glossy light
    100: "#f1f5f9", // Extra light
    200: "#e2e8f0", // Very light
    300: "#cbd5e1", // Light
    400: "#94a3b8", // Medium light
    500: "#64748b", // Medium
    600: "#475569", // Medium dark
    700: "#334155", // Dark
    800: "#1e293b", // Very dark
    900: "#0f172a", // Extra dark
    1000: "#020617", // Pitch black
  },
  primary: {
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
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
      reversedObj[keys[i]] = values[len - i - 1];
    }
    reversedColors[key] = reversedObj;
  });

  return reversedColors;
};

export const colorsLight = reverseColors(colorsDark);

// Theme controller - GLOSSY DIM DARK + NORMAL LIGHT
export const themeController = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // DARK MODE - Glossy dim dark with blue tint
            primary: {
              ...colorsDark.primary,
              main: colorsDark.primary[400], // #0ea5e9 - Bright blue
              light: colorsDark.primary[300], // #38bdf8 - Lighter blue
              dark: colorsDark.primary[500], // #0284c7 - Darker blue
            },
            secondary: {
              ...colorsDark.secondary,
              main: colorsDark.secondary[400], // #60a5fa - Electric blue
              light: colorsDark.secondary[300], // #93c5fd - Lighter electric
              dark: colorsDark.secondary[500], // #3b82f6 - Darker electric
            },
            neutral: {
              ...colorsDark.grey,
              main: colorsDark.grey[400], // #94a3b8 - Medium light grey
            },
            background: {
              default: colorsDark.grey[800], // #1e293b - Glossy dim dark (NOT pitch black)
              alt: colorsDark.primary[600], // #334155 - Slightly lighter for cards
              paper: colorsDark.grey[700], // #334155 - Card surfaces
            },
            text: {
              primary: colorsDark.grey[100], // #f1f5f9 - Light text
              secondary: colorsDark.grey[200], // #e2e8f0 - Medium light text
            },
          }
        : {
            // LIGHT MODE - Normal clean light
            primary: {
              ...colorsLight.primary,
              main: colorsDark.primary[500], // #0284c7 - Main blue
              light: colorsDark.primary[400], // #0ea5e9 - Lighter blue
              dark: colorsDark.primary[600], // #0369a1 - Darker blue
            },
            secondary: {
              ...colorsLight.secondary,
              main: colorsDark.secondary[500], // #3b82f6 - Electric blue
              light: colorsDark.secondary[400], // #60a5fa - Lighter electric
              dark: colorsDark.secondary[600], // #2563eb - Darker electric
            },
            neutral: {
              ...colorsLight.grey,
              main: colorsDark.grey[500], // #64748b - Medium grey
            },
            background: {
              default: colorsDark.grey[0], // #ffffff - Pure white
              alt: colorsDark.grey[50], // #f8fafc - Very light grey
              paper: colorsDark.grey[100], // #f1f5f9 - Card background
            },
            text: {
              primary: colorsDark.grey[900], // #0f172a - Dark text
              secondary: colorsDark.grey[700], // #334155 - Medium dark text
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
