import {Home, Menu as MenuIcon, Settings} from '@mui/icons-material';
import {Grid, Popover} from '@mui/material';
import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {AccountMenu, SearchMenuMobile, StyledButton, StyledTextItem} from '../../components';

export const MenuMain = (props: any) => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () =>  setAnchorEl(null);

  function handleClick(path: string): void {
    navigate(path);
    handleClose();
  }

  return (
    <>
      <StyledButton
        id="fade-button"
        aria-haspopup="true"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
      >
        <MenuIcon fontSize='large' />
      </StyledButton>
      <Popover
        id="main-menu"
        open={open}
        anchorEl={anchorEl}
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
        <Grid container direction={'column'} spacing={2} p={2} bgcolor={'primary.main'}>
          <Grid item xs={12} md={6} lg={3} onClick={() => handleClick('/')} >
            <StyledTextItem ><Home fontSize='medium' />Главная</StyledTextItem>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StyledTextItem ><Settings fontSize='medium' />Настройки</StyledTextItem>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <AccountMenu />
          </Grid>
          <Grid item xs={12} sx={{display: {xs: 'block', md: 'none', }}}>
            <SearchMenuMobile />
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}