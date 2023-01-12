import {AccountCircle, ExpandMore, Logout} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Stack} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {AccountForm, AccountLabel, StyledTextItem} from '../../components';
import {selectIsAuth, setUser} from '../../features/auth/authSlice';

export const AccountMenu = () => {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const logoutUser = () => dispatch(setUser(null));

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-account"
        id="panel-account"
      >
        <StyledTextItem ><AccountCircle fontSize='medium' />Аккаунт</StyledTextItem>
      </AccordionSummary>
      <AccordionDetails>
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
