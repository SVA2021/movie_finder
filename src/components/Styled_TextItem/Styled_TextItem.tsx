import { Typography, TypographyProps } from '@mui/material';

export const StyledTextItem = (props: TypographyProps) => {
	return (
		<Typography data-testid='styled-text-item' variant='h3' component={'p'} sx={{
			display: 'flex',
			alignItems: 'center',
			flexWrap: 'nowrap',
			gap: '1rem',
			p: 1,
			color: 'text.secondary',
			textTransform: 'capitalize',
			"&:hover": {
				color: 'action.hover',
			},
			"&:active": {
				color: 'action.active',
			},
			"&:focus": {
				color: 'common.white',
			},
		}}
		>
			{props.children}
		</Typography>
	)
}