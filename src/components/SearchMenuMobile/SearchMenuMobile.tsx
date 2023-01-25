import {ExpandMore, Search} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import {FC} from 'react';
import {SearchField, StyledTextItem} from '../../components';

export const SearchMenuMobile: FC = () => {
  return (
    <Accordion data-testid={'search-menu-mobile'}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{p: 0}}
        id="panel-search-menu-btn"
        aria-controls="panel-search-menu-btn"
        data-testid={'search-menu-mobile-btn'}
      >
        <StyledTextItem ><Search fontSize='medium' />Поиск</StyledTextItem>
      </AccordionSummary>
      <AccordionDetails
        sx={{p: 0}}
        id="panel-search-menu-content"
        data-testid={'search-menu-mobile-content'}
      >
        <SearchField />
      </AccordionDetails>
    </Accordion>
  );
}