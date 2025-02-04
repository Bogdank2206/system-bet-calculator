import React from 'react';
import {shallowEqual, useSelector} from "react-redux";

const Info = () => {
    const {min, max} = useSelector((state) => state.settings.borders, shallowEqual);
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    }
    return (
        <div style={styles}>
            {`A system ${min} from ${max} + undefined contains ${max} combinations`}
        </div>
    )
}

export default Info;