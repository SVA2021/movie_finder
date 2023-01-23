import {Box, Button, Grid, Typography} from '@mui/material';
import {FC} from 'react';
import {EmptyDataBox} from '..';
import {SmallCard} from '../SmallCard/SmallCard';

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
        gutterBottom
        variant="h3"
        component={'h2'}
        textTransform={'capitalize'}
        color={'common.white'}
      >
        {title}
      </Typography>
      {
        data.length > 0
          ? <>
            <Grid container
              rowSpacing={2}
              columnSpacing={{xs: 0, md: 2, lg: 4}}
            >
              {
                data.map((item, index) =>
                  <Grid key={index} item xs={12} md={3} lg={2}>
                    <SmallCard item={item} />
                  </Grid>
                )
              }
            </Grid>
            <Box mt={4} textAlign={'center'} >
              <Button onClick={addPage} disabled={page === totalPages} >
                Load more
              </Button>
            </Box>
          </>
          : <EmptyDataBox />
      }
    </Box>
  );
};