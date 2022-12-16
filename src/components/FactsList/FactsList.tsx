import {Box, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMovieFactsAsync, selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {TMovieExtraProps} from '../../features/movieFinder/movieFinderTypes';

export const FactsList: FC<TMovieExtraProps> = memo(({id}) => {

    const dispatch = useAppDispatch();
    const DetailsPage = useAppSelector(selectDetails);
    const MovieFacts = DetailsPage.facts?.items ?? [];
    const theme = useTheme();
    const swiperRef = useRef<any>();

    useEffect(() => {
        dispatch(getMovieFactsAsync(id))
    }, [id]);

    return (
        <Box>
            {MovieFacts.length > 0
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
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }
                    }
                >
                    {
                        MovieFacts.map((item, index) =>
                            <SwiperSlide key={index} >
                                <Box sx={{cursor: 'pointer'}} >
                                    <Typography
                                        pb={2}
                                        variant="h4"
                                        textTransform={'capitalize'}
                                        component={'p'} color={'text.secondary'}
                                    >
                                        {item.type === 'FACT' ? 'факт' : 'слух'}
                                    </Typography>
                                    <Typography variant="body1" component={'p'} sx={{wordBreak: 'break-word', }}>
                                        {`${item.text}`}
                                    </Typography>
                                </Box>
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