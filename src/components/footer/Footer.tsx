import React from 'react'
import styles from './Footer.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import brand from '../../asserst/logo-black.png'

const Footer = () => {

    return (
        <Grid container spacing={2} className={styles.footerContainer}>
            <Grid item sm={4}>
                <Typography variant='h4' fontSize={21} fontWeight={700}>CONTACT INFO</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</Typography>
                <Typography variant='h4' fontSize={21} fontWeight={700} sx={{ marginBlockStart: 2.5 }}>WE ACCEPT</Typography>
            </Grid>
            <Grid item sm={4}>
                <Typography variant='h4' fontSize={21} fontWeight={700}>QUICK LINKS</Typography>
                <Grid display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography>Home</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Service</Typography>
                        <Typography>Blog</Typography>
                        <Typography>Contact</Typography>
                    </Box>
                    <Box>
                        <Typography>Rooms</Typography>
                        <Typography>Restorents</Typography>
                        <Typography>Shop</Typography>
                        <Typography>Blog</Typography>
                        <Typography>Hotels</Typography>
                    </Box>
                    <Box>
                        <Typography>Resister</Typography>
                        <Typography>Login</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sm={4}>
                <Typography variant='h4' fontSize={21} fontWeight={700}>CONTACT INFO</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer