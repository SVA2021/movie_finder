import CloseIcon from '@mui/icons-material/Close';
import {Box, Button} from '@mui/material';
import {FC, memo} from 'react';

interface ModalBoxProps {
  closeHandler: () => void
  children: any
}

export const ModalBox: FC<ModalBoxProps> = memo(({children, closeHandler}) => {
  return (
    <Box
      data-testid={'modal-box'}
      margin={'0 auto'}
      p={{xs: 1, md: 2, lg: 4}}
      zIndex={1000}
      bgcolor={'primary.main'}
      sx={{
        position: 'fixed',
        inset: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
      <Box
        sx={{
          position: 'absolute',
          top: {xs: 10, md: 32},
          right: {xs: 10, md: 32}
        }}>
        <Button onClick={closeHandler} >
          <CloseIcon fontSize='small' />
        </Button>
      </Box>
    </Box>
  );
});