import {AccountCircle, Logout, Settings} from '@mui/icons-material';
import {Grid, Popover} from '@mui/material';
import * as React from 'react';
import {StyledButton, StyledTextItem,} from '../../components'

export const AccountMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<StyledButton
				id="account-button"
				aria-controls={open ? 'account-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				fullWidth
			>
				<StyledTextItem >Login<AccountCircle fontSize='large' /></StyledTextItem>
			</StyledButton>
			<Popover
				id="main-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Grid container direction={'column'} spacing={2} sx={{
					bgcolor: 'primary.main',
					p: 2,
				}} >
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem alignItems={'flexEnd'} ><AccountCircle fontSize='medium' />Account</StyledTextItem>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem ><Settings fontSize='medium' />Settings</StyledTextItem>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem ><Logout fontSize='medium' />Logout</StyledTextItem>
					</Grid>
				</Grid>
			</Popover>
		</>
	);
}
