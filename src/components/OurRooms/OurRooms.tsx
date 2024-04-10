import React from 'react'
import styles from './OurRooms.module.scss'
import { Grid } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import RoomCard from '../RoomCard/RoomCard'
import { ourRooms } from '../../data/home'

const OurRooms = () => {

    return (
        <Grid container className={styles.ourRoomsContainer}>
            <Grid item sm={4}>
                <HeadingText
                    heading={'EXPLORE '}
                    para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis"}
                    label={'ROOMS & SUITS'}
                />
            </Grid>
            <Grid item sm={8}>
                <Grid spacing={3} container >
                    {
                        ourRooms.map((item) => {
                            return (
                                <Grid item sm={6}>
                                    <RoomCard
                                        heading={item.heading}
                                        price={item.price}
                                        name={"view details"}
                                        name2={"Book now"}
                                        handleClick={function (): void {
                                            throw new Error('Function not implemented.')
                                        }}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OurRooms;