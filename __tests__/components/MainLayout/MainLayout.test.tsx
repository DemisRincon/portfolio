import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainLayout from "@/components/MainLayout";
import Providers from "@/library/providers/MainProvider";
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("MainLayout", () => {
  it("renders the Header component", () => {
    act(() => {
      renderWithTheme(
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      );
    });
    expect(screen.getAllByText("Demis Rincon")[0]).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    renderWithTheme(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(screen.getByText("© 2025 Open source code")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    renderWithTheme(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies the correct styles to PageWrapper", () => {
    renderWithTheme(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    const pageWrapper = screen.getByText("Test Content").parentElement;
    expect(pageWrapper).toHaveStyle("display: flex");
    expect(pageWrapper).toHaveStyle("flex-direction: column");
    expect(pageWrapper).toHaveStyle("align-items: center");
    expect(pageWrapper).toHaveStyle("justify-content: center");
    expect(pageWrapper).toHaveStyle("min-height: 100vh");
    expect(pageWrapper).toHaveStyle("width: 100%");
    expect(pageWrapper).toHaveStyle("padding-top: 80px");
  });
});
