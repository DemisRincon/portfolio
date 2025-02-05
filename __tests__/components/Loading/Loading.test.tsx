import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "@/library/components/loading";
import Providers from "@/library/providers/MainProvider";

const renderComponent = () =>
  render(
    <Providers>
      <Loading />
    </Providers>
  );

describe("Loading", () => {
  it("renders Loading component", () => {
    renderComponent();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders SpinnerContainer", () => {
    renderComponent();
    const spinners = screen.getAllByTestId("spinner");
    expect(spinners.length).toBeGreaterThan(0);
  });

  it("renders LoadingText", () => {
    renderComponent();
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
