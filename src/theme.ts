import {createTheme} from '@mui/material/styles';

export const THEME_COLOR = {
  black: '#0A0A0A',
  white: '#F5F5F5',
  beige: '#E6D7C0',
  dark: '#19283F',
  orange: '#F97F29',
  lightGreen: '#DFF296',
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: 'dark',
    common: {
      black: THEME_COLOR.black,
      white: THEME_COLOR.white,
    },
    primary: {
      main: THEME_COLOR.dark,
      dark: THEME_COLOR.dark,
      light: THEME_COLOR.beige,
    },
    secondary: {
      main: THEME_COLOR.beige,
    },
    action: {
      hover: THEME_COLOR.orange,
      active: THEME_COLOR.lightGreen,
      focus: THEME_COLOR.white,
    },
    text: {
      primary: THEME_COLOR.beige,
      secondary: THEME_COLOR.beige
    },
    background: {
      paper: THEME_COLOR.dark,
      default: THEME_COLOR.white,
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          ...(ownerState.fontSize === 'large' && {
            width: 'auto',
            height: theme.typography.pxToRem(32),
            [theme.breakpoints.up('lg')]: {
              height: theme.typography.pxToRem(48),
            },
            [theme.breakpoints.up('xl')]: {
              height: theme.typography.pxToRem(72),
            },
          }),
          ...(ownerState.fontSize === 'medium' && {
            width: 'auto',
            height: theme.typography.pxToRem(32),
            [theme.breakpoints.up('xl')]: {
              height: theme.typography.pxToRem(48),
            },
          }),
          ...(ownerState.fontSize === 'small' && {
            width: 'auto',
            height: theme.typography.pxToRem(18),
            [theme.breakpoints.up('xl')]: {
              height: theme.typography.pxToRem(24),
            },
          }),
        })
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          ...(ownerState && {
            backgroundColor: theme.palette.primary.main,
          }),
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          ...(ownerState && {
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.action.hover,
            },
            "&:active": {
              color: theme.palette.action.active,
            },
            "&:focus": {
              color: theme.palette.common.white,
            },
          }),
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          ...(ownerState && {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.text.secondary,
            borderRadius: 16,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              boxShadow: `8px 8px 8px ${theme.palette.action.active},
                -8px -8px 8px ${theme.palette.action.active}`,
            },
            "&:active": {
              backgroundColor: theme.palette.action.active,
              boxShadow: `8px 8px 8px ${theme.palette.action.focus},
                -8px -8px 8px ${theme.palette.action.focus}`,
            },
            "&:focus": {
              backgroundColor: theme.palette.action.active,
              boxShadow: `8px 8px 8px ${theme.palette.action.hover},
                -8px -8px 8px ${theme.palette.action.hover}`,
            },
          }),
        })
      }
    },

  }
});

//Logo and other important components
theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: theme.typography.pxToRem(32),
  fontWeight: 700,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(48),
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.typography.pxToRem(72),
  },
};

// buttons, menu and linkd
theme.typography.button = {
  ...theme.typography.button,
  fontSize: theme.typography.pxToRem(32),
  fontWeight: 500,
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.typography.pxToRem(48),
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: theme.typography.pxToRem(32),
  fontWeight: 500,
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.typography.pxToRem(48),
  },
};
// plane text
theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 500,
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.typography.pxToRem(24),
  },
};

// banner
theme.typography.caption = {
  ...theme.typography.caption,
  fontSize: theme.typography.pxToRem(72),
  fontWeight: 700,
};