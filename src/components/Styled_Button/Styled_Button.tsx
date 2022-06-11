import { Button, ButtonProps, ThemeProvider } from '@mui/material';
import { theme, THEME_COLOR } from '../../theme';

const StyledButton = (props: ButtonProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Button {...props} sx={{
				borderRadius: '8px',
				color: theme.palette.text.secondary,
				"&:hover": {
					color: theme.palette.action.hover,
					boxShadow: `8px 8px 8px ${THEME_COLOR.orange}`,
				},
				"&:active": {
					color: theme.palette.action.active,
					boxShadow: `8px 8px 8px ${THEME_COLOR.lightGreen}`,
				},
				"&:focus": {
					color: theme.palette.common.white,
					boxShadow: `8px 8px 8px ${THEME_COLOR.white}`,
				},
			}}
			/>
		</ThemeProvider>
	)
};
StyledButton.muiName = 'Button';

export default StyledButton;