import React from "react";
import {AppBar, Typography} from "@mui/material";

const Header = () => {
    const styles = {
        textAlign: 'left',
        padding: '2%',
        backgroundColor: '#4545ca',
    }
    return (
        <AppBar position='static' style={styles}>
            <Typography style={{fontSize: '2rem'}} variant="subtitle2" component="div">
                SYSTEM BET CALCULATOR
            </Typography>
        </AppBar>
    )
}

export default Header;