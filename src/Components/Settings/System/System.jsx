import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {setBorders} from "../../../State/SettingsReducer";

const System = ({setShowTable}) => {
    const {min, max} = useSelector((state) => state.settings.borders, shallowEqual);
    const dispatch = useDispatch();

    const variants = Array.from({length: 20 + 1}, (_, max) => {
        if (max >= 3) {
            return Array.from({length: max}, (_, min) => {
                if (min >= 2) {
                    return (
                        <MenuItem key={(max - 3) * 20 + min} value={`${min};${max}`}>
                            {`${min} from ${max}`}
                        </MenuItem>
                    )
                }
            })
        }
    }).flat();

    const onChange = (e) => {
        const [min, max] = e.target.value.split(';').map((el) => (Number(el)));
        dispatch(setBorders(min, max));
        setShowTable(false);
    }


    return (
        <div>
            <div style={{margin: '10px'}}><b>Select System</b></div>
            <FormControl fullWidth sx={{margin: '0 auto 25px'}}>
                <InputLabel>System</InputLabel>
                <Select
                    variant={'standard'}
                    value={`${min};${max}`}
                    onChange={onChange}
                >
                    {variants}
                </Select>
            </FormControl>
        </div>
    )
}

export default System;