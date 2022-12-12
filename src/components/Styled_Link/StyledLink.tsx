import {Link, Typography} from '@mui/material';
import React, {FC} from 'react';

interface StyledLinkProps {
    href: string
    title: string
}

export const StyledLink: FC<StyledLinkProps> = ({href, title}) => {
    return (
        <Link
            component={'a'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={href}
            underline={'hover'}
        >
            <Typography
                m={1}
                p={2}
                variant="body1"
                component="p"
                textAlign={'center'}
            >
                {title}
            </Typography>
        </Link>
    );
};