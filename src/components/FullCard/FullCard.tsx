import {Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {FC, memo, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {StyledLink} from '..';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieDataAsync} from "../../features/movieFinder/movieFinderThunks";
import {getTimeFromMinutes} from '../../utils';

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

  function createData(
    name: string,
    rating: string,
    counts: string,
  ) {
    return {name, rating, counts, };
  }

  const rows = [
    createData('Kinopoisk', `${movie?.ratingKinopoisk ?? ' - '}`, `${movie?.ratingKinopoiskVoteCount ?? ' - '}`),
    createData('Imdb', `${movie?.ratingImdb ?? ' - '}`, `${movie?.ratingImdbVoteCount ?? ' - '}`),
    createData('Await', `${movie?.ratingAwait ?? ' - '}`, `${movie?.ratingAwaitCount ?? ' - '}`),
    createData('RfCritics', `${movie?.ratingRfCritics ?? ' - '}`, `${movie?.ratingRfCriticsVoteCount ?? ' - '}`),
    createData('FilmCritics', `${movie?.ratingFilmCritics ?? ' - '}`, `${movie?.ratingFilmCriticsVoteCount ?? ' - '}`),
    createData('GoodReview', `${movie?.ratingGoodReview ?? ' - '}`, `${movie?.ratingGoodReviewVoteCount ?? ' - '}`),
  ]

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
        </Grid>
        <Grid item xs={12} md={8} >
          <CardContent>
            <Box pb={{lg: 4}}>
              <Typography gutterBottom variant="h3" component={'h3'} textTransform={'capitalize'}>
                {movie?.nameRu}
              </Typography>
              <Rating max={10} precision={0.1} value={movie?.ratingKinopoisk ?? movie?.ratingImdb ?? null} readOnly />
              <Typography gutterBottom variant={'body1'} fontStyle={'italic'} component={'p'} textTransform={'capitalize'}>
                {movie?.nameEn ?? movie?.nameOriginal}
              </Typography>
              <Typography gutterBottom variant={'body1'} component={'p'} color={'text.secondary'} >
                {movie?.slogan}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                {movie?.ratingAgeLimits &&
                  <Avatar sx={{bgcolor: 'action.hover', fontWeight: '900'}} variant={'square'} >{ageLimit}+</Avatar>
                }
                <Typography mt={2} gutterBottom variant={'body1'} component={'p'} >
                  Длительность: {getTimeFromMinutes(movie?.filmLength)}
                  <br />
                  Страны: {movie?.countries.map((v) => v.country).join(', ')}
                  <br />
                  Год: {movie?.year}
                  <br />
                  Жанр: {movie?.genres.map((v) => v.genre).join(', ')}
                  <br />
                  <br />
                  {movie?.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>

                <TableContainer component={Paper}>
                  <Table aria-label="Рейтинги" sx={{maxWidth: '100%'}} >
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={3} align={'center'} >Рейтинги</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align={'center'}  padding={'none'} >источник</TableCell>
                        <TableCell align={'center'}  padding={'none'} >рейтинг</TableCell>
                        <TableCell align={'center'}  padding={'none'} >голосов</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                          <TableCell component="th" scope="row" align={'center'} padding={'none'}>
                            {row.name}
                          </TableCell>
                          <TableCell align={'center'} padding={'none'} >{row.rating}</TableCell>
                          <TableCell align={'center'} padding={'none'} >{row.counts}</TableCell>
                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>
                </TableContainer>

                {/* <Box>
                  <Typography gutterBottom variant={'body1'} component={'p'} color={'text.secondary'} >
                    Рейтинги
                  </Typography>
                  <Typography gutterBottom variant={'body1'} component={'p'} >
                    Kinopoisk: {movie?.ratingKinopoisk ?? ' - '} / {movie?.ratingKinopoiskVoteCount ?? ' - '}
                    <br />
                    Imdb: {movie?.ratingImdb ?? ' - '} / {movie?.ratingImdbVoteCount ?? ' - '}
                    <br />
                    Await: {movie?.ratingAwait ?? ' - '} / {movie?.ratingAwaitCount ?? ' - '}
                    <br />
                    RfCritics: {movie?.ratingRfCritics ?? ' - '} / {movie?.ratingRfCriticsVoteCount ?? ' - '}
                    <br />
                    FilmCritics: {movie?.ratingFilmCritics ?? ' - '} / {movie?.ratingFilmCriticsVoteCount ?? ' - '}
                    <br />
                    GoodReview: {movie?.ratingGoodReview ?? ' - '} / {movie?.ratingGoodReviewVoteCount ?? ' - '}
                  </Typography>
                  <Typography gutterBottom variant={'body1'} component={'p'} >
                    Количество рецензий: {movie?.reviewsCount ?? ' - '}
                  </Typography>
                </Box> */}

              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
});