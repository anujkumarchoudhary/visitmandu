import React from 'react'
import styles from './WeProvides.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { weProvide } from '../../data/home'
import SimpleCard from '../SimpleCard/SimpleCard'
import HeadingText from '../HeadingText/HeadingText'
import about1 from '../../asserst/home/about1.jpg'
import about2 from '../../asserst/home/about2.jpg'


const WeProvides = () => {

    return (
        <Grid className={styles.weProvidesContainer}>
            <Grid container spacing={2} className={styles.aboutMe}>
                {weProvide.map((item) => {
                    return (
                        <Grid item sm={4}>
                            <SimpleCard
                                icon={item.icon}
                                heading={item.heading}
                                desc={item.desc}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2} className={styles.weProvide}>
                <Grid item sm={6}>
                    <HeadingText
                        heading='REDEFINES THE LUXURY HOSPITALITY EXPERIENCE.'
                        para={"This charming private 19th century mansion, which originally belonged to the family, has been completely renovated with care & passion while respecting the spirit of place."}
                        label={''}
                    />

                </Grid>
                <Grid item sm={6}>
                    <Box>
                        <img src={about2} width={300} height={270} />
                    </Box>
                    <Box>
                        <img src={about1} width={300} height={270} />
                    </Box>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default WeProvides