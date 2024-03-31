import React from 'react'
import styles from './ShopCart.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { FaShoppingCart } from "react-icons/fa";


const ShopCart = () => {
    return (
        <Grid className={styles.shopCartContainer}>
            <Box>
                <FaShoppingCart fontSize={21} style={{ color: "#858785" }} cursor={"pointer"} />
            </Box>

            <Box>
                <Typography>2</Typography>
            </Box>
        </Grid>
    )
}

export default ShopCart