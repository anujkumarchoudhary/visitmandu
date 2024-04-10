import React from 'react'
import styles from './ExploreTeam.module.scss'
import { Grid } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import { teams } from '../../data/about'
import TeamCard from '../TeamCard/TeamCard'

const ExploreTeam = () => {
    return (
        <Grid className={styles.exploreTeamContainer}>
            <HeadingText
                heading={'EXPLORE'}
                label={'TEAM'}
                para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis"}
            />
            <Grid className={styles.teamCards}>
                {teams.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <TeamCard
                                img={item.img}
                                name={item.name}
                                designation={item.designation}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default ExploreTeam