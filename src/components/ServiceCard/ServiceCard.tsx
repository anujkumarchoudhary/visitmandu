import React from 'react'
import styles from './ServiceCard.module.scss'
import { Grid, Typography } from '@mui/material'

export interface IServiceCard {
    img: string;
    name: string;
}
const ServiceCard = ({ img, name }: IServiceCard) => {
    return (
        <Grid className={styles.serviceCardContainer}>
            <img src={img} />
            <Typography variant='h4' fontSize={21} fontWeight={800}>{name}</Typography>
        </Grid>
    )
}

export default ServiceCard