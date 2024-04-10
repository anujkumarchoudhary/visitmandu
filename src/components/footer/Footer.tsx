import React from 'react'
import styles from './Footer.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import brand from '../../asserst/logo-black.png'
import visa from '../../asserst/visa.png'
import mastercard from '../../asserst/mastercard.png'
import americanexpress from '../../asserst/americanexpress.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <Grid className={styles.footerContainer}>
            <Grid>
                <Typography variant='h4' fontSize={21} fontWeight={700}>CONTACT INFO</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</Typography>
                <Typography variant='h4' fontSize={21} fontWeight={700} sx={{ marginBlockStart: 2.5 }}>WE ACCEPT</Typography>
                <Box>
                    <img src={visa} />
                    <img src={mastercard} style={{ marginInline: 5 }} />
                    <img src={americanexpress} />
                </Box>
            </Grid>
            <Grid>
                <Typography variant='h4' fontSize={21} fontWeight={700}>QUICK LINKS</Typography>
                <Grid display={"flex"} justifyContent={"space-between"}>
                    <Box paddingInlineEnd={8}>
                        <Typography>Home</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Service</Typography>
                        <Typography>Blog</Typography>
                        <Typography>Contact</Typography>
                    </Box>
                    <Box paddingInlineEnd={8}>
                        <Typography>Rooms</Typography>
                        <Typography>Restorents</Typography>
                        <Typography>Shop</Typography>
                        <Typography>Blog</Typography>
                        <Typography>Hotels</Typography>
                    </Box>
                    <Box paddingInlineEnd={8}>
                        <Typography>Resister</Typography>
                        <Typography>Login</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant='h4' fontSize={21} fontWeight={700}>CONTACT INFO</Typography>
                <Grid display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography>Tel: 91+ 9953176985</Typography>
                        <Typography>E-mail: anujkumarchoudhary6699@gmail.com</Typography>
                        <Typography>Add: Ashok Nager, Delhi</Typography>
                        <Box sx={{ marginBlock: 2 }}>
                            <FaFacebookF fontSize={25} style={{ color: "#ffffff" }} />
                            <FaTwitter fontSize={25} style={{ marginInline: 8, color: "#ffffff" }} />
                            <FaLinkedinIn fontSize={25} style={{ color: "#ffffff" }} />
                            <FaInstagram fontSize={25} style={{ marginInline: 8, color: "#ffffff" }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer