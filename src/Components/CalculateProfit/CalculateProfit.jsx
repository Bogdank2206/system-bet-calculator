import React from 'react';
import s from './CalculateProfit.module.css'
import Table from "./Table/Table";
import {shallowEqual, useSelector} from "react-redux";

const CalculateProfit = () => {
    const winnings = useSelector(state => state.winnings.winnings, shallowEqual);
    const totalStake = useSelector(state => state.settings.totalStake, shallowEqual);
    const numberOfStakes = useSelector(state => state.settings.borders.max, shallowEqual);
    const totalWinnings = winnings.reduce((acc, el) => (acc + el), 0);
    return (
        <div className={s.calculateProfit}>
            <h2>Calculate Profit</h2>
            <Table/>
            <div className={s.results}>
                <b>Total winnings: </b>
                <span>
                    {totalWinnings.toFixed(2)}
                </span>
            </div>
            <div className={s.results}>
                <b>Stake: </b>
                <span>
                    {totalStake.toFixed(2)}
                </span>
            </div>

            <div className={s.results}>
                <b>Stake per combination: </b>
                <span>
                    {(totalStake / numberOfStakes).toFixed(2)}
                </span>
            </div>

        </div>
    )
}

export default CalculateProfit;