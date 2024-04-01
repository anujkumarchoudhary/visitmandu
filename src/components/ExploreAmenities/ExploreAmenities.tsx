import React from 'react'
import styles from './ExploreAmenities.module.scss'
import { Grid } from '@mui/material'
import SimpleHeadingText from '../SimpleHeadingText/SimpleHeadingText'
import { amenities } from '../../data/home'
import AmenitiesCard from '../AmenitiesCard/AmenitiesCard'

const ExploreAmenities = () => {
    return (
        <Grid className={styles.exploreAmenitiesContainer}>
            <SimpleHeadingText
                heading={'EXPLORE AMENITIES'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis'}
                name={''}
                handleClick={function (): void {
                    throw new Error('Function not implemented.')
                }}
            />
            <Grid container spacing={2} className={styles.exploreAmenitiesCards}>
                {amenities.map((item) => {
                    return (
                        <Grid item sm={3}>
                            <AmenitiesCard
                                icon={item.icon}
                                label={item.heading}
                            />
                        </Grid>
                    )
                })}

            </Grid>
        </Grid>
    )
}

export default ExploreAmenities