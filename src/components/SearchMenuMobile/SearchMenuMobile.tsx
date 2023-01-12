import {ExpandMore, Search} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import {SearchField, StyledTextItem} from '../../components';

export const SearchMenuMobile = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{p: 0}}
      >
        <StyledTextItem ><Search fontSize='medium' />Поиск</StyledTextItem>
      </AccordionSummary>
      <AccordionDetails sx={{p: 0}}>
        <SearchField />
      </AccordionDetails>
    </Accordion>
  );
}