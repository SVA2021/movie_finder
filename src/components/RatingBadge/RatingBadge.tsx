import {Typography} from "@mui/material";
import {FC} from "react";
import {getColorFromRate, getRateFromString} from "../../utils";

interface RatingBadgeProps {
  rating: number | string | null | undefined
  position: 'left' | 'right'
}

export const RatingBadge: FC<RatingBadgeProps> = ({rating, position}) => {

  const normalizeRating = getRateFromString(rating);
  const bgColor = getColorFromRate(normalizeRating);

  return (
    <Typography
      data-testid={'rating-badge'}
      variant="h3"
      component="p"
      sx={{
        position: 'absolute',
        top: 0,
        left: position === 'left' ? 0 : null,
        right: position === 'right' ? 0 : null,
        padding: '0px 12px',
        backgroundColor: bgColor,
        color: 'common.white',
      }}>
      {normalizeRating?.toFixed(1)}
    </Typography>
  )
};