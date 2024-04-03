import React from 'react'
import styles from './NewCard.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import img from '../../asserst/home/news1.jpg'
import { FaUser } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";

export interface INewCard {
    img: string;
    label: string;
    heading: string;
    postBy: string;
    comments: string;
    desc: string;
}
const NewCard = ({ img, label, heading, postBy, comments, desc }: INewCard) => {
    return (
        <Grid className={styles.newCardContainer}>
            <Grid className={styles.image}>
                <img src={img} />
            </Grid>
            <Grid className={styles.description}>
                <Typography fontSize={13} sx={{ color: "#FFA801" }}>{label}</Typography>
                <Typography variant='h4' fontSize={21} fontWeight={700} sx={{ color: "#343a40" }}>{heading}</Typography>
                <Divider />
                <Grid className={styles.postInfo} display={"flex"}>
                    <Box display={"flex"}>
                        <FaUser style={{ marginBlock: "auto", color: "#FFA801", marginInlineEnd: 4 }} />
                        <Typography fontSize={14} sx={{ color: "#092741", marginBlock: 'auto' }}>{postBy}</Typography>

                    </Box>
                    <Box display={"flex"} marginInlineStart={2}>
                        <BsChatFill style={{ marginBlock: "auto", color: "#FFA801", marginInlineEnd: 4 }} />
                        <Typography fontSize={14} sx={{ color: "#092741", marginBlock: 'auto' }}>{comments}</Typography>
                    </Box>
                </Grid>
                <Divider />
                <Typography sx={{ color: "#858785", paddingBlock: 1 }}>{desc}</Typography>
                <Typography sx={{ color: "#FFA801", cursor: "pointer" }}>{`Read more >>`}</Typography>
            </Grid>
        </Grid>
    )
}

export default NewCard