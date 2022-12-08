import {Box, Grid, Typography} from '@mui/material';
import {FC} from 'react';
import {SmallCard} from '../SmallCard/SmallCard';
import {StyledButton} from '../Styled_Button/Styled_Button';

interface ExpandableListProps {
    title: string
    data: any[]
    page: number
    totalPages: number
    addPage: () => void
}

export const ExpandableList: FC<ExpandableListProps> = ({title, data, page, totalPages, addPage}) => {
    return (
        <Box pt={1}>
            <Typography
                ml={{lg: 15, xl: 20}}
                gutterBottom
                variant="h3"
                component={'h2'}
                textTransform={'capitalize'}
            >
                {title}
            </Typography>
            <Grid container>
                {
                    data.map((item, index) =>
                        <Grid key={index} item>
                            <SmallCard item={item} />
                        </Grid>
                    )
                }
            </Grid>
            <StyledButton onClick={addPage} disabled={page === totalPages} >Load more</StyledButton>
        </Box>
    );
};