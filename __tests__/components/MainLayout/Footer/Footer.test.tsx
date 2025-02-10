import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/MainLayout/Footer";
import Providers from "@/library/providers/MainProvider";

describe("Footer", () => {
  const renderComponent = () =>
    render(
      <Providers>
        <Footer />
      </Providers>
    );

  it("renders creator information correctly", () => {
    renderComponent();
    expect(screen.getByText("Created by:")).toBeInTheDocument();
    expect(screen.getByText("Demis Rincon")).toBeInTheDocument();
    expect(screen.getByText("© 2025 Open source code")).toBeInTheDocument();
  });

  it("renders contact information correctly", () => {
    renderComponent();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Hire me")).toBeInTheDocument();
    expect(screen.getByText("312 109 19 92")).toBeInTheDocument();
    expect(screen.getByText("darmfma@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });

  it("renders projects correctly", () => {
    renderComponent();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Smart Point Cloud")).toBeInTheDocument();
    expect(screen.getByText("PMG")).toBeInTheDocument();
    expect(screen.getByText("POS Kiosko")).toBeInTheDocument();
    expect(screen.getByText("H hotels")).toBeInTheDocument();
  });

  it("links have correct href attributes", () => {
    renderComponent();
    expect(screen.getByText("Hire me").closest("a")).toHaveAttribute(
      "href",
      "/hireme"
    );
    expect(screen.getByText("312 109 19 92").closest("a")).toHaveAttribute(
      "href",
      "tel:+3121091992"
    );
    expect(screen.getByText("darmfma@gmail.com").closest("a")).toHaveAttribute(
      "href",
      "mailto:darmfma@gmail.com"
    );
    expect(screen.getByText("Linkedin").closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/demisrincon/"
    );
    expect(screen.getByText("Github").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/DemisRincon"
    );
    expect(screen.getByText("Smart Point Cloud").closest("a")).toHaveAttribute(
      "href",
      "/projects#travleport"
    );
    expect(screen.getByText("PMG").closest("a")).toHaveAttribute(
      "href",
      "/projects#sancrisoft"
    );
    expect(screen.getByText("POS Kiosko").closest("a")).toHaveAttribute(
      "href",
      "/projects#kiosko"
    );
    expect(screen.getByText("H hotels").closest("a")).toHaveAttribute(
      "href",
      "/projects#tcs"
    );
  });
});
