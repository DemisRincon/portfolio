import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FloatingMenu from "../../../../components/MainLayout/Header/floatingMenu";
import Providers from "@/library/providers/MainProvider";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useServerInsertedHTML: jest.fn(),
  usePathname: jest.fn(),
}));

const mockToggleMenu = jest.fn();

const renderComponent = () =>
  render(
    <Providers>
      <FloatingMenu toggleMenu={mockToggleMenu} />
    </Providers>
  );

describe("FloatingMenu", () => {
  it("renders FloatingMenu", () => {
    renderComponent();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Hire me")).toBeInTheDocument();
  });
});
