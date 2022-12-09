import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {RatingBadge} from "../../components";
import {TSmallCard} from "../../features/movieFinder/movieFinderTypes";
import {normalizeTimeString} from "../../utils";

interface TSmallCardProps {
	item: TSmallCard
}

export const SmallCard: FC<TSmallCardProps> = ({item}) => {

	const {id, nameRu, nameEn, year, filmLength, rating, posterUrlPreview} = item;
	const navigate = useNavigate();
	const time = normalizeTimeString(filmLength);

	function getDetails() {
		navigate(`details/${id}`);
	}

	return (
		<Card data-testid={'smallCard'} sx={{position: 'relative', }}>
			<CardActionArea onClick={() => getDetails()} sx={{position: 'relative', height: '100%'}}>
				<CardMedia
					component="img"
					width="100%"
					image={posterUrlPreview}
					alt={nameRu?.toString() || nameEn?.toString() || ''}
				/>
				<CardContent>
					<Typography gutterBottom variant="body1" component="p">{nameRu}</Typography>
					{nameEn &&
						<Typography fontStyle={'italic'} gutterBottom variant="body2" component="p">
							{nameEn}
						</Typography>}
					<Typography variant="body1" component="p">
						{year},  {time}
					</Typography>
				</CardContent>
			</CardActionArea>
			<RatingBadge rating={rating} position={'left'} />
		</Card>
	)
};