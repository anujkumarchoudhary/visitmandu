import React from 'react'
import styles from './Header.module.scss'
import { Grid, Typography } from '@mui/material'
import logo from '../../asserst/logo-black.png'
import { menus } from '../../data/header'
import { useNavigate } from 'react-router-dom'
import ShopCart from '../ShopCart/ShopCart'
import CommonButton from '../CommonButton/CommonButton'

export interface IMenu {
    id: number,
    label: string;
    path: string;
}
const Header = () => {
    const navigation = useNavigate()
    return (
        <Grid container className={styles.headerContainer}>
            <Grid className={styles.logo}>
                <img src={logo} />
            </Grid>
            <Grid className={styles.menus}>
                {menus.map((item: IMenu) => {
                    return (
                        <Typography key={item.id} onClick={(() => navigation(item.path))}>{item.label}</Typography>
                    )
                })}
                <ShopCart />
                <CommonButton
                    name={'Book now'}
                    handleClick={(() => console.log("hello"))}
                />
            </Grid>
        </Grid>
    )
}

export default Header