import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { convertNumToTime, convertRatingToColor } from "../../features/movieFinder/functions";
import { TSmallCard } from "../../features/movieFinder/movieFinderTypes";

const SmallCard = (props: { item: TSmallCard, handleClick: (n: number) => void }): JSX.Element => {

	const { filmId, nameRu, nameEn, year, rating, filmLength, posterUrlPreview } = props.item;
	const handleClick = props.handleClick;
	const filmLengthString = convertNumToTime(filmLength);
	const ratingColored = convertRatingToColor(rating);

	return (
		<Card data-testid={'smallCard'} sx={{ position: 'relative' }}>
			<CardActionArea onClick={() => handleClick(filmId)}>
				<CardMedia
					component="img"
					width="100%"
					image={posterUrlPreview}
					alt={nameEn?.toString()}
				/>
				<CardContent>
					<Typography variant="body1" component="p">{nameRu}</Typography>
					<Typography variant="body1" component="p">{nameEn}</Typography>
					<Typography variant="body1" component="p">{year}</Typography>
					<Typography variant="body1" component="p">{filmLengthString}</Typography>
					<Typography variant="h3" component="p" sx={{
						position: 'absolute',
						top: 0,
						left: '-8px',
						padding: '0px 12px',
						backgroundColor: ratingColored,
						color: 'common.white',
					}}>
						{rating}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default SmallCard;