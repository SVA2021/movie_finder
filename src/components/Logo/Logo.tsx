import { LocalMovies } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Logo = () => {
	return (
		<Typography data-testid='logo' variant='h1' component={'p'} sx={{
			display: 'flex',
			alignItems: 'center',
			flexWrap: 'nowrap',
			color: 'text.secondary',
			textTransform: 'uppercase',
		}}>
			Movie
			<LocalMovies fontSize='large'/>
			Finder
		</Typography>
	)
};

export default Logo;