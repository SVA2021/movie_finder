import {Box, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'; // core Swiper
import {EmptyDataBox} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieFactsAsync} from '../../features/movieFinder/movieFinderThunks';

export const FactsList: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const MovieFacts = DetailsPage.facts?.items ?? [];
  const theme = useTheme();
  const swiperRef = useRef<any>();
  const params = useParams();
  const id = Number(params.id)

  useEffect(() => {
    dispatch(getMovieFactsAsync(id))
  }, [id]);

  return (
    <Box data-testid={'facts-list'} >
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
                    component={'p'}
                    color={'text.secondary'}
                  >
                    {item.type === 'FACT' ? 'факт' : 'слух'}
                  </Typography>
                  <Typography variant="body1" component={'p'} sx={{wordBreak: 'break-word'}}>
                    {`${item.text}`}
                  </Typography>
                </Box>
              </SwiperSlide>
            )
          }
        </Swiper>
        : <EmptyDataBox />
      }
    </Box>
  );
});