import React from 'react'
import styles from './SimpleSelectField.module.scss'
import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'

export interface ISimpleSelectField {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: () => void;
}
const SimpleSelectField = ({ label, name, placeholder, value, onChange }: ISimpleSelectField) => {

    return (
        <Grid className={styles.simpleSelectFieldContainer}>
            <Typography sx={{ color: "#FFA801" }}>{label}</Typography>
            <FormControl>
                <Select
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem>One</MenuItem>
                    <MenuItem>One</MenuItem>
                </Select>
            </FormControl>

        </Grid>
    )
}

export default SimpleSelectField