import { LocalMovies } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { theme } from '../../theme';

const Logo = () => {
	return (
		<Typography data-testid='logo' variant='h1' component={'p'} sx={{
			display: 'flex',
			alignItems: 'center',
			color: theme.palette.text.secondary,
			textTransform: 'uppercase',
			fontFamily: "Roboto,Arial,sans-serif",
		}}>
			Movie
			<LocalMovies sx={{
				width: 'auto',
				height: theme.typography.pxToRem(32),
				[theme.breakpoints.up('md')]: {
					height: theme.typography.pxToRem(48),
				},
				[theme.breakpoints.up('lg')]: {
					height: theme.typography.pxToRem(72),
				},
			}} />
			Finder
		</Typography>
	)
};

export default Logo;