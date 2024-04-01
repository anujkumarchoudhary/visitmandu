import React from 'react'
import styles from './SimpleHeadingText.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import CommonButton from '../CommonButton/CommonButton'

export interface ISimpleHeadingText {
    heading: string;
    desc: string;
    name: string;
    handleClick: () => void;

}
const SimpleHeadingText = ({ heading, desc, name, handleClick }: ISimpleHeadingText) => {
    return (
        <Grid className={styles.simpleHeadingTextContainer}>
            <Box>
                <Typography variant='h4' fontSize={32} fontWeight={700} sx={{ color: "#092741" }}>{heading}</Typography>
                <Typography paddingBlock={2} lineHeight={1.5} sx={{ color: "#858785" }}>{desc}</Typography>
            </Box>
            <CommonButton
                name={name}
                handleClick={handleClick}
            />
        </Grid>
    )
}

export default SimpleHeadingText