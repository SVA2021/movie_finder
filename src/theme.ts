import { createTheme } from '@mui/material/styles';

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
			xs: 360,
			sm: 768,
			md: 1280,
			lg: 1920,
			xl: 2560,
		},
	},
	palette: {
		common: {
			black: THEME_COLOR.black,
			white: THEME_COLOR.white,
		},
		primary: {
			main: THEME_COLOR.dark,
		},
		secondary: {
			main: THEME_COLOR.beige,
		},
		action: {
			hover: THEME_COLOR.orange,
			active: THEME_COLOR.lightGreen,
		},
		text: {
			primary: THEME_COLOR.black,
			secondary: THEME_COLOR.beige
		},
	},
	// components: {
	// 	MuiButton: {
	// 		styleOverrides: {
	// 			sizeLarge:300,

	// 		},
	// 	}
	// }
});

//Logo and other important components
theme.typography.h1 = {
	fontSize: theme.typography.pxToRem(32),
	fontWeight: 700,
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.pxToRem(48),
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: theme.typography.pxToRem(72),
	},
};

// buttons, menu and linkd
theme.typography.button = {
	fontSize: theme.typography.pxToRem(32),
	fontWeight: 500,
	[theme.breakpoints.up('lg')]: {
		fontSize: theme.typography.pxToRem(48),
	},
};

theme.typography.h3 = {
	fontSize: theme.typography.pxToRem(32),
	fontWeight: 500,
	[theme.breakpoints.up('lg')]: {
		fontSize: theme.typography.pxToRem(48),
	},
};
// plane text
theme.typography.body1 = {
	fontSize: theme.typography.pxToRem(18),
	fontWeight: 500,
	[theme.breakpoints.up('lg')]: {
		fontSize: theme.typography.pxToRem(24),
	},
};