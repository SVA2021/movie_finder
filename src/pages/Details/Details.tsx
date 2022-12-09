import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RatingBadge, StyledLink} from "../../components";
import {getMovieDataAsync, selectDetails} from "../../features/movieFinder/movieFinderSlice";
import {getTimeFromMinutes} from "../../utils";

export const Details: FC = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const movie = useAppSelector(selectDetails);

    useEffect(() => {
        dispatch(getMovieDataAsync(Number(params.id)))
    }, [params.id]);

    const kinopoiskLink = movie?.webUrl ?? `https://www.kinopoisk.ru/${movie?.type === 'FILM' ? 'film' : 'series'}/${movie?.kinopoiskId}/`;
    const imdbLink = `https://www.imdb.com/title/${movie?.imdbId}/`;

    console.log(movie);

    return (
        <Box p={1}>

            <Card sx={{bgcolor: 'primary.main', position: 'relative'}} >

                <Grid container color={'common.white'} spacing={{xs: 0, lg: 4}} >
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            width="100%"
                            image={movie?.posterUrl}
                            alt={movie?.nameRu?.toString() || movie?.nameEn?.toString() || ''}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <CardContent>
                            <Box pb={{lg: 4}}>
                                <Typography gutterBottom variant="h3" component={'h3'} textTransform={'capitalize'}>
                                    {movie?.nameRu}
                                </Typography>
                                <Typography gutterBottom variant={'body1'} fontStyle={'italic'} component={'p'} textTransform={'capitalize'}>
                                    {movie?.nameEn ?? movie?.nameOriginal}
                                </Typography>
                                <Typography gutterBottom variant={'body1'} component={'p'} color={'text.secondary'} >
                                    {movie?.slogan}
                                </Typography>
                            </Box>
                            <Grid container>
                                <Grid item xs={12} md={8}>
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        length: {getTimeFromMinutes(movie?.filmLength)}
                                    </Typography>
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        countries: {movie?.countries.map((v) => v.country).join(', ')}
                                    </Typography>
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        year: {movie?.year}
                                    </Typography>
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        genres: {movie?.genres.map((v) => v.genre).join(', ')}
                                    </Typography>
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        {movie?.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <CardActionArea>
                                        <StyledLink href={kinopoiskLink} title={'KinoPoisk'} />
                                        <StyledLink href={imdbLink} title={'IMDB'} />
                                    </CardActionArea>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <RatingBadge rating={movie?.ratingKinopoisk ?? movie?.ratingImdb} position={"right"} />
                </Grid>

            </Card>

            <Box m={1}  >
                other data
            </Box>
        </Box>
    )
};