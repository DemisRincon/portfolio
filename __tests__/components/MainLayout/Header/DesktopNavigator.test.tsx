import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import DesktopNavigator from "@/components/MainLayout/Header/desktopNavigator";
import Providers from "@/library/providers/MainProvider";
import headerData from "@/library/data/header";

jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

const renderComponent = () =>
  render(
    <Providers>
      <DesktopNavigator />
    </Providers>
  );

describe("DesktopNavigator", () => {
  it("renders all navigation links", () => {
    renderComponent();
    headerData.links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("handles click events on navigation links", () => {
    renderComponent();
    headerData.links.forEach((link) => {
      const navLink = screen.getByText(link.label);
      userEvent.click(navLink);
      expect(navLink.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});
