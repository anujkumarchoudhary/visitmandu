import React from 'react'
import styles from './ArchievementCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'

export interface IArchievementCard {
    img: string;
    name: string;
    label: string;
};

const ArchievementCard = ({ img, name, label }: IArchievementCard) => {
    return (
        <Grid className={styles.archievementCardContainer}>
            <img src={img} />
            <Box>
                <Typography variant='h4' fontSize={18} fontWeight={600}>{name}</Typography>
                <Typography>{label}</Typography>
            </Box>
        </Grid>
    )
}

export default ArchievementCard