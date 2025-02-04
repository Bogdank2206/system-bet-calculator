const RESET_WINNING = 'winning/RESET_WINNING';
const INCREASE_WINNING = 'winning/INCREASE_WINNING';


const initialState = {
    winnings: [],
}

const WinningsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_WINNING:
            return {
                ...state,
                winnings: [],
            }
        case INCREASE_WINNING:
            return {
                ...state,
                winnings: Object.values({...state.winnings, ...action.payload}),
            }
        default:
            return state;
    }
}

export const resetWinnings = () => ({
    type: RESET_WINNING,
})

export const increaseWinnings = (num, winnings) => ({
    type: INCREASE_WINNING,
    payload: {
        [num]: winnings,
    },
})

export default WinningsReducer;