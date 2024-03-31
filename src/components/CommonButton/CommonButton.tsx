import React from 'react'
import styles from './CommonButton.module.scss'
import { Button, Grid } from '@mui/material'

const CommonButton = () => {
    return (
        <Grid className={styles.commonButtonContainer}>
            <Button variant='outlined'>Book Now</Button>
        </Grid>
    )
}

export default CommonButton