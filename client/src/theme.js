// Color scheme - Fixed with green secondary
export const colorsDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
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
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#937a0eff",
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
            text: {
              primary: colorsDark.grey[600], // #f1f5f9 - Light text
              secondary: colorsDark.grey[500], // #e2e8f0 - Medium light text
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
              main: colorsDark.secondary[600], // #22c55e - Main green
            },
            neutral: {
              ...colorsLight.grey,
              main: colorsDark.grey[700], // #64748b - Medium grey
            },
            background: {
              default: colorsDark.grey[0], // #ffffff - Pure white
              alt: colorsDark.grey[50], // #f8fafc - Very light grey
            },
            text: {
              primary: colorsDark.grey[900], // #0f172a - Dark text
              secondary: colorsDark.grey[700], // #334155 - Medium dark text
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
