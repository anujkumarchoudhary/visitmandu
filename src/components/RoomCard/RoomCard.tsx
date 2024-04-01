import React from 'react'
import styles from './RoomCard.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import room from '../../asserst/home/room-b1.jpg'
import room1 from '../../asserst/home/room-b1.jpg'
import { FaStar, FaWifi } from "react-icons/fa";
import { FaBed, FaPersonWalking } from "react-icons/fa6";
import CommonButton from '../CommonButton/CommonButton'


export interface IRoomCard {
    heading: string;
    price: number;
    name: string;
    name2: string;
    handleClick: () => void;

}
const RoomCard = ({ heading, price, name, name2, handleClick }: IRoomCard) => {
    return (
        <Grid className={styles.roomCardContainer}>
            <img src={room} />
            <Grid className={styles.heading}>
                <Typography variant='h4' fontSize={21} fontWeight={600}>{heading}</Typography>
                <Box>
                    <FaStar fontSize={18} />
                    <FaStar fontSize={18} />
                    <FaStar fontSize={18} />
                    <FaStar fontSize={18} />
                    <FaStar fontSize={18} />
                </Box>
            </Grid>
            <Typography variant='h5' fontSize={18} fontWeight={600} sx={{ color: "#EB294B" }}>${price} <span style={{ fontSize: 14, fontWeight: 500, color: "#858785" }}>/ Per Night</span></Typography>
            <Divider sx={{ marginBlock: 2 }} />
            <Grid className={styles.weProvide}>
                <Box>
                    <FaBed fontSize={20} />
                    <Typography variant='h5' fontSize={15} fontWeight={500}>Bedrooms</Typography>
                </Box>
                <Box>
                    <FaWifi fontSize={20} />
                    <Typography variant='h5' fontSize={15} fontWeight={500}>wifi</Typography>
                </Box>
            </Grid>
            <Divider sx={{ marginBlock: 2 }} />
            <Grid className={styles.action}>
                <CommonButton
                    name={name}
                    handleClick={handleClick}
                />
                <CommonButton
                    name={name2}
                    handleClick={handleClick}
                />
            </Grid>
        </Grid>
    )
}

export default RoomCard