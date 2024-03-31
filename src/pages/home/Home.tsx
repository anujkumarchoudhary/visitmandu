import React from 'react'
import styles from './Home.module.scss'
import { Grid } from '@mui/material'
import Banner from '../../components/banner/Banner'
import WeProvides from '../../components/WeProvides/WeProvides'

const Home = () => {
    return (
        <Grid className={styles.homeContainer}>
            <Banner />
            <WeProvides />
        </Grid>
    )
}

export default Home