import Info from "./Info";
import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../../../State/SettingsReducer";


const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    preloadedState: {
        settings: {
            borders: {
                min: 3,
                max: 7,
            }
        }
    }
});

describe('Info component', () => {
    test("Render with text", () => {
        render(
            <Provider store={store}>
                <Info/>
            </Provider>
        );
        const text = screen.getByText(
            /A system 3 from 7 \+ undefined contains 7 combinations/i
        );
        expect(text).toBeInTheDocument();
    })
});