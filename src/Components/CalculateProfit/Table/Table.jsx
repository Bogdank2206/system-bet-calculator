import {useSelector} from "react-redux";
import Item from "../Item";
import React from "react";

const combinations = (array, k) => {
    if (k === 0) {
        return [[]];
    } else {
        const res = [];
        array.forEach((item, idx) => {
            const prev = combinations(array.slice(idx + 1), k - 1);
            prev.forEach((el) => {
                res.push([
                    item,
                    ...el,
                ]);
            })
        })
        return res;
    }
}

const Table = () => {
    const {min, max} = useSelector((state) => (
        state.settings.borders
    ));
    const comb = combinations(Array.from({
        length: max,
    }, (_, idx) => (idx)), min);
    return (
        <table style={{width: '90%', margin: '0 auto', borderCollapse: 'separate', borderSpacing: '10px'}}>
            <thead>
            <tr>
                <td><b>Num</b></td>
                <td colSpan={min}><b>Combinations</b></td>
                <td><b>Odds</b></td>
                <td><b>Winnings</b></td>
            </tr>
            </thead>
            <tbody>
            {
                comb.map((item, idx) => (
                    <Item key={idx} num={idx} comb={item}/>
                ))
            }
            </tbody>
        </table>
    )
}

export default Table;