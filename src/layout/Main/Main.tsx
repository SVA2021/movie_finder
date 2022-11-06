import {Container, Skeleton} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {selectStatus} from "../../features/movieFinder/movieFinderSlice";
import {Home} from "../../pages";

export const Main = () => {
	const SERVER_STATUS = useAppSelector(selectStatus);

	return (
		<Container maxWidth='xl' sx={{minHeight: '100vh'}} >
			{
				SERVER_STATUS === 'loading'
					? <Skeleton />
					: <Routes>
						<Route path='/' element={<Home />} />
					</Routes>
			}
		</Container>
	)
};