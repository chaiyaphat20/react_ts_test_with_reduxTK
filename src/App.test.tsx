import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "redux-mock-store";
import { CountType } from './store/slices/countSlice';
import store, { AppDispatch, RootState } from './store/stores';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createMockStore from 'redux-mock-store';
import { renderWithProviders } from './store/test-utils';


describe('With React Testing Library', () => {
	test("render with reduxTK", () => {

		renderWithProviders(<App />)

		expect(screen.getByText("count: 0")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		expect(screen.getByText("count: 1")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		expect(screen.getByText("count: 2")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /reset/i }));
		expect(screen.getByText("count: 9")).toBeInTheDocument();
	});

});
