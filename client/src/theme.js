export const colorsDark = {
  grey: {
    0: "#ffffff",
    10: "#f9fafb",
    50: "#f3f4f6",
    100: "#e5e7eb",
    200: "#d1d5db",
    300: "#9ca3af",
    400: "#6b7280",
    500: "#4b5563",
    600: "#374151",
    700: "#1f2937",
    800: "#18181b",
    900: "#121212",
    1000: "#000000",
  },
  primary: {
    100: "#d1d5db",
    200: "#9ca3af",
    300: "#6b7280",
    400: "#4b5563",
    500: "#27272a",
    600: "#1f1f23",
    700: "#18181b",
    800: "#121212",
    900: "#0a0a0a",
  },
  secondary: {
    // Balanced emerald tones (vivid on both themes)
    100: "#ccfbf1", // light mint
    200: "#99f6e4", // softer seafoam
    300: "#5eead4", // visible even on light
    400: "#2dd4bf", // main accent for dark bg
    500: "#14b8a6", // teal-emerald hybrid — neutral sweet spot
    600: "#0d9488", // good contrast on light
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
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

// Theme controller - FIXED with zoom reduction
export const themeController = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // DARK MODE - Glossy dim dark
            primary: {
              ...colorsDark.primary,
              main: colorsDark.primary[400], // #0ea5e9 - Bright blue
              light: colorsDark.primary[400], // #38bdf8 - Lighter blue
            },
            secondary: {
              ...colorsDark.secondary,
              main: colorsDark.secondary[300], // #4ade80 - Vibrant green
            },
            neutral: {
              ...colorsDark.grey,
              main: colorsDark.grey[500], // #94a3b8 - Medium light grey
            },
            background: {
              default: colorsDark.primary[600], // #1e293b - Glossy dim dark
              alt: colorsDark.primary[500], // #334155 - Cards
            },
          }
        : {
            // LIGHT MODE - Clean light
            primary: {
              ...colorsLight.primary,
              main: colorsDark.primary[100], // #0284c7 - Main blue
              light: colorsDark.primary[200], // #0ea5e9 - Lighter blue
            },
            secondary: {
              ...colorsLight.secondary,
              main: colorsDark.secondary[600],
              light: colorsDark.secondary[700],
            },
            neutral: {
              ...colorsLight.grey,
              main: colorsDark.grey[500], // #64748b - Medium grey
            },
            background: {
              default: colorsDark.grey[0], // #ffffff - Pure white
              alt: colorsDark.grey[50], // #f8fafc - Very light grey
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12, // REDUCED from 14px (makes everything smaller)
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32, // REDUCED from 40px
        fontWeight: 700,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 26, // REDUCED from 32px
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20, // REDUCED from 24px
        fontWeight: 600,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16, // REDUCED from 20px
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14, // REDUCED from 16px
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12, // REDUCED from 14px
        fontWeight: 500,
      },
    },
    // REDUCED spacing scale (makes components more compact)
    spacing: 6, // REDUCED from default 8px

    shape: {
      borderRadius: 6, // Slightly smaller borders
    },
    shadows: [
      "none",
      "0px 1px 2px rgba(2, 132, 199, 0.05)",
      "0px 1px 3px rgba(2, 132, 199, 0.1)",
      "0px 1px 6px rgba(2, 132, 199, 0.1)", // Reduced spread
      "0px 2px 12px rgba(2, 132, 199, 0.15)", // Reduced spread
    ],
    // Component size overrides for compact design
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "0.75rem", // Smaller button text
            padding: "4px 12px", // Smaller button padding
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: "8px", // Smaller icon buttons
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              fontSize: "0.875rem", // Smaller input text
            },
          },
        },
      },
    },
  };
};
