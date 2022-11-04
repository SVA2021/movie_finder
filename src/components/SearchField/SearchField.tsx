import { Search } from '@mui/icons-material';
import { alpha, IconButton, InputAdornment, TextField, TextFieldProps, useTheme } from '@mui/material';

export const SearchField = (props: TextFieldProps) => {
	const theme = useTheme();
	return (
		<TextField
			{...props}
			sx={{
				backgroundColor: alpha(theme.palette.secondary.main, 0.5),
				borderRadius: theme.shape.borderRadius,
				borderColor: 'transparent',
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
								color: 'primary.main',
								'&:hover': {
									color: 'action.hover',
								},
								'&:active': {
									color: 'action.active',
								},
							}}
						>
							<Search fontSize='medium'/>
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
};