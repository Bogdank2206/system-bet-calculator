import Odds from "./Odds";
import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../State/SettingsReducer";
import {Provider} from "react-redux";
import WinningsReducer from "../../../State/WinningsReducer";

const STATUS = {
    CORRECT: 0,
    INCORRECT: 1,
    VOID: 2,
}

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        winnings: WinningsReducer,
    },
    preloadedState: {
        settings: {
            borders: {
                min: 2,
                max: 3,
            },
            odds: [
                {status: STATUS.CORRECT, coefficient: 2.00},
                {status: STATUS.VOID, coefficient: 2.00},
                {status: STATUS.INCORRECT, coefficient: 2.00},
            ],
        },
        winnings: {
            totalStake: 100,
        }
    }
});

describe('Odds', () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Odds/>
            </Provider>
        )
        const text = screen.queryAllByText(/Odds/i);
        expect(text).not.toBeNull();
    })
});