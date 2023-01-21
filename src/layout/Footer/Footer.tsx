import {Box, Grid, Typography} from '@mui/material';
import {FC} from 'react';
import {StyledLink} from '../../components';

const LINKS = [
  {
    title: 'Backend API',
    href: 'https://kinopoiskapiunofficial.tech/',
  },
  {
    title: 'Портфолио SVA',
    href: 'https://portfolio-sva2021.vercel.app/',
  },
  {
    title: 'Github SVA',
    href: 'https://github.com/SVA2021',
  },
  {
    title: 'Code',
    href: 'https://github.com/SVA2021/movie_finder',
  },
]

export const Footer: FC = () => {
  return (
    <Box mt={2} sx={{flexGrow: 1}}>
      <Grid container>
        {
          LINKS.map((link, index) =>
            <Grid item xs={12} md={3} key={index}>
              <StyledLink href={link.href} title={link.title} />
            </Grid>
          )
        }
      </Grid>
      <Typography gutterBottom component={'p'} textAlign={'center'} color={'secondary'} >
        SVA	2023
      </Typography>
    </Box>
  )
};