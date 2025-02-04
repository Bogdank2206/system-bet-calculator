import Header from "./Header";
import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";

describe("Header component", () => {
    test("Render without crashing", () => {
        render(
            <Header/>
        )
        const text = screen.getByText(/SYSTEM BET CALCULATOR/i);
        expect(text).toBeInTheDocument();
    })
})