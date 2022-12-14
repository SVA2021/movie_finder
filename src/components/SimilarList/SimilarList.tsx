import {Box, Typography} from "@mui/material";
import {FC, memo, useEffect} from 'react';
import {SwipeListTemplate} from '..';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getMovieSimilarAsync, selectDetails} from '../../features/movieFinder/movieFinderSlice';

interface SimilarListProps {
    id: number
}

export const SimilarList: FC<SimilarListProps> = memo(({id}) => {

    const dispatch = useAppDispatch();
    const DetailsPage = useAppSelector(selectDetails);
    const SimilarFilms = DetailsPage.similars;

    useEffect(() => {
        dispatch(getMovieSimilarAsync(id));
    }, [id]);

    return (
        <Box pt={{xs: 2, lg: 4}} color={'common.white'} >
            <Typography ml={{lg: 15, xl: 20}} gutterBottom variant="h3" component={'h3'}>
                Похожее
            </Typography>
            <SwipeListTemplate data={SimilarFilms?.data ?? []} />
        </Box>
    );
});