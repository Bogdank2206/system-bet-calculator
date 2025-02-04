import React from 'react';
import s from './App.module.css';
import Header from "./Components/Header/Header";
import Settings from "./Components/Settings/Settings";
import CalculateProfit from "./Components/CalculateProfit/CalculateProfit";

const App = () => {
    const [showTable, setShowTable] = React.useState(false);
    return (
        <div className={s.app}>
            <Header/>
            <Settings setShowTable={setShowTable}/>
            {showTable ? <CalculateProfit/> : null}
        </div>
    )
}

export default App;