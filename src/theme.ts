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
			xs: 0,
			sm: 360,
			md: 768,
			lg: 1280,
			xl: 1920,
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
			focus: THEME_COLOR.white,
		},
		text: {
			primary: THEME_COLOR.black,
			secondary: THEME_COLOR.beige
		},
		background: {
			paper: THEME_COLOR.white,
			default: THEME_COLOR.white,
		}
	},
	shape: {
		borderRadius: 2
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
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