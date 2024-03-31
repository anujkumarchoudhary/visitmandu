import React from 'react'
import styles from './CommonButton.module.scss'
import { Button, Grid } from '@mui/material'

export interface ICommonButton {
    name: string;
    handleClick: () => void;
}
const CommonButton = ({ name, handleClick }: ICommonButton) => {
    return (
        <Grid className={styles.commonButtonContainer}>
            <Button variant='outlined' onClick={handleClick}>{name}</Button>
        </Grid>
    )
}

export default CommonButton