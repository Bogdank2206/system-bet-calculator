import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increaseWinnings} from "../../../State/WinningsReducer";

const Item = ({num, comb}) => {
    const odds = useSelector((state) => (
        state.settings.odds
    ))
    const colors = ['#2e7d32ff', '#d32f2f', '#ed6c02'];
    const totalStake = useSelector((state) => (
        state.settings.totalStake
    ))
    const numberOfCombinations = useSelector((state) => (
        state.settings.borders.max
    ))
    const stake = totalStake / numberOfCombinations;

    const winning = Math.max(0, comb.reduce((acc, num) => {
        if (odds[num].status === 0) {
            return acc + odds[num].coefficient
        } else if (odds[num].status === 1) {
            return acc - odds[num].coefficient
        } else {
            return acc;
        }
    }, 0) * stake);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(increaseWinnings(num, winning))
    })

    const oddsCoef = comb.reduce((acc, num) => {
        if (odds[num].status === 0) {
            return acc * odds[num].coefficient
        } else if (odds[num].status === 1) {
            return 0;
        } else {
            return acc;
        }
    }, 1);
    return (
        <tr>
            <td><b>{num + 1}</b></td>
            {
                comb.map((num, idx) => {
                    const {status, coefficient} = odds[num];
                    return (
                        <td key={idx} style={{color: colors[status]}}><b>{coefficient.toFixed(2)}</b></td>
                    )
                })
            }
            <td><span data-testid={'oddsCoef'}>{oddsCoef.toFixed(2)}</span></td>
            <td><span data-testid={'winning'}>{winning.toFixed(2)}</span></td>
        </tr>
    )
}

export default Item;