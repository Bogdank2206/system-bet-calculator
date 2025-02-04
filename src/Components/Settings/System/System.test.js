import {configureStore} from "@reduxjs/toolkit";
import SettingsReducer from "../../../State/SettingsReducer";
import WinningsReducer from "../../../State/WinningsReducer";
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import System from "./System";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";

const preloadedState = {
    settings: {
        borders: {
            min: 2,
            max: 3,
        },
    }
}

const store = configureStore({
    reducer: {
        settings: SettingsReducer,
        winnings: WinningsReducer,
    },
    preloadedState,
});

describe("System component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <System/>
            </Provider>
        )
        const text = screen.getByText(/Select System/i);
        expect(text).toBeInTheDocument();
    })
    test("Change button", async () => {
        const setShowTable = jest.fn();
        render(
            <Provider store={store}>
                <System setShowTable={setShowTable}/>
            </Provider>
        )
        const select = screen.getByText(/2 from 3/i);
        fireEvent.mouseDown(select);
        const newSelect = await screen.findByText(/5 from 6/i);
        fireEvent.click(newSelect);
        await waitFor(() => {
            const text = screen.getByText(/5 from 6/i);
            expect(text).toBeInTheDocument();
        })
        await waitFor(() => {
            expect(setShowTable).toBeCalledTimes(1);
        })
    })
})