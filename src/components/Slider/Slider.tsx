import { Box, Typography } from "@mui/material";

export const Slider = () => {
	return (
		<Box sx={{
			height: '100px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			bgcolor: 'action.hover',
			mt: 2,
		}}>
			<Typography variant="h1" component={'p'}>
				here will be a banner
			</Typography>
		</Box>
	)
};