import {AppBar, Box, Grid, Toolbar} from '@mui/material';
import {MenuMain, Logo, SearchMenu, AccountMenu} from '../../components';

export const Header = () => {
	return (
		<Box sx={{flexGrow: 1, bgcolor: 'primary.main'}}>
			<AppBar position='sticky' sx={{maxWidth: 'xl', m: '0 auto'}}>
				<Toolbar sx={{boxShadow: 'none'}}>
					<Grid container justifyContent={'space-between'} alignItems={'center'}>
						<Grid item xs={3} md={1}>
							<MenuMain />
						</Grid>
						<Grid item xs={9} md={5} lg={4}>
							<Logo />
						</Grid>
						<Grid item md={1} lg={5} xl={4}
							sx={{display: {xs: 'none', md: 'block'}}}>
							<SearchMenu />
						</Grid>
						<Grid item xs={false} md={3} lg={2}
							sx={{display: {xs: 'none', md: 'block'}}}>
							<AccountMenu />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
};