import React from 'react'
import styles from './HeadingText.module.scss'
import { Grid, Typography } from '@mui/material'
import CommonButton from '../CommonButton/CommonButton';

export interface IHeadingText {
    heading: string;
    label: string;
    desc: any;
}
const HeadingText = ({ heading, label, desc }: IHeadingText) => {

    return (
        <Grid className={styles.headingTextContainer}>
            <Typography variant='h4' fontSize={35} fontWeight={700} sx={{ color: "#092741" }}> {heading} <span style={{ color: "#EF2A4C" }}>{label}</span></Typography>
            {desc.map((item: any) => {
                return (
                    <Typography fontSize={16} sx={{ color: "#858785" }}>{item.para}</Typography>
                )
            })}
            <CommonButton
                name={'know more about us >>'}
                handleClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        </Grid>
    )
}

export default HeadingText