import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { convertRatingToColor } from "../../features/movieFinder/functions";
import { TSearchItem, TSmallCard } from "../../features/movieFinder/movieFinderTypes";

interface TSmallCardProps {
	item: TSmallCard | TSearchItem
	handleClick: (n: number) => void
}

const SmallCard = (props: TSmallCardProps): JSX.Element => {

	const { nameRu, nameEn, year, posterUrlPreview } = props.item;

	//properties below has difference type for same keys or different keys for same data
	const filmId = ('filmId' in props.item) ? props.item.filmId : props.item.kinopoiskId;
	const rating = ('rating' in props.item) ? props.item.rating : props.item.ratingKinopoisk;
	const filmLength = ('filmLength' in props.item) ? props.item.filmLength : null;
	
	const handleClick = props.handleClick;
	const ratingColored = convertRatingToColor(Number(rating));

	return (
		<Card data-testid={'smallCard'} sx={{ position: 'relative' }}>
			<CardActionArea onClick={() => handleClick(filmId)}>
				<CardMedia
					component="img"
					width="100%"
					image={posterUrlPreview}
					alt={nameRu?.toString() || ''}
				/>
				<CardContent>
					<Typography variant="body1" component="p">{nameRu}</Typography>
					{nameEn && <Typography variant="body1" component="p">{nameEn}</Typography>}
					<Typography variant="body1" component="p">{year}</Typography>
					{filmLength && <Typography variant="body1" component="p">{filmLength}</Typography>}
					<Typography variant="h3" component="p" sx={{
						position: 'absolute',
						top: 0,
						left: 0,
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