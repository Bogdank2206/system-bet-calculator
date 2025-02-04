import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../State/SettingsReducer";
import {Provider} from "react-redux";
import Item from "./Item";
import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    preloadedState: {
        settings: {
            totalStake: 100,
            borders: {
                min: 2,
                max: 3,
            },
            odds: [
                {status: 0, coefficient: 2},
                {status: 2, coefficient: 4},
                {status: 1, coefficient: 3},
            ]
        }
    }
});

describe("Item component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Item num={0} comb={[0, 1]}/>
            </Provider>
        )
        const text = screen.queryAllByText(/2/i);
        expect(text).not.toBeNull();
    })
    test("Coef show correctly", () => {
        render(
            <Provider store={store}>
                <Item num={0} comb={[0, 1]}/>
            </Provider>
        )
        const oddsCoef = screen.getByTestId(/oddsCoef/i);
        expect(oddsCoef).toHaveTextContent(/2.00/);
    })
    test("Winnings show correctly", () => {
        render(
            <Provider store={store}>
                <Item num={0} comb={[0, 1]}/>
            </Provider>
        )
        const winning = screen.getByTestId(/winning/i);
        expect(winning).toHaveTextContent(/66.67/);
    })
})