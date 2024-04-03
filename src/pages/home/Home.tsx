import React from 'react'
import styles from './Home.module.scss'
import { Grid } from '@mui/material'
import Banner from '../../components/banner/Banner'
import WeProvides from '../../components/WeProvides/WeProvides'
import OurRooms from '../../components/OurRooms/OurRooms'
import TopHotels from '../../components/TopHotels/TopHotels'
import ExploreAmenities from '../../components/ExploreAmenities/ExploreAmenities'
import TopReview from '../../components/TopReview/TopReview'
import LatestNew from '../../components/LatestNew/LatestNew'
import OurNewslatter from '../../components/OurNewslatter/OurNewslatter'

const Home = () => {
    return (
        <Grid className={styles.homeContainer}>
            <Banner />
            <WeProvides />
            <OurRooms />
            <TopHotels />
            <ExploreAmenities />
            <TopReview />
            <LatestNew />
            <OurNewslatter />
        </Grid>
    )
}

export default Home