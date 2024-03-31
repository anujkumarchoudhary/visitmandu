import React from 'react'
import styles from './Topbar.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { topbar } from '../../data/header'

const Topbar = () => {
    return (
        <Grid className={styles.topbarContainer}>
            <Grid className={styles.leftSide}>
                {topbar.leftSide.map((item) => {
                    return (
                        <Box>
                            {item.icon}
                            <Typography>{item.label}</Typography>
                        </Box>
                    )
                })}
            </Grid>
            <Grid className={styles.rightSide}>
                {topbar.rightSide.map((item) => {
                    return (
                        <Box>
                            <Box>{item.icon}</Box>
                            <Typography>{item.label}</Typography>
                        </Box>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Topbar