import React from 'react'
import styles from './AvailityForm.module.scss'
import { Grid, Typography } from '@mui/material'
import SimpleInputField from '../SimpleInputField/SimpleInputField'
import CommonButton from '../CommonButton/CommonButton'
import SimpleSelectField from '../SimpleSelectField/SimpleSelectField'

const AvailityForm = () => {
    const handleChange = () => {

    }
    return (
        <Grid className={styles.availityFormContainer}>
            <SimpleInputField
                label={'CHECK IN'}
                name={''}
                placeholder={''}
                value={''}
                type={"date"}
                onChange={handleChange}
            />
            <SimpleInputField
                label={'CHECK OUT'}
                name={''}
                placeholder={''}
                value={''}
                type={"date"}
                onChange={handleChange}
            />
            <SimpleSelectField
                label={'GUESTS'}
                name={''}
                placeholder={''}
                value={''}
                onChange={handleChange} />
            <SimpleSelectField
                label={'NIGHTS'}
                name={''}
                placeholder={'NIGHTS'}
                value={''}
                onChange={handleChange} />
            <CommonButton
                name={'Check Availability'}
                handleClick={(() => console.log("hello"))}
            />
        </Grid>
    )
}

export default AvailityForm