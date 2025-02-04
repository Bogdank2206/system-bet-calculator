import {configureStore} from "@reduxjs/toolkit";
import SettingsReducer from "../../State/SettingsReducer";
import WinningsReducer from "../../State/WinningsReducer";
import {Provider} from "react-redux";
import Settings from "./Settings";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";

const store = configureStore({
    reducer: {
        settings: SettingsReducer,
        winnings: WinningsReducer,
    },
});

describe("Settings component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Settings/>
            </Provider>
        )
        const text = screen.getByText(/Select conditions/i);
        expect(text).toBeInTheDocument();
    })
    test("Button work correctly", () => {
        const onClick = jest.fn();
        render(
            <Provider store={store}>
                <Settings onClick={onClick}/>
            </Provider>
        )
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})