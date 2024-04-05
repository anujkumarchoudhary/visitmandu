import React from 'react'
import styles from './CommonBanner.module.scss'
import { Grid, Typography } from '@mui/material'
import banner from '../../asserst/banner/about_bannerjpg.jpg'

export interface ICommonBanner {
    img: string;
    heading: string;
    label: string;
}
const CommonBanner = ({ img, heading, label }: ICommonBanner) => {
    return (
        <Grid className={styles.commonBannerContainer}>
            <Grid className={styles.image}>
                <img src={img} />
            </Grid>
            <Grid className={styles.opecity}>
            </Grid>
            <Grid className={styles.content}>
                <Typography variant='h4' fontSize={35} fontWeight={800} sx={{ color: "#ffffff", textTransform: "uppercase" }} >{heading}</Typography>
                <Typography variant='h5' fontSize={15} fontWeight={600} textAlign={"center"} marginBlockStart={1.6} sx={{ color: "#FFA801" }}>Home / <span style={{ color: "#ffffff" }}>{label}</span></Typography>
            </Grid>
        </Grid>
    )
}

export default CommonBanner