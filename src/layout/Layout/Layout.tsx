import {Alert, Backdrop, CircularProgress, Container, Snackbar} from "@mui/material";
import {FC, useState} from "react";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Banner} from "../../components";
import {selectError, selectStatus, setError} from "../../features/movieFinder/movieFinderSlice";
import {Footer, Header} from "../index";

export const Layout: FC = () => {

  const dispatch = useAppDispatch();
  const SERVER_STATUS = useAppSelector(selectStatus);
  const SERVER_ERROR = useAppSelector(selectError);
  const [isOpenBanner, setIsOpenBanner] = useState(true);

  const handleCloseError = () => dispatch(setError(null));
  const handleCloseBanner = () => setIsOpenBanner(false);

  return (
    <Container maxWidth='xl' sx={{minHeight: '100vh'}} data-testid={'layout'}>
      <Backdrop open={SERVER_STATUS === 'loading'} sx={{zIndex: 1000}} >
        <CircularProgress color="warning" />
      </Backdrop>
      <Header />
      {isOpenBanner && <Banner closeHandler={handleCloseBanner} />}
      <Outlet />
      <Footer />
      <Snackbar open={!!SERVER_ERROR} autoHideDuration={2500} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{width: '100%'}}>
          {SERVER_ERROR}
        </Alert>
      </Snackbar>
    </Container>
  )
};