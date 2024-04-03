import React from 'react'
import styles from './LatestNew.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import { latestNew } from '../../data/home'
import NewCard from '../NewCard/NewCard'
import { news } from '../../data/home'

const LatestNew = () => {

    return (
        <Grid className={styles.latestNewContainer}>
            <HeadingText
                heading={'LATEST'}
                desc={latestNew} label={'NEWS'}            />
            <Grid className={styles.cardContainer}>
                {news.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <NewCard
                                img={item.img}
                                label={item.label}
                                heading={item.heading}
                                postBy={item.postBy}
                                comments={item.comments}
                                desc={item.desc}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default LatestNew