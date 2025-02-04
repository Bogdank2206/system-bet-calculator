import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../State/SettingsReducer";
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import Table from "./Table";
import {render, screen} from "@testing-library/react";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    preloadedState: {
        settings: {
            totalStake: 100,
            borders: {
                min: 14,
                max: 16,
            },
            odds: Array.from({length: 16}, () => (
                {status: 0, coefficient: 2}
            )),
        }
    }
});

describe("Odds table component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Table/>
            </Provider>
        )
        const Texts = [/Num/i, /Combinations/i, /Odds/i, /Winnings/i];
        Texts.forEach(text => {
            const el = screen.getByText(text);
            expect(el).toBeInTheDocument();
        })
        const lastNum = screen.getByText(/120/i);
        expect(lastNum).toBeInTheDocument();
    })
})