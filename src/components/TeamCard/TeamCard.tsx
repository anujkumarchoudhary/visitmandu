import React from 'react'
import styles from './TeamCard.module.scss'
import { Grid, Typography } from '@mui/material'
import { idText } from 'typescript';

export interface ITeamCard {
    img: string;
    name: string;
    designation: string
}
const TeamCard = ({ img, name, designation }: ITeamCard) => {
    return (
        <Grid className={styles.teamCardContainer}>
            <Grid className={styles.image}>
                <img src={img} />
            </Grid>
            <Grid className={styles.content}>
                <Typography variant='h4' fontSize={21} fontWeight={800}>{name}</Typography>
                <Typography>{designation}</Typography>
            </Grid>
        </Grid>
    )
}

export default TeamCard