import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactCard from "../../library/components/ContactCard";
import "@testing-library/jest-dom";
import Providers from "@/library/providers/MainProvider";
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};
// Describing the test suite for ContactCard component
describe("ContactCard", () => {
  // Test case for rendering the ContactCard component
  it("renders ContactCard component", () => {
    // Rendering the ContactCard component
    renderWithTheme(<ContactCard />);

    // Asserting that the heading is displayed
    expect(screen.getByText("Contact")).toBeInTheDocument();
    // Asserting that the Resume button is displayed
    expect(screen.getByText("Resume")).toBeInTheDocument();
    // Asserting that the LinkedIn link is displayed
    expect(screen.getByText("Linkedin: /demisrincon")).toBeInTheDocument();
    // Asserting that the Phone link is displayed
    expect(screen.getByText("Phone: 312 109 19 92")).toBeInTheDocument();
    // Asserting that the Email link is displayed
    expect(screen.getByText("Email: darmfma@gmail.com")).toBeInTheDocument();
    // Asserting that the Github link is displayed
    expect(screen.getByText("Github: /DemisRincon")).toBeInTheDocument();
  });

  // Test case for clicking the Resume button
  it("opens resume in a new tab when Resume button is clicked", () => {
    // Mocking window.open
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    // Rendering the ContactCard component
    renderWithTheme(<ContactCard />);

    // Clicking the Resume button
    fireEvent.click(screen.getByText("Resume"));

    // Asserting that window.open was called with the correct arguments
    expect(openSpy).toHaveBeenCalledWith("/resume.pdf", "_blank");

    // Restoring the original implementation of window.open
    openSpy.mockRestore();
  });

  // Test case for checking the href attributes of links
  it("has correct href attributes for links", () => {
    // Rendering the ContactCard component
    renderWithTheme(<ContactCard />);

    // Asserting that the LinkedIn link has the correct href attribute
    expect(
      screen.getByText("Linkedin: /demisrincon").closest("a")
    ).toHaveAttribute("href", "https://www.linkedin.com/in/demisrincon/");
    // Asserting that the Phone link has the correct href attribute
    expect(
      screen.getByText("Phone: 312 109 19 92").closest("a")
    ).toHaveAttribute("href", "tel:+3121091992");
    // Asserting that the Email link has the correct href attribute
    expect(
      screen.getByText("Email: darmfma@gmail.com").closest("a")
    ).toHaveAttribute("href", "mailto:darmfma@gmail.com");
    // Asserting that the Github link has the correct href attribute
    expect(
      screen.getByText("Github: /DemisRincon").closest("a")
    ).toHaveAttribute("href", "https://github.com/DemisRincon");
  });
});
