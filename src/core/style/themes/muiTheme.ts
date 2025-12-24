import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary']
    neutral: Palette['primary']
  }

  interface PaletteOptions {
    brand?: PaletteOptions['primary']
  }

  interface TypeBackground {
    navbar?: string
    card?: string
    support: string
    user: string
  }

  interface TypeText {
    title?: string
    cardTitle?: string
    header?: string
    label?: string
    placeholder?: string
    black?: string
    white?: string
    iconButton?: string
  }
}

// Create custom theme

export const theme = createTheme({
  direction: 'rtl', // Right-to-left support
  palette: {
    // Primary colors for buttons and main elements
    primary: {
      light: '#E9FFE3', // Light green
      main: '#34AB45', // Main green
      contrastText: '#FFFFFF'
    },

    // Secondary colors (grayscale)
    secondary: {
      light: '#C3C3C3',
      main: '#8F9591', // Light gray
      contrastText: '#FFFFFF'
    },
    brand: {
      main: '#06452B' // Brand-specific color for highlighted text
    },
    info: {
      main: '#BDBDBD', // Informational text
      dark: '#828884'
    },
    error: {
      main: '#C93C3C', // Error / delete
      contrastText: '#FFFFFF'
    },
    warning: {
      light: '#A58B62',
      main: '#EB9306', // Warnings
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#DCECE1', // Main background
      paper: '#FFFFFF', // Paper / card background
      card: '#E9FFE3', // Card background
      support: '#61ada63b', // Support section overlay
      user: '#4cd3271e' // User-related overlay
    },
    text: {
      primary: '#0C4135', // Main text
      title: '#06452B', // Titles / headers
      cardTitle: '#077045', // Card titles
      header: '#063A25', // Section headers
      label: '#404040', // Form labels
      placeholder: '#BDBDBD', // Input placeholders
      black: '#000000', // Standard black
      white: '#FFFFFF', // Standard white
      iconButton: '#06452B' // Icon button color
    },
    grey: {
      100: '#DCECE1', // Sidebar borders
      200: '#828884', // Secondary text / borders
      300: '#DBDBDB', // Input borders
      400: '#043D25', // Brand secondary
      500: '#E9FFE3', // Card backgrounds
      600: '#DBDBDB' // Focused input borders
    },
    divider: '#828884' // Divider lines
  },

  typography: {
    fontFamily: '"Vazir", sans-serif' // Custom Persian font
  },

  components: {
    // Button styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners
          textTransform: 'none' // Disable uppercase
        }
      }
    },

    // Paper / Card styles
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0 // Remove default border radius
        }
      }
    },

    // Outlined Input styles
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.70rem',
          color: '#BDBDBD',

          '& input, & textarea': {
            color: '#000000' // Text color inside inputs
          },

          '& fieldset': {
            borderColor: '#DBDBDB' // Default border
          },
          '&:hover fieldset': {
            borderColor: '#DBDBDB' // Hover border
          },
          '&.Mui-focused fieldset': {
            borderColor: '#DBDBDB' // Focused border
          }
        }
      }
    },

    // Input Label styles
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#404040', // Default label color
          fontSize: '1rem',
          fontWeight: 'regular',
          transform: 'translate(8px, -12px) scale(0.70)', // Float effect
          '&.Mui-focused': {
            color: '#404040' // Focused label color
          }
        }
      }
    }
  }
})
