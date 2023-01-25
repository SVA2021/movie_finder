import {AccountCircle, ExpandMore, Logout} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary, Box, Stack} from '@mui/material';
import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {AccountForm, AccountLabel, StyledTextItem} from '../../components';
import {selectIsAuth, selectUser, setUser} from '../../features/auth/authSlice';

export const AccountMenu: FC = () => {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);

  const logoutUser = () => {
    dispatch(setUser(null));
    localStorage.clear();
  }

  let username = localStorage.getItem('user');

  useEffect(() => {
    if (!isAuth && username) setUser({login: username, password: 'random'});
    if (!username && isAuth && user?.login) localStorage.setItem('user', user?.login);
  }, [isAuth,])

  return (
    <Accordion data-testid={'account-menu'}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-account"
        id="panel-account"
        data-testid={'panel-account'}
      >
        <StyledTextItem ><AccountCircle fontSize='medium' />Аккаунт</StyledTextItem>
      </AccordionSummary>
      <AccordionDetails data-testid={'panel-account-details'}>
        {
          isAuth
            ?
            <Stack spacing={2}>
              <AccountLabel />
              <Box onClick={logoutUser} sx={{cursor: 'pointer'}} >
                <StyledTextItem > <Logout fontSize='medium' />Выйти</StyledTextItem>
              </Box>
            </Stack>
            :
            <AccountForm />
        }
      </AccordionDetails>
    </Accordion>
  );
}
