import { render, screen, } from "@testing-library/react";
import App from "./App";
import { act } from 'react';

// Mock the fetch API
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            first_name: "Blaise",
            last_name: "Kautzer",
            vehicle: "Honda CTS",
            avatar: "",
            country: "",
            createdAt: "",
          },
          {
            id: 2,
            first_name: "Jane",
            last_name: "Smith",
            vehicle: "Bike",
            avatar: "",
            country: "",
            createdAt: "",
          },
        ]),
    })
  ) as jest.Mock;
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('renders User Search App title', () => {
  act(() => {
    render(<App />);
  });
  const titleElement = screen.getByText(/User Search App/i);
  expect(titleElement).toBeInTheDocument();
});
