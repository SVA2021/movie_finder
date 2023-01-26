import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FC, memo} from 'react';
import {TFullCard} from "../../features/movieFinder/movieFinderTypes";

interface RatingTableProps {
  movie: TFullCard | null
}

export const RatingTable: FC<RatingTableProps> = memo(({movie}) => {

  function createData(
    name: string,
    rating: string,
    counts: string,
  ) {
    return {name, ratingSummary: `${rating} / ${counts}`};
  }

  const rows = [
    createData('Kinopoisk', `${movie?.ratingKinopoisk ?? ' - '}`, `${movie?.ratingKinopoiskVoteCount ?? ' - '}`),
    createData('Imdb', `${movie?.ratingImdb ?? ' - '}`, `${movie?.ratingImdbVoteCount ?? ' - '}`),
    createData('Await', `${movie?.ratingAwait ?? ' - '}`, `${movie?.ratingAwaitCount ?? ' - '}`),
    createData('RfCritics', `${movie?.ratingRfCritics ?? ' - '}`, `${movie?.ratingRfCriticsVoteCount ?? ' - '}`),
    createData('FilmCritics', `${movie?.ratingFilmCritics ?? ' - '}`, `${movie?.ratingFilmCriticsVoteCount ?? ' - '}`),
    createData('GoodReview', `${movie?.ratingGoodReview ?? ' - '}`, `${movie?.ratingGoodReviewVoteCount ?? ' - '}`),
    {name: 'Количество рецензий', ratingSummary: movie?.reviewsCount ?? ' - '},
  ]

  return (
    <TableContainer component={Paper} data-testid={'rating-table'} >
      <Table aria-label="Рейтинги" sx={{maxWidth: '100%'}} >
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align={'center'} >Рейтинги</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row" align={'left'} padding={'checkbox'} sx={{border: 'none'}} >
                {row.name}
              </TableCell>
              <TableCell align={'center'} padding={'normal'} sx={{border: 'none'}}>
                {row.ratingSummary}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});