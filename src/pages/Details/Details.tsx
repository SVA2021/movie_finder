import {Box, Tab, Tabs} from "@mui/material";
import {FC, useState} from 'react';
import {AwardsList, FactsList, FullCard, ImgList, SimilarList, VideoList} from "../../components";
import {TMovieExtraType} from "../../features/movieFinder/movieFinderTypes";


export const Details: FC = () => {

  const [activeTab, setActiveTab] = useState<TMovieExtraType>('videos');

  const SECTIONS = {
    videos: <VideoList />,
    images: <ImgList />,
    awards: <AwardsList />,
    facts: <FactsList />,
  }

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: TMovieExtraType) => {
    setActiveTab(newValue);
  };

  return (
    <Box p={1} data-testid={'details'}>
      <FullCard />
      <Box pt={{xs: 2, lg: 4}} color={'common.white'} >
        <Tabs aria-label="tabs"
          value={activeTab}
          onChange={handleChangeTabs}
          indicatorColor="secondary"
          textColor="secondary"
          variant={'scrollable'}
        >
          {
            Object.keys(SECTIONS).map((item) =>
              <Tab key={item} label={item} value={item} />)
          }
        </Tabs>
        <Box mt={4} >
          {SECTIONS[activeTab]}
        </Box>
      </Box>
      <SimilarList />
    </Box>
  )
};