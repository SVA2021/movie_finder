import {Backdrop, CircularProgress, Container} from "@mui/material";
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {Banner} from "../../components";
import {selectStatus} from "../../features/movieFinder/movieFinderSlice";
import {Footer, Header} from "../index";

export const Layout = () => {
  const SERVER_STATUS = useAppSelector(selectStatus);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container
      maxWidth='xl'
      sx={{minHeight: '100vh'}} >
      <Backdrop open={SERVER_STATUS === 'loading'} sx={{zIndex: 1000}} >
        <CircularProgress color="warning" />
      </Backdrop>
      <Header />
      {isOpen && <Banner closeHandler={() => setIsOpen(false)} />}
      <Outlet />
      <Footer />
    </Container>
  )
};