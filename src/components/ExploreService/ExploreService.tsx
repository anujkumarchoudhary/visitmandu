import React from 'react'
import styles from './ExploreService.module.scss'
import { Grid } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import { services } from '../../data/about'
import ServiceCard from '../ServiceCard/ServiceCard'

const ExploreService = () => {
    return (
        <Grid className={styles.exploreServiceContainer}>
            <HeadingText
                heading={'EXPLORE'}
                label={'SERVICES'}
                para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis"}
            />
            <Grid className={styles.serviceCards}>
                {services.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <ServiceCard
                                img={item.img}
                                name={item.name}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default ExploreService