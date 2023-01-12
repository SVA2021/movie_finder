import {Box, Input} from '@mui/material';
import {memo} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyledButton} from '..';
import {useAppDispatch} from '../../app/hooks';
import {setUser, TUser} from '../../features/auth/authSlice';

export const AccountForm = memo(() => {

  const dispatch = useAppDispatch();

  const sendFormData = (data: TUser) => dispatch(setUser(data));

  const {control, handleSubmit} = useForm<TUser>();
  const onSubmit: SubmitHandler<TUser> = data => sendFormData(data);


  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)} >

      <Controller
        name={'login'}
        control={control}
        defaultValue={''}
        render={({field}) => (
          <Input
            sx={{
              m: 1,
              p: 1,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              opacity: 0.5,
              '&:hover': {
                opacity: 0.75,
              },
              '&:focus-within': {
                opacity: 1,
              },
            }}
            {...field}
            fullWidth
            required
            placeholder='логин'
          />
        )}
      />
      <Controller
        name={'password'}
        control={control}
        defaultValue={''}
        render={({field}) => (
          <Input
            sx={{
              m: 1,
              p: 1,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              opacity: 0.5,
              '&:hover': {
                opacity: 0.75,
              },
              '&:focus-within': {
                opacity: 1,
              },
            }}
            {...field}
            fullWidth
            required
            placeholder='пароль'
          />
        )}
      />

      <Box textAlign={'center'} mt={2} >
        <StyledButton type={'submit'} >Войти</StyledButton>
      </Box>

    </Box>
  );
});