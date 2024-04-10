import React from 'react'
import styles from './AboutUs.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import CommonButton from '../../CommonButton/CommonButton'
import about_1 from '../../../asserst/about/aboutus1.jpg'
import about_2 from '../../../asserst/about/aboutus2.jpg'

const AboutUs = () => {
    return (
        <Grid container spacing={2} className={styles.aboutUsContainer}>
            <Grid item sm={6}>
                <Typography variant='h4' fontSize={25} fontWeight={700} sx={{ color: "#092741", marginBlockEnd: 4 }}>EXPLORE MORE ABOUT US</Typography>
                <Typography sx={{ color: "#858785", marginBlock: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta velit eu nisi consequat dictum. Maecenas accumsan tempor neque sed mattis. Morbi quis nunc pharetra, suscipit lacus quis, pharetra dignissim nibh a nunc aliquet.</Typography>
                <Typography sx={{ color: "#858785", marginBlock: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta velit eu nisi consequat dictum. Maecenas accumsan tempor neque sed mattis.</Typography>
                <CommonButton
                    name={'Know more about us'}
                    handleClick={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </Grid>
            <Grid item sm={6} className={styles.rightSide}>
                <img src={about_2} width={270} height={390} />
                <img src={about_1} width={270} height={390} />
                <Box>
                    <Typography variant='h4' fontSize={45} fontWeight={800}>19</Typography>
                    <Typography variant='h5' fontSize={16} fontWeight={600}>YEARS <br /> EXPERIENCE  <br />WORKING</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AboutUs