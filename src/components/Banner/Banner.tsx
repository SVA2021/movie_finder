import CloseIcon from '@mui/icons-material/Close';
import {Box, Typography, useTheme} from "@mui/material";
import {FC} from "react";
import {StyledButton} from "..";

interface BannerProps {
  closeHandler: () => void
}

export const Banner: FC<BannerProps> = ({closeHandler}) => {

  const theme = useTheme();
  const sva = 'sva'.split('');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeHandler();
  }

  return (
    <Box
      component={'a'}
      href={'https://github.com/SVA2021/movie_finder'}
      target={'_blank'}
      rel={'noopener noreferref'}
      sx={{
        mt: 2,
        mb: 2,
        position: 'relative',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'common.white',
        textDecoration: 'none',
        cursor: 'pointer',
        borderRadius: 4,
        "&:hover": {
          boxShadow: `8px 8px 8px ${theme.palette.action.hover},
					-8px -8px 8px ${theme.palette.action.hover}`,
        },
      }}
    >
      {
        sva.map((letter) =>
          <Typography variant="caption" component={'span'} key={letter}
            sx={{
              m: 2,
              transition: 'all 0.2s ease-in-out',
              textTransform: 'uppercase',
              textAlign: 'center',
              color: 'transparent',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: theme.palette.action.focus,
              '&:hover': {
                WebkitTextStrokeColor: theme.palette.action.hover,
              },
            }}
          >
            {letter}
          </Typography>
        )
      }

      <Box sx={{position: 'absolute', top: 4, right: 4}}>
        <StyledButton onClick={handleClick} ><CloseIcon fontSize='small' /></StyledButton>
      </Box>

    </Box>
  )
}