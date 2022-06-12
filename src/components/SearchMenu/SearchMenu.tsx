import { Search } from '@mui/icons-material';
import { Box, IconButton, Popover, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import SearchField from '../SearchField/SearchField';

const SearchMenu = (props: any) => {
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
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{
							color: theme.palette.secondary.main,
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
					<Popover
						id="basic-menu"
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
							bgcolor: theme.palette.primary.main,
							p: 2,
							width: 'calc(100vw - 32px)',
							height: '200%',
						}}>
							<SearchField focused />
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