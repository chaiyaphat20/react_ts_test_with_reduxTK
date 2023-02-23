import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./store/test-utils";


describe("With React Testing Library", () => {

  test("render with reduxTK", () => {
    renderWithProviders(<App />);

    expect(screen.getByText("count: 0")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(screen.getByText("count: 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(screen.getByText("count: 2")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByText("count: 9")).toBeInTheDocument();
  });
});
