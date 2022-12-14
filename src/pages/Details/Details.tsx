import {Box, Tab, Tabs} from "@mui/material";
import {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import {FullCard, SimilarList, VideoList} from "../../components";
import {TMovieExtraType} from "../../features/movieFinder/movieFinderTypes";

export const Details: FC = () => {

    const params = useParams();
    const id = Number(params.id);
    const [activeTab, setActiveTab] = useState<TMovieExtraType>('videos');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: TMovieExtraType) => {
        setActiveTab(newValue);
    };

    return (
        <Box p={1}>
            <FullCard id={id} />
            <Box pt={{xs: 2, lg: 4}} color={'common.white'} >
                <Tabs aria-label="tabs"
                    value={activeTab}
                    onChange={handleChangeTabs}
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab label="Videos" value={'videos'} />
                    <Tab label="Images" value={'images'} />
                    <Tab label="Awards" value={'awards'} />
                    <Tab label="Facts" value={'facts'} />
                </Tabs>
                <Box mt={4} >
                    {activeTab === 'videos' && <VideoList id={id} />}
                </Box>
            </Box>
            <SimilarList id={id} />
        </Box>
    )
};