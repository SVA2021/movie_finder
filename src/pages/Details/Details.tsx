import {Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Tab, Tabs, Typography} from "@mui/material";
import {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {StyledLink, SwipeListTemplate} from "../../components";
import {getMovieDataAsync, getMovieSimilarAsync, selectDetails} from "../../features/movieFinder/movieFinderSlice";
import {getTimeFromMinutes} from "../../utils";

export const Details: FC = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const DetailsPage = useAppSelector(selectDetails);
    const movie = DetailsPage.movie;
    const SimilarFilms = DetailsPage.similars;

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        dispatch(getMovieDataAsync(Number(params.id)));
        dispatch(getMovieSimilarAsync(Number(params.id)));
    }, [params.id]);

    const kinopoiskLink = movie?.webUrl ?? `https://www.kinopoisk.ru/${movie?.type === 'FILM' ? 'film' : 'series'}/${movie?.kinopoiskId}/`;
    const imdbLink = `https://www.imdb.com/title/${movie?.imdbId}/`;
    const ageLimit = (movie?.ratingAgeLimits ?? '').slice(3, 5);

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

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
                                    {movie?.ratingAgeLimits && <Avatar>{ageLimit}+</Avatar>}
                                    <Typography gutterBottom variant={'body1'} component={'p'} >
                                        длительность: {getTimeFromMinutes(movie?.filmLength)}
                                        <br />
                                        страны: {movie?.countries.map((v) => v.country).join(', ')}
                                        <br />
                                        год: {movie?.year}
                                        <br />
                                        жанры: {movie?.genres.map((v) => v.genre).join(', ')}
                                        <br />
                                        <br />
                                        {movie?.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box>
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
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>

            <Box pt={{xs: 2, lg: 4}} color={'common.white'} >
                <Tabs aria-label="tabs"
                    value={activeTab}
                    onChange={handleChangeTabs}
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab label="Videos" />
                    <Tab label="Images" />
                    <Tab label="Awards" />
                    <Tab label="Facts" />
                </Tabs>
                <Box>

                </Box>
            </Box>

            <Box pt={{xs: 2, lg: 4}} color={'common.white'} >
                <Typography ml={{lg: 15, xl: 20}} gutterBottom variant="h3" component={'h3'}>
                    Похожее
                </Typography>
                <SwipeListTemplate data={SimilarFilms?.data ?? []} />
            </Box>

        </Box>
    )
};