import {render, screen} from '@testing-library/react';
import {test, expect, describe} from '@jest/globals';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import SettingsReducer from "./State/SettingsReducer";
import WinningsReducer from "./State/WinningsReducer";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        settings: SettingsReducer,
        winnings: WinningsReducer,
    },
});

describe('App', () => {
    test('Render app without crashing', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        const linkElement = screen.getByText(/SYSTEM BET CALCULATOR/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('Render without table', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        const table = screen.queryByText(/Calculate Profit/i);
        expect(table).toBeNull();
    })
})
