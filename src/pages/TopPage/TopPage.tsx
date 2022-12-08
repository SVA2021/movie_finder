import {Box} from "@mui/material";
import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {ExpandableList} from "../../components";
import {getTopListAsync, selectHomePage} from "../../features/movieFinder/movieFinderSlice";
import {TTopList} from "../../features/movieFinder/movieFinderTypes";
import {getTopListTitle} from "../../utils";

interface TopPageProps {
    type: TTopList
}

export const TopPage: FC<TopPageProps> = ({type}) => {

    const dispatch = useAppDispatch();
    const HomePage = useAppSelector(selectHomePage);
    const totalPages = HomePage[type]?.pagesCount ?? 0;
    const currentPage = HomePage[type]?.page ?? 1;

    function addNewPage() {
        dispatch(getTopListAsync({type, page: currentPage + 1}))
    }

    return (
        <Box pt={1}>
            <ExpandableList
                title={getTopListTitle(type)}
                data={HomePage[type]?.data ?? []}
                page={currentPage}
                totalPages={totalPages}
                addPage={() => addNewPage()}
            />
        </Box>
    )
};