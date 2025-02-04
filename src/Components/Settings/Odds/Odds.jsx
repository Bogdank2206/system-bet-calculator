import React from "react";
import Stake from "./Stake/Stake";
import OddsList from "./OddsList/OddsList";

const Odds = () => {
    return (
        <div>
            <h2>Odds</h2>
            <Stake/>
            <OddsList/>
        </div>
    )
}

export default Odds;