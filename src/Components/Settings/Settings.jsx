import React from "react";
import s from './Settings.module.css';
import System from "./System/System";
import classNames from "classnames";
import Info from "./Info/Info";
import Odds from "./Odds/Odds";
import {Button} from "@mui/material";
import {resetWinnings} from "../../State/WinningsReducer";
import {useDispatch} from "react-redux";

const Settings = ({setShowTable, ...props}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        } else {
            dispatch(resetWinnings());
            setShowTable(true);
        }
    }
    return (
        <div>
            <h2 style={{color: 'white'}}>Select conditions</h2>
            <div className={s.settings}>
                <div className={classNames(s.system, s.container)}>
                    <System setShowTable={setShowTable}/>
                </div>
                <div className={classNames(s.info, s.container)}>
                    <Info/>
                </div>
                <div className={classNames(s.odds, s.container)}>
                    <Odds/>
                </div>
                <div className={classNames(s.button)}>
                    <Button variant="contained"
                            onClick={onClick}
                    >
                        <h2>
                            Calculate
                        </h2>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Settings;