import {Box, Typography} from "@mui/material";
import {FC, memo, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {SwipeListTemplate} from '..';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDetails} from '../../features/movieFinder/movieFinderSlice';
import {getMovieSimilarAsync} from "../../features/movieFinder/movieFinderThunks";

export const SimilarList: FC = memo(() => {

  const dispatch = useAppDispatch();
  const DetailsPage = useAppSelector(selectDetails);
  const SimilarFilms = DetailsPage.similars;
  const params = useParams();
  const id = Number(params.id)

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