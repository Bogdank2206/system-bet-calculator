import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../../State/SettingsReducer";
import {Provider} from "react-redux";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";
import Item from "./Item";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
    }
})

describe("Item component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Item num={0}/>
            </Provider>
        )
        const text = screen.getByText(/1/i);
        expect(text).toBeInTheDocument();
        const number = screen.getByRole('spinbutton');
        expect(number).toBeInTheDocument();
        const checkBoxes = screen.getAllByRole('checkbox');
        expect(checkBoxes.length).toBe(3);
    })
    test("Change work correctly", async () => {
        const mockSetStatus = jest.fn();
        render(
            <Provider store={store}>
                <Item num={0} setStatus={mockSetStatus}/>
            </Provider>
        )

        const buttons = screen.getAllByRole('checkbox');
        buttons.forEach((button, idx) => {
            fireEvent.click(button);
            expect(mockSetStatus).toHaveBeenCalledTimes(idx + 1);
            expect(mockSetStatus).toBeCalledWith(idx);
        })
    })
})