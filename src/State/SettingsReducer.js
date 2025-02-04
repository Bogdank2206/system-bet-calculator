const SET_BORDERS = 'settings/SET_BORDERS';
const SET_TOTAL_STAKE = 'settings/SET_TOTAL_STAKE';
const SET_ODDS_STATUS = 'settings/SET_ODDS_STATUS';
const SET_COEFFICIENT_STATUS = 'settings/SET_COEFFICIENT_STATUS';

const STATUS = {
    CORRECT: 0,
    INCORRECT: 1,
    VOID: 2,
}

const initialState = {
    totalStake: 100,
    borders: {
        min: 2,
        max: 3,
    },
    odds: [
        {status: STATUS.CORRECT, coefficient: 2.00},
        {status: STATUS.VOID, coefficient: 2.00},
        {status: STATUS.INCORRECT, coefficient: 2.00},
    ],
};

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BORDERS:
            return {
                ...state,
                ...action.payload,
                odds: Array.from({length: action.payload.borders.max}, () => ({
                    status: STATUS.CORRECT,
                    coefficient: 2.00
                }))
            }
        case SET_TOTAL_STAKE:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ODDS_STATUS:
            return {
                ...state,
                odds: state.odds.map((el, idx) => {
                    if (idx === action.num) {
                        return {
                            ...el,
                            status: action.status,
                        }
                    } else {
                        return el;
                    }
                }),
            }
        case SET_COEFFICIENT_STATUS:
            return {
                ...state,
                odds: state.odds.map((el, idx) => {
                    if (idx === action.num) {
                        return {
                            ...el,
                            coefficient: action.coefficient,
                        }
                    } else {
                        return el;
                    }
                }),
            }
        default:
            return state;
    }
}

export const setBorders = (min, max) => ({
    type: SET_BORDERS,
    payload: {
        borders: {
            min,
            max
        },
    }
})

export const setTotalStake = (totalStake) => ({
    type: SET_TOTAL_STAKE,
    payload: {
        totalStake,
    }
})

export const setOddsStatus = (num, status) => ({
    type: SET_ODDS_STATUS,
    num,
    status,
})

export const setOddsCoefficient = (num, coefficient) => ({
    type: SET_COEFFICIENT_STATUS,
    num,
    coefficient,
})

export default SettingsReducer;