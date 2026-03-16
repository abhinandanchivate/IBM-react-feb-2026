import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders footer with app name", () => {
    render(<Footer appName="DevConnector" />);

    expect(screen.getByText(/DevConnector/i)).toBeInTheDocument();
  });

  test("renders current year", () => {
    const year = new Date().getFullYear();
    render(<Footer appName="TestApp" />);

    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
