import {Box, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'; // core Swiper
import {EmptyDataBox, VideoItem} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieVideosAsync} from '../../features/movieFinder/movieFinderThunks';

export const VideoList: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const MovieTrailers = DetailsPage.videos?.items ?? [];
  const theme = useTheme();
  const swiperRef = useRef<any>();
  const params = useParams();
  const id = Number(params.id)

  useEffect(() => {
    dispatch(getMovieVideosAsync(id))
  }, [id]);

  return (
    <Box data-testid={'video-list'}>
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
        : <EmptyDataBox />
      }
    </Box>
  );
});