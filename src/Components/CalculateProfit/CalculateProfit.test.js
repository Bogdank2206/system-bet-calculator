import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../State/SettingsReducer";
import WinningsReducer from "../../State/WinningsReducer";
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import CalculateProfit from "./CalculateProfit";
import {render, screen} from "@testing-library/react";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        winnings: WinningsReducer,
    },
    preloadedState: {
        settings: {
            totalStake: 100,
            borders: {
                min: 3,
                max: 4,
            },
            odds: [
                {status: 0, coefficient: 2.00},
                {status: 1, coefficient: 2.00},
                {status: 2, coefficient: 2.00},
                {status: 0, coefficient: 2.00},
            ],
        },
        winnings: {
            winnings: [],
        }
    }
})

describe("Calculate Profit component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <CalculateProfit/>
            </Provider>
        )
        const Texts = [
            /Calculate Profit/i, /Total winnings:/i, /Stake:/i, /Stake per combination:/i,
        ];
        Texts.forEach(text => {
            const el = screen.getByText(text);
            expect(el).toBeInTheDocument();
        })
    })
    test("Results show correctly", () => {
        render(
            <Provider store={store}>
                <CalculateProfit/>
            </Provider>
        )
        const totalWin = screen.getByTestId(/totalWin/i);
        const stake = screen.getByTestId(/totalStake/i);
        const stakePerCombination = screen.getByTestId(/stakePerCombination/i);

        expect(totalWin).toHaveTextContent(/150.00/);
        expect(stake).toHaveTextContent(/100.00/);
        expect(stakePerCombination).toHaveTextContent(/25.00/);
    })
})