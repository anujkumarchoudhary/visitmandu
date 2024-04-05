import React from 'react'
import styles from './Achievements.module.scss'
import { Grid } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { achievements } from '../../../data/about'
import ArchievementCard from '../../ArchievementCard/ArchievementCard'

const Achievements = () => {
    return (
        <Grid className={styles.achievementsContainer}>
            <HeadingText
                heading={'AWARDS AND'}
                label={'ACHIEVEMENTS'}
                para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpi"}
            />
            <Grid className={styles.achievementsCards}>
                {
                    achievements.map((item) => {
                        return (
                            <Grid className={styles.card}>
                                <ArchievementCard
                                    img={item.img}
                                    name={item.name}
                                    label={item.year}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Achievements