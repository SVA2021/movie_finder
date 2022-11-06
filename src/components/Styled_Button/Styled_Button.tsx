import {Button, ButtonProps, useTheme} from '@mui/material';

export const StyledButton = (props: ButtonProps) => {
	const theme = useTheme();

	return (
		<Button {...props} sx={{
			borderRadius: theme.shape.borderRadius,
			color: theme.palette.text.secondary,
			"&:hover": {
				color: theme.palette.action.hover,
				boxShadow: `8px 8px 8px ${theme.palette.action.hover},
					-8px -8px 8px ${theme.palette.action.hover}`,
			},
			"&:active": {
				color: theme.palette.action.active,
				boxShadow: `8px 8px 8px ${theme.palette.action.hover},
					-8px -8px 8px ${theme.palette.action.hover}`,
			},
			"&:focus": {
				color: theme.palette.common.white,
				boxShadow: `8px 8px 8px ${theme.palette.action.hover},
					-8px -8px 8px ${theme.palette.action.hover}`,
			},
		}}
		/>
	)
};
StyledButton.muiName = 'Button';