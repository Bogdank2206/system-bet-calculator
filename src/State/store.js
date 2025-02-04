import {configureStore} from "@reduxjs/toolkit";
import SettingsReducer from "./SettingsReducer";
import WinningsReducer from "./WinningsReducer";

const store = configureStore({
    reducer: {
        settings: SettingsReducer,
        winnings: WinningsReducer,
    }
})


window.store = store;
export default store;