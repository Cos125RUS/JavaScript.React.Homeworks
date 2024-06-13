import React from 'react';
import {getByText, render, screen} from "@testing-library/react";
import Header from "../components/Header";


test("render header", () => {
    render(<Header/>);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
});

test("links count test", () => {
    render(<Header/>);
    // const headerEl = document.querySelector("header");
    // expect(headerEl.childElementCount).toBe(2);
});

test("header snapshot test", () => {
    const {container} = render(<Header/>);
    expect(container).toMatchSnapshot();
});