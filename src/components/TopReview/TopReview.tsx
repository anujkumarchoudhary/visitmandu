import React from 'react'
import styles from './TopReview.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import { topReview } from '../../data/home'
import ReviewCard from '../ReviewCard/ReviewCard'

const TopReview = () => {
    return (
        <Grid className={styles.topReviewContainer}>
            <HeadingText
                heading={'TOP CLIENT '}
                para={"topReview"}
                label={'REVIEWS'}
            />
            <Grid className={styles.topReviews}>
                <ReviewCard />
            </Grid>
        </Grid>
    )
}

export default TopReview