import React from "react";
import s from './OddsList.module.css';
import {shallowEqual, useSelector} from "react-redux";
import Item from "./Item";

const OddsList = () => {
    const numberOfOdds = useSelector((state) => (state.settings.borders.max), shallowEqual);
    return (
        <div>
            <h3>Odds list</h3>
            <table className={s.table}>
                <thead>
                <tr>
                    <td><b>Number of odds</b></td>
                    <td colSpan={5}><b>Coefficient</b></td>
                    <td><span style={{color: '#2e7d32ff'}}><b>Correct</b></span></td>
                    <td><span style={{color: '#d32f2f'}}><b>Incorrect</b></span></td>
                    <td><span style={{color: '#ed6c02'}}><b>Void</b></span></td>
                </tr>
                </thead>
                <tbody>
                {
                    Array.from({length: numberOfOdds}, (_, idx) => (
                        <Item num={idx} key={idx}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default OddsList;