import React from 'react'
import styles from './ReviewCard.module.scss'
import { Grid, Typography } from '@mui/material'
import { ImQuotesLeft } from "react-icons/im";
import img from '../../asserst/home/review2.jpg'


const ReviewCard = () => {
    return (
        <Grid className={styles.reviewCardContainer}>
            <Grid className={styles.image}>
                <img src={img} />
            </Grid>
            <Grid className={styles.review}>
                <Typography variant='h5' fontSize={18} fontWeight={500} lineHeight={1.8} marginBlockEnd={2.8}> <ImQuotesLeft fontSize={40} />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt consequatur velit qui corporis fugit ducimus itaque sed, praesentium molestiae. Enim odit impedit sit dolores! Eum fugit voluptatem animi unde voluptatibus ducimus nulla temporibus enim voluptatum dignissimos recusandae quia repellat perferendis ullam possimus inventore, fuga reiciendis delectus quis maiores corporis minima. Consequuntur voluptate ea,</Typography>
                <Typography variant='h4' fontSize={25} fontWeight={700} sx={{ color: "#FFA801", textTransform: "uppercase" }}>Sherry Lin</Typography>
                <Typography marginBlock={0.5} fontSize={15}>USA</Typography>
            </Grid>

        </Grid>
    )
}

export default ReviewCard