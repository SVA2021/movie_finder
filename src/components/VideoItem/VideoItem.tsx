import {Box, Link, Typography} from '@mui/material';
import React, {FC} from 'react';
import {TVideoItem, TVideoItemType} from '../../features/movieFinder/movieFinderTypes';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

function getVideoItem(type: TVideoItemType) {
    switch (type) {
        case 'KINOPOISK_WIDGET':
            return LocalMoviesIcon;
        case 'YOUTUBE':
            return YouTubeIcon;
        case 'UNKNOWN':
            return LiveTvIcon;
    }
}

interface VideoItemProps {
    item: TVideoItem
}

export const VideoItem: FC<VideoItemProps> = ({item}) => {

    const VideoIcon = getVideoItem(item.site);

    return (
        <Box p={2} height={'200px'} border={'1px solid'} borderColor={'secondary.main'} borderRadius={4} >
            <Link target={'_blank'} rel={'noopener noreferrer'}
                href={item.url}
                height={'100%'}
                component={'a'}
                title={'Смотреть в новом окне'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <VideoIcon fontSize={'large'} />
                <Typography
                    variant={'body1'}
                    component={'p'}
                    color={'text.secondary'}
                    textAlign={'center'}
                >
                    {item.name}
                </Typography>
            </Link>
        </Box>
    );
};