import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOddsCoefficient, setOddsStatus} from "../../../../State/SettingsReducer";
import {Checkbox, TextField} from "@mui/material";

const Item = ({num, ...props}) => {
    const STATUS = {
        CORRECT: 0,
        INCORRECT: 1,
        VOID: 2,
    }
    const {status, coefficient} = useSelector((state) => state.settings.odds[num]);
    const dispatch = useDispatch();

    const setCoefficient = (e) => {
        const value = Number(e.target.value) || 0;
        dispatch(setOddsCoefficient(num, Math.min(value, 10 ** 2)));
    }

    const setStatus = (status) => () => {
        if (props.setStatus) {
            props.setStatus(status);
        }
        dispatch(setOddsStatus(num, status));
    }

    return (
        <tr>
            <td>
                <b>{num + 1}</b>
            </td>
            <td colSpan={5}>
                <TextField variant='outlined'
                           type='number'
                           value={coefficient}
                           onChange={setCoefficient}
                />
            </td>
            <td>
                <Checkbox id={'correct'}
                          data-testid="correct"
                          color='success'
                          checked={status === STATUS.CORRECT}
                          onClick={setStatus(STATUS.CORRECT)}
                />
            </td>
            <td>
                <Checkbox id={'incorrect'}
                          data-testid="incorrect"
                          color='error'
                          checked={status === STATUS.INCORRECT}
                          onClick={setStatus(STATUS.INCORRECT)}
                />
            </td>
            <td>
                <Checkbox id={'void'}
                          data-testid="void"
                          color='warning'
                          checked={status === STATUS.VOID}
                          onClick={setStatus(STATUS.VOID)}
                />
            </td>
        </tr>
    )
}

export default Item;