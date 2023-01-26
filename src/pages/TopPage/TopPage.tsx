import {Box} from "@mui/material";
import {FC} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {ExpandableList} from "../../components";
import {selectHomePage} from "../../features/movieFinder/movieFinderSlice";
import {getTopListAsync} from "../../features/movieFinder/movieFinderThunks";
import {getTopListTitle, getTopListType} from "../../utils";

export const TopPage: FC = () => {

  const params = useParams();
  const type = getTopListType(params.type);
  const dispatch = useAppDispatch();
  const HomePage = useAppSelector(selectHomePage);
  const totalPages = HomePage[type]?.pagesCount ?? 0;
  const currentPage = HomePage[type]?.page ?? 1;

  function addNewPage() {
    dispatch(getTopListAsync({type, page: currentPage + 1}))
  }

  return (
    <Box pt={1} data-testid={'top'}>
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