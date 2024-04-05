import React from 'react'
import styles from './About.module.scss'
import { Grid, Typography } from '@mui/material'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import banner from '../../asserst/banner/about_bannerjpg.jpg'
import AboutUs from '../../components/About/AboutUs/AboutUs'
import ExploreTeam from '../../components/ExploreTeam/ExploreTeam'
import Achievements from '../../components/About/Achievements/Achievements'
import ExploreService from '../../components/ExploreService/ExploreService'

const About = () => {
    return (
        <Grid className={styles.aboutContainer}>
            <CommonBanner
                img={banner}
                heading={'About Us'}
                label={'About'}
            />
            <AboutUs />
            <ExploreTeam />
            <Achievements />
            <ExploreService />
        </Grid>
    )
}

export default About