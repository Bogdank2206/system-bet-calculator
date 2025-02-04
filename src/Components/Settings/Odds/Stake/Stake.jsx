import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Box, Grid2, TextField} from "@mui/material";
import s from './Stake.module.css'
import {setTotalStake} from "../../../../State/SettingsReducer";

const Stake = (props) => {
    const totalStake = useSelector(state => state.settings.totalStake, shallowEqual);
    const dispatch = useDispatch();

    const onChange = (e) => {
        let value = Number(e.target.value);
        value = Math.min(10 ** 6, value);
        if (props.onChange) {
            props.onChange(value)
        }
        dispatch(setTotalStake(value));
    }

    return (
        <Grid2 className={s.stake} container spacing={1}>
            <Box xs={3} className={s.item}>
                <b>Total stake:</b>
            </Box>
            <Box xs={7} className={s.item}>
                <TextField variant="outlined"
                           type={'number'}
                           value={totalStake}
                           onChange={onChange}
                />
            </Box>
            <Box xs={2} className={s.item}>
                EUR
            </Box>
        </Grid2>
    )
}

export default Stake;