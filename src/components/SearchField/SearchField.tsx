import { Search } from '@mui/icons-material';
import { alpha, IconButton, InputAdornment, TextField, TextFieldProps, useTheme } from '@mui/material';

const SearchField = (props: TextFieldProps) => {
	const theme = useTheme();
	return (
		<TextField
			{...props}
			sx={{
				backgroundColor: alpha(theme.palette.secondary.main, 0.5),
				borderRadius: theme.shape.borderRadius,
				borderColor: 'transparent',
				fontSize: theme.typography.pxToRem(18),
				[theme.breakpoints.up('xl')]: {
					fontSize: theme.typography.pxToRem(24),
				},
				'&:hover': {
					backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				},
				'&:focus-within': {
					backgroundColor: theme.palette.secondary.main,
				},
			}}
			fullWidth
			placeholder='Movies, series, keywords...'
			InputProps={{
				endAdornment: (
					<InputAdornment position="end" >
						<IconButton
							sx={{
								color: theme.palette.primary.main,
								'&:hover': {
									color: theme.palette.action.hover,
								},
								'&:active': {
									color: theme.palette.action.active,
								},
							}}
						>
							<Search sx={{
								width: 'auto',
								height: theme.typography.pxToRem(32),
								[theme.breakpoints.up('xl')]: {
									height: theme.typography.pxToRem(48),
								},
							}} />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
};

export default SearchField;