import { AccountCircle, ExpandMore, Logout, Search, Settings } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import SearchField from '../SearchField/SearchField';
import StyledTextItem from '../Styled_TextItem/Styled_TextItem';

const SubMenuMobile = () => {
	return (
		<>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						p: 0
					}}
				>
					<StyledTextItem ><Search fontSize='medium' />Search</StyledTextItem>
				</AccordionSummary>
				<AccordionDetails sx={{
					p: 0
				}}>
					<SearchField multiline />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel2a-content"
					id="panel2a-header"
					sx={{
						p: 0
					}}
				>
					<StyledTextItem ><AccountCircle fontSize='medium' />Account</StyledTextItem>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container direction={'column'} spacing={2}>
						<Grid item xs={12} >
							<StyledTextItem ><AccountCircle fontSize='medium' />Account</StyledTextItem>
						</Grid>
						<Grid item xs={12}>
							<StyledTextItem ><Settings fontSize='medium' />Settings</StyledTextItem>
						</Grid>
						<Grid item xs={12} >
							<StyledTextItem ><Logout fontSize='medium' />Logout</StyledTextItem>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</>
	);
}

export default SubMenuMobile;