import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/MainLayout/Header";
import Providers from "@/library/providers/MainProvider";
import useIsMobile from "../../../../library/hooks/useIsMobile";

jest.mock("../../../../library/hooks/useIsMobile");

const renderComponent = () =>
  render(
    <Providers>
      <Header />
    </Providers>
  );

describe("Header", () => {
  it("renders DesktopNavigator when not on mobile", () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
    renderComponent();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Hire me")).toBeInTheDocument();
  });
});
