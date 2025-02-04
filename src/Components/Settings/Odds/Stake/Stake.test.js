import {Provider} from "react-redux";
import Stake from "./Stake";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../../State/SettingsReducer";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    preloadedState: {
        settings: {
            totalStake: 100,
        }
    }
})

describe('Stake component', () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Stake/>
            </Provider>
        )
        const text = screen.getByText(/Total stake:/i);
        expect(text).toBeInTheDocument();
    })
    test("Change stake work correctly", async () => {
        const onChange = jest.fn();
        render(
            <Provider store={store}>
                <Stake onChange={onChange}/>
            </Provider>
        )
        const numberField = screen.queryByRole('spinbutton');
        fireEvent.change(numberField, {target: {value: '256.1'}});
        await waitFor(() => {
            expect(onChange).toBeCalledWith(256.1);
        })
        await waitFor(() => {
            expect(numberField.value).toBe('256.1');
        })
    })
});