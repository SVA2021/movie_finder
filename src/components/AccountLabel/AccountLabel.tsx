import {AccountCircle} from '@mui/icons-material';
import {FC} from 'react';
import {useAppSelector} from '../../app/hooks';
import {StyledTextItem} from '../../components';
import {selectUser} from '../../features/auth/authSlice';

export const AccountLabel: FC = () => {

  const userName = useAppSelector(selectUser)?.login ?? 'Гость';

  return (
    <StyledTextItem alignItems={'flexEnd'} >
      <AccountCircle fontSize='medium' />
      {userName}
    </StyledTextItem>
  );
};