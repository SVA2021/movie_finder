import {Box, Card, CardContent, CardMedia, Checkbox, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'; // core Swiper
import {EmptyDataBox} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieAwardsAsync} from '../../features/movieFinder/movieFinderThunks';

export const AwardsList: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const MovieAwards = DetailsPage.awards?.items ?? [];
  const theme = useTheme();
  const swiperRef = useRef<any>();
  const params = useParams();
  const id = Number(params.id)

  useEffect(() => {
    dispatch(getMovieAwardsAsync(id))
  }, [id]);

  return (
    <Box >
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
                      <br />
                      {item.nominationName}
                    </Typography>
                    <Typography variant="body1" component="p">
                      Выиграна? <Checkbox checked={item.win} color={'secondary'} />
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            )
          }
        </Swiper>
        : <EmptyDataBox />
      }
    </Box>
  );
});