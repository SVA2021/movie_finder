import { Search } from '@mui/icons-material';
import { Box, IconButton, Popover, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import SearchField from '../SearchField/SearchField';

const SearchMenu = () => {
	const theme = useTheme();
	const isTablet = useMediaQuery(theme.breakpoints.only('md'));

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		(isTablet)
			? (
				<>
					<IconButton
						id="search-button"
						aria-controls={open ? 'search-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{
							color: 'secondary.main',
							'&:hover': {
								color: 'action.hover',
							},
							'&:active': {
								color: 'action.active',
							},
						}}
					>
						<Search fontSize='large' />
					</IconButton>
					<Popover
						id="search-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
					>
						<Box sx={{
							bgcolor: 'primary.main',
							p: 2,
							width: 'calc(100vw - 32px)',
							height: '200%',
						}}>
							<SearchField />
						</Box>
					</Popover>
				</>
			)
			: (
				<SearchField />
			)
	)
};

export default SearchMenu;