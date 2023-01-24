import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Button, Grid, useTheme} from '@mui/material';
import {FC, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'; // core Swiper
import {EmptyDataBox} from '..';
import {SmallCard} from '../SmallCard/SmallCard';
import {SwipeListTemplateProps} from './SwiperListTemplate.types';

export const SwipeListTemplate: FC<SwipeListTemplateProps> = ({data}) => {
  const theme = useTheme();
  const swiperRef = useRef<any>();

  const swipePrev = () => swiperRef.current.slidePrev();
  const swipeNext = () => swiperRef.current.slideNext();

  return (
    <Grid container
      m={0}
      spacing={0}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgcolor={'primary.main'}
    >
      {data.length > 0
        ? <>
          <Grid item
            lg={1}
            justifyContent={'center'}
            sx={{display: {xs: 'none', lg: 'flex'}}}
          >
            <Button onClick={swipePrev}>
              <NavigateBeforeIcon fontSize='large' />
            </Button>
          </Grid>
          <Grid item xs={12} lg={10} >
            <Swiper
              onSwiper={(swiper) => swiperRef.current = swiper}
              slidesPerView={1}
              spaceBetween={8}
              breakpoints={
                {
                  [theme.breakpoints.values.md]: {
                    slidesPerView: 4,
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
                data.map((item, index) =>
                  <SwiperSlide key={index} >
                    <SmallCard item={item} />
                  </SwiperSlide>
                )
              }
            </Swiper>
          </Grid>
          <Grid item
            lg={1}
            justifyContent={'center'}
            sx={{display: {xs: 'none', lg: 'flex'}}}
          >
            <Button onClick={swipeNext}>
              <NavigateNextIcon fontSize='large' />
            </Button>
          </Grid>
        </>
        :
        <Grid item xs={12}>
          <EmptyDataBox />
        </Grid>
      }
    </Grid>
  );
};