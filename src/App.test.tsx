import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "redux-mock-store";
import { CountType } from './store/slices/countSlice';


describe('With React Testing Library', () => {
	const initialState:CountType = { count: 10 };
	const mockStore = configureStore();
	let store:any;

	test("render with reduxTK", () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(screen.getByText("count: 0")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		expect(screen.getByText("count: 1")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		expect(screen.getByText("count: 2")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /reset/i }));
		expect(screen.getByText("count: 9")).toBeInTheDocument();
	});

});
