import React from 'react'
import styles from './AmenitiesCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'

export interface IAmenitiesCard {
    icon: any,
    label: string
}
const AmenitiesCard = ({ icon, label }: IAmenitiesCard) => {
    return (
        <Grid className={styles.amenitiesCardContainer}>
            <Box>{icon}</Box>
            <Typography variant='h4' fontSize={22} fontWeight={700}>{label}</Typography>
        </Grid>
    )
}

export default AmenitiesCard