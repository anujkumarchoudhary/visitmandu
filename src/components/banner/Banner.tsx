import React from 'react'
import styles from './Banner.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import img from '../../asserst/banner/slider3.jpg'
import CommonButton from '../CommonButton/CommonButton'
import AvailityForm from '../AvailityForm/AvailityForm'

const Banner = () => {
    return (
        <Grid className={styles.bannerContainer}>
            <Grid className={styles.img}>
                <img src={img} />
            </Grid>
            <Grid className={styles.opecity}>

            </Grid>
            <Grid className={styles.content}>
                <Box>
                    <Typography textAlign={"center"} variant='h4' fontSize={18} fontWeight={200}>Room availability checkers & booking</Typography>
                    <Typography textAlign={"center"} variant='h2' fontSize={55} fontWeight={700}>Book early <span style={{ color: "#FFA801" }}>save</span> more</Typography>
                    <CommonButton
                        name={'Explore our rooms'}
                        handleClick={(() => console.log("hello"))}
                    />
                </Box>
            </Grid>
            <AvailityForm />
        </Grid>
    )
}

export default Banner