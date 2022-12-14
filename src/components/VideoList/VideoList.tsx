import {Box, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {VideoItem} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMovieVideosAsync, selectDetails} from '../../features/movieFinder/movieFinderSlice';

interface VideoListProps {
    id: number
}

export const VideoList: FC<VideoListProps> = memo(({id}) => {

    const dispatch = useAppDispatch();
    const DetailsPage = useAppSelector(selectDetails);
    const MovieTrailers = DetailsPage.videos?.items ?? [];
    const theme = useTheme();
    const swiperRef = useRef<any>();

    useEffect(() => {
        dispatch(getMovieVideosAsync(id))
    }, [id]);

    return (
        <Box>
            {MovieTrailers.length > 0
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
                        MovieTrailers.map((item, index) =>
                            <SwiperSlide key={index} >
                                <VideoItem item={item} />
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