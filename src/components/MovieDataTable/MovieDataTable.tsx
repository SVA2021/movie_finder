import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {FC, memo} from 'react';
import {TFullCard} from "../../features/movieFinder/movieFinderTypes";
import {getTimeFromMinutes} from "../../utils";

interface MovieDataTableProps {
  movie: TFullCard | null
}

export const MovieDataTable: FC<MovieDataTableProps> = memo(({movie}) => {

  const createData = (name: string, description: string | number,) => ({name, description});

  const rows = [
    createData('Время', getTimeFromMinutes(movie?.filmLength)),
    createData('Страны', movie?.countries.map((v) => v.country).join(', ') ?? ' - '),
    createData('Год', movie?.year ?? ' - '),
    createData('Жанр', movie?.genres.map((v) => v.genre).join(', ') ?? ' - '),
    createData('', movie?.description ?? ' - '),
  ]

  return (
    <TableContainer component={Paper}>
      <Table aria-label="основная информация" sx={{maxWidth: '100%'}} >
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align={'left'} padding={'none'} sx={{border: 'none'}} >
                <Typography variant="body1">
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align={'left'} sx={{border: 'none'}}>
                <Typography variant="body1">
                  {row.description}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});