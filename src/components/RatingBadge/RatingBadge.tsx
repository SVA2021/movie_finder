import {Typography} from "@mui/material";
import {FC} from "react";

interface RatingBadgeProps {
    rating: number | string | null | undefined
    bgColor: string
}

export const RatingBadge: FC<RatingBadgeProps> = ({rating, bgColor}) => {
    return (
        <Typography variant="h3" component="p" sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: '0px 12px',
            backgroundColor: bgColor,
            color: 'common.white',
        }}>
            {rating}
        </Typography>
    )
};