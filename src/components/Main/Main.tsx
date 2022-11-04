import { Box, Pagination } from "@mui/material";
import { useEffect } from "react";
// import { fakeSmallCard } from "../../features/movieFinder/fakeData";
import { movieFinderAPI } from "../../features/movieFinder/movieFinderAPI";
import {Home} from "../../pages/Home/Home";
// import SearchResult from "../SearchResult/SearchResult";
// import SmallCard from "../SmallCard/SmallCard";

export  const Main = () => {

	useEffect(() => {
		// movieFinderAPI.getTopList('TOP_100_POPULAR_FILMS', 7);
		// movieFinderAPI.getMovieData(555);
		// movieFinderAPI.getSeries(2);
		// movieFinderAPI.getMoviesByKeyword('hobbits');
	}, [])
	
	
	return (
		<Box sx={{
			// display: 'flex',
			// alignItems: 'center',
			// justifyContent: 'space-between',
			// bgcolor: 'action.hover',
			mt: 2,
		}}>
			{/* <SearchResult /> */}
			<Home/>
		</Box>
	)
}

// export default Main;