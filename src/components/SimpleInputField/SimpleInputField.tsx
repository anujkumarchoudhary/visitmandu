import React from 'react'
import styles from './SimpleInputField.module.scss'
import { Grid, TextField, Typography } from '@mui/material'

export interface ISimpleInputField {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    type: any;
    onChange: () => void;
}
const SimpleInputField = ({ label, name, placeholder, value, type, onChange }: ISimpleInputField) => {
    return (
        <Grid className={styles.simpleInputFieldContainer}>
            <Typography sx={{ color: "#FFA801" }}>{label}</Typography>
            <TextField name={name} placeholder={placeholder} value={value} onChange={onChange} type={type} />
        </Grid>
    )
}

export default SimpleInputField