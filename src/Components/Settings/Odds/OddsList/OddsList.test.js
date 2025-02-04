import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../../State/SettingsReducer";
import {Provider} from "react-redux";
import OddsList from "./OddsList";
import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "@jest/globals";


const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    preloadedState: {
        settings: {
            borders: {
                min: 5,
                max: 7,
            },
            odds: Array.from({length: 7}, () => (
                {status: 0, coefficient: 2.00}
            )),
        }
    }
});

describe("Odds List component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <OddsList/>
            </Provider>
        )
        const Texts = [/Number of odds/i, /Coefficient/i, /Correct/, /Incorrect/i, /void/i];
        Texts.forEach(text => {
            const el = screen.getByText(text);
            expect(el).toBeInTheDocument();
        })
    })
    test("Render all odds", () => {
        render(
            <Provider store={store}>
                <OddsList/>
            </Provider>
        )
        const InputNumbers = screen.getAllByRole('spinbutton');
        const CheckBoxes = screen.getAllByRole('checkbox');

        expect(InputNumbers.length).toBe(7);
        expect(CheckBoxes.length).toBe(21);
    })
})