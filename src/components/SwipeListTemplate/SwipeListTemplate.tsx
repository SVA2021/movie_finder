import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Grid, useTheme} from '@mui/material';
import {FC, useRef} from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SmallCard} from '../SmallCard/SmallCard';
import {StyledButton} from '../Styled_Button/Styled_Button';
import {SwipeListTemplateProps} from './SwiperListTemplate.types';

export const SwipeListTemplate: FC<SwipeListTemplateProps> = ({data}) => {
    const theme = useTheme();
    const swiperRef = useRef<any>();

    return (
        <Grid container
            margin={0}
            spacing={0}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{bgcolor: 'primary.main'}}
        >
            <Grid item lg={1}
                sx={{
                    display: {xs: 'none', lg: 'flex', },
                    justifyContent: 'center',
                }}
            >
                <StyledButton onClick={() => swiperRef.current.slidePrev()}>
                    <NavigateBeforeIcon fontSize='large' />
                </StyledButton>
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
                                slidesPerView: 6,
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
            <Grid item lg={1}
                sx={{
                    display: {xs: 'none', lg: 'flex', },
                    justifyContent: 'center',
                }}
            >
                <StyledButton onClick={() => swiperRef.current.slideNext()}>
                    <NavigateNextIcon fontSize='large' />
                </StyledButton>
            </Grid>
        </Grid>
    );
};