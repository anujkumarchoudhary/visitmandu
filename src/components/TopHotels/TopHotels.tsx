import React from 'react'
import styles from './TopHotels.module.scss'
import { Grid, Typography } from '@mui/material'
import SimpleHeadingText from '../SimpleHeadingText/SimpleHeadingText'
import { topHotels } from '../../data/home'
import HotelCard from '../HotelCard/HotelCard'

const TopHotels = () => {
    return (
        <Grid className={styles.topHotelsContainer}>
            <SimpleHeadingText
                heading={'TOP '}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis'}
                name={'Explore more'}
                handleClick={function (): void {
                    throw new Error('Function not implemented.')
                }}
            />
            <Grid container spacing={2} className={styles.hotelCards}>
                {topHotels.map((item) => {
                    return (
                        <Grid item sm={3}>
                            <HotelCard
                                img={item.img}
                                heading={item.heading}
                            />
                        </Grid>
                    )
                })}


            </Grid>
        </Grid>
    )
}

export default TopHotels