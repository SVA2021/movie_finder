import {Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography} from "@mui/material";
import {FC, memo, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {MovieDataTable, RatingTable, StyledLink} from '..';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieDataAsync} from "../../features/movieFinder/movieFinderThunks";

export const FullCard: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const movie = DetailsPage.movie;
  const params = useParams();
  const id = Number(params.id)

  useEffect(() => {
    dispatch(getMovieDataAsync(id));
  }, [id]);

  const kinopoiskLink = movie?.webUrl ?? `https://www.kinopoisk.ru/${movie?.type === 'FILM' ? 'film' : 'series'}/${movie?.kinopoiskId}/`;
  const imdbLink = `https://www.imdb.com/title/${movie?.imdbId}/`;
  const ageLimit = (movie?.ratingAgeLimits ?? '').slice(3, 5);

  return (
    <Card sx={{bgcolor: 'primary.main', position: 'relative'}} >
      <Grid container color={'common.white'} spacing={{xs: 0, lg: 4}} >
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            width="100%"
            image={movie?.posterUrl}
            alt={movie?.nameRu?.toString() || movie?.nameEn?.toString() || ''}
          />
          <CardActionArea>
            <Grid container spacing={{xs: 0, lg: 1}} >
              <Grid item xs={12} lg={6} >
                <StyledLink href={kinopoiskLink} title={'KinoPoisk'} />
              </Grid>
              <Grid item xs={12} lg={6} >
                <StyledLink href={imdbLink} title={'IMDB'} />
              </Grid>
            </Grid>
          </CardActionArea>
          <Box mb={1} sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
            <RatingTable movie={movie} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} >
          <CardContent>
            <Box pb={{lg: 4}}>
              <Grid container spacing={{xs: 0, lg: 1}} >
                <Grid item xs={12} md={11} >
                  <Typography gutterBottom variant="h3" component={'h3'} >
                    {movie?.nameRu}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={1} >
                  {movie?.ratingAgeLimits &&
                    <Avatar sx={{bgcolor: 'action.hover', fontWeight: '900'}} variant={'square'} >
                      {ageLimit}+
                    </Avatar>
                  }
                </Grid>
              </Grid>
              <Rating max={10} precision={0.1} value={movie?.ratingKinopoisk ?? movie?.ratingImdb ?? null} readOnly />
              <Typography gutterBottom variant={'body1'} fontStyle={'italic'} component={'p'} >
                {movie?.nameEn ?? movie?.nameOriginal}
              </Typography>
              <Typography gutterBottom variant={'body1'} component={'p'} color={'text.secondary'} >
                {movie?.slogan}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <MovieDataTable movie={movie} />
              </Grid>
              <Grid item xs={12} lg={4} sx={{display: {xs: 'block', md: 'none', lg: 'block'}}}>
                <RatingTable movie={movie} />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
});