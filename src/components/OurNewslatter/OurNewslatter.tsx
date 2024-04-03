import React from 'react'
import styles from './OurNewslatter.module.scss'
import { Grid } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import SimpleInputField from '../SimpleInputField/SimpleInputField'
import CommonButton from '../CommonButton/CommonButton'

const OurNewslatter = () => {
    const data = [
        {
            "id": 1,
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis"
        }
    ]
    return (
        <Grid container className={styles.ourNewslatterContainer}>
            <Grid item sm={7}>
                <HeadingText
                    heading={'SUBSCRIBE TO OUR'}
                    label={'NEWSLETTER'}
                    desc={data}
                />
            </Grid>
            <Grid item sm={5}>
                <SimpleInputField
                    label={''}
                    name={''}
                    placeholder={'Enter your email'}
                    value={''}
                    type={undefined}
                    onChange={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
                <CommonButton
                    name={'Sign Up'}
                    handleClick={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default OurNewslatter