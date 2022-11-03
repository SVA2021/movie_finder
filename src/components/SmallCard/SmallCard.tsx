import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {FC} from 'react';
import {getColorFromRate, normalizeTimeString} from "../../features/movieFinder/functions";
import {TSmallCard} from "../../features/movieFinder/movieFinderTypes";

interface TSmallCardProps {
	item: TSmallCard
}

export const SmallCard: FC<TSmallCardProps> = ({item}) => {

	const {id, nameRu, nameEn, year, filmLength, rating, posterUrlPreview} = item;

	const ratingColored = getColorFromRate(Number(rating));
	const time = normalizeTimeString(filmLength);

	return (
		<Card data-testid={'smallCard'} sx={{position: 'relative', height: '100%'}}>
			<Grid container direction={{xs: 'row', md: 'column'}} >
				<Grid item xs={7} md={12} >
					<CardMedia
						component="img"
						width="100%"
						image={posterUrlPreview}
						alt={nameRu?.toString() || nameEn?.toString() || ''}
						sx={{height: {md: '34vw', lg: '20vw', xl: '16vw'}}}
					/>
				</Grid>
				<Grid item xs={5} md={12}>
					<CardContent>
						<Typography gutterBottom variant="body1" component="p">{nameRu}</Typography>
						{nameEn && <Typography gutterBottom variant="body1" component="p">{nameEn}</Typography>}
						<Typography gutterBottom variant="body1" component="p">
							{year}г,  {time}
						</Typography>
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
				</Grid>
			</Grid>
		</Card>
	)
}