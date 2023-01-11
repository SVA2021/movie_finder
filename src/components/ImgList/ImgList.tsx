import {Box, Paper, Typography, useTheme} from '@mui/material';
import {FC, memo, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieImagesAsync} from '../../features/movieFinder/movieFinderThunks';

export const ImgList: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const Images = DetailsPage.images?.items ?? [];
  const theme = useTheme();
  const swiperRef = useRef<any>();
  const params = useParams();
  const id = Number(params.id)

  const [fullImage, setFullImage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getMovieImagesAsync(id))
  }, [id]);

  return (
    <Box minHeight={'200px'} >
      {Images.length > 0
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
            Images.map((item, index) =>
              <SwiperSlide key={index} >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => setFullImage(item.imageUrl)}
                >
                  <img
                    height={'200px'}
                    src={item.previewUrl}
                    alt={item.previewUrl}
                    title={'открыть полную версию'}
                  />
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
      {fullImage &&
        <Paper elevation={24} >
          <Box
            p={{xs: 1, md: 2, lg: 4}}
            zIndex={10000}
            bgcolor={'primary.main'}
            sx={{
              position: 'fixed',
              inset: 0,
              height: '100vh',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setFullImage(null)}
          >
            <img src={fullImage} alt="full version" width={'auto'} height={'100%'} />
          </Box>
        </Paper>
      }
    </Box>
  );
});