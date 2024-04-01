import React from 'react'
import styles from './HotelCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'

export interface IHotelCard {
    img: string;
    heading: string;
}
const HotelCard = ({ img, heading }: IHotelCard) => {
    return (
        <Grid className={styles.hotelCardContainer}>
            <img src={img} />
            <Box></Box>
            <Typography variant='h4' fontSize={25} fontWeight={700}>{heading}</Typography>
        </Grid>
    )
}

export default HotelCard