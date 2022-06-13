import { Home, LocalMovies, Menu as MenuIcon, Movie } from '@mui/icons-material';
import { Grid, Popover } from '@mui/material';
import * as React from 'react';
import StyledButton from '../Styled_Button/Styled_Button';
import StyledTextItem from '../Styled_TextItem/Styled_TextItem';
import SubMenuMobile from '../SubMenuMobile/SubMenuMobile';

const MenuMain = (props: any) => {

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
				id="fade-button"
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MenuIcon fontSize='large' />
			</StyledButton>
			<Popover
				id="main-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<Grid container direction={'column'} spacing={2} sx={{
					bgcolor: 'primary.main',
					p: 2,
				}} >
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem ><Home fontSize='medium' />Home</StyledTextItem>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem ><LocalMovies fontSize='medium' />Movies</StyledTextItem>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<StyledTextItem ><Movie fontSize='medium' />Series</StyledTextItem>
					</Grid>
					<Grid item xs={12} sx={{ display: { xs: 'block', md: 'none', } }}>
						<SubMenuMobile />
					</Grid>
				</Grid>
			</Popover>
		</>
	);
}

export default MenuMain;