import React from 'react'
import styles from './SimpleCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'

export interface ISimpleCard {
    icon: any;
    heading: string;
    desc: string;
}
const SimpleCard = ({ icon, heading, desc }: ISimpleCard) => {
    return (
        <Grid className={styles.simpleCardContainer}>
            <Box>
                {icon}
            </Box>
            <Typography variant='h4' marginBlock={2} fontSize={21} fontWeight={700} sx={{ color: "#092741" }}>{heading}</Typography>
            <Typography fontSize={16} sx={{ color: "#858785" }}>{desc}</Typography>
        </Grid>
    )
}

export default SimpleCard