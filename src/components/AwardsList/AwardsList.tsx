import {Box, Card, CardContent, CardMedia, Checkbox, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMovieAwardsAsync, selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {TMovieExtraProps} from '../../features/movieFinder/movieFinderTypes';

export const AwardsList: FC<TMovieExtraProps> = memo(({id}) => {

    const dispatch = useAppDispatch();
    const DetailsPage = useAppSelector(selectDetails);
    const MovieAwards = DetailsPage.awards?.items ?? [];
    const theme = useTheme();
    const swiperRef = useRef<any>();

    useEffect(() => {
        dispatch(getMovieAwardsAsync(id))
    }, [id]);

    return (
        <Box>
            {MovieAwards.length > 0
                ? <Swiper
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    slidesPerView={1}
                    spaceBetween={8}
                    breakpoints={
                        {
                            [theme.breakpoints.values.md]: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            [theme.breakpoints.values.lg]: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                        }
                    }
                >
                    {
                        MovieAwards.map((item, index) =>
                            <SwiperSlide key={index} >
                                <Card
                                    sx={{
                                        p: 2,
                                        bgcolor: 'primary.main',
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: 'secondary.main',
                                        color: 'common.white',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={item.imageUrl}
                                        alt={item.name}
                                        height={'200'}
                                        sx={{objectFit: 'contain'}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body1" component="p" color={'secondary.main'} >
                                            {item.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            Год номинации: {item.year}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            {item.nominationName}
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            Выиграна? <Checkbox checked={item.win} />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                :
                <Typography variant="h3" component={'p'} fontStyle={'italic'}>
                    Нет данных
                </Typography>
            }
        </Box>
    );
});