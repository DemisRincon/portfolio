import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNavigator from "../../../../library/components/MainLayout/Header/MobileNavigator";
import Providers from "@/library/providers/MainProvider";

jest.mock(
  "../../../../library/components/MainLayout/Header/MobileNavigator",
  () => {
    return function DummyMobileNavigator() {
      const [menuOpen, setMenuOpen] = React.useState(false);
      return (
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)}>Mocked Button</button>
          {menuOpen && <div>Mocked Floating Menu</div>}
        </div>
      );
    };
  }
);
const renderComponent = () =>
  render(
    <Providers>
      <MobileNavigator />
    </Providers>
  );

describe("MobileNavigator", () => {
  it("renders MobileNavigator", () => {
    renderComponent();
    expect(screen.getByText("Mocked Button")).toBeInTheDocument();
  });
  it("toggles menu", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Mocked Button"));
    expect(screen.getByText("Mocked Floating Menu")).toBeInTheDocument();
  });

  it("toggles menu", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Mocked Button"));
    expect(screen.getByText("Mocked Floating Menu")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Mocked Button"));
    expect(screen.queryByText("Mocked Floating Menu")).not.toBeInTheDocument();
  });
});
