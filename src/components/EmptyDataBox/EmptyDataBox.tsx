import {Typography} from '@mui/material';
import React, {memo} from 'react';

export const EmptyDataBox = memo(() => {
  return (
    <Typography
      variant="h3"
      component={'p'}
      fontStyle={'italic'}
      textAlign={'center'}
      minHeight={{xs: '100px', lg: '200px'}}
      lineHeight={{xs: '100px', lg: '200px'}}
      color={'action.hover'}
    >
      Нет данных
    </Typography>
  );
});