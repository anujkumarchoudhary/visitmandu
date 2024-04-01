import React from 'react'
import styles from './Home.module.scss'
import { Grid } from '@mui/material'
import Banner from '../../components/banner/Banner'
import WeProvides from '../../components/WeProvides/WeProvides'
import OurRooms from '../../components/OurRooms/OurRooms'
import TopHotels from '../../components/TopHotels/TopHotels'
import ExploreAmenities from '../../components/ExploreAmenities/ExploreAmenities'

const Home = () => {
    return (
        <Grid className={styles.homeContainer}>
            <Banner />
            <WeProvides />
            <OurRooms />
            <TopHotels />
            <ExploreAmenities />
        </Grid>
    )
}

export default Home