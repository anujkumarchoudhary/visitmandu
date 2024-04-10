import React, { useState } from 'react'
import styles from './ResponseHeader.module.scss'
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import logo from '../../asserst/logo-black.png'
import { IoReorderThreeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const ResponseHeader = () => {
    const navigation = useNavigate()
    const [show, setShow] = useState(false)
    const data = [
        {
            "id": 1,
            "label": "Home",
            "path": "/"
        },
        {
            "id": 1,
            "label": "About Us",
            "path": "/about"
        },
        {
            "id": 1,
            "label": "Service",
            "path": "/service"
        },
        {
            "id": 1,
            "label": "Contact",
            "path": "/contact"
        },
        {
            "id": 1,
            "label": "Register",
            "path": "/register"
        }
    ]
    const handleMenu = () => {
        setShow(!show)
    }

    return (
        <Grid className={styles.responseHeaderContainer}>
            <Grid>
                <img src={logo} />
                <IoReorderThreeSharp fontSize={45} cursor={"pointer"} onClick={handleMenu} />
            </Grid>
            {show && <Grid>
                <List>
                    {data.map((item) => {
                        return (
                            <ListItemButton>
                                <ListItemText key={item.id} onClick={() => { navigation(item.path); handleMenu() }}>{item.label}</ListItemText>
                            </ListItemButton>
                        )
                    })}
                </List>
            </Grid>}
        </Grid>
    )
}

export default ResponseHeader