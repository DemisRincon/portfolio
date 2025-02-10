import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WrapperFadeIn, { IWrapperFadeInProps } from "@/components/WrapperFadeIn";

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  useAnimation: jest.fn().mockReturnValue({
    start: jest.fn(),
    subscribe: jest.fn(),
  }),
}));

describe("WrapperFadeIn", () => {
  const mockProps: IWrapperFadeInProps = {
    children: <div>Test Content</div>,
    conditionWrapper: true,
    className: "test-class",
    threshold: 0.1,
    fromTop: true,
    transition: { duration: 0.6, delay: 0.1 },
  };

  it("renders children correctly", () => {
    render(<WrapperFadeIn {...mockProps} />);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    render(<WrapperFadeIn {...mockProps} />);
    expect(screen.getByText("Test Content").parentElement).toHaveClass(
      "test-class"
    );
  });

  it("does not wrap children if conditionWrapper is false", () => {
    render(<WrapperFadeIn {...mockProps} conditionWrapper={false} />);
    expect(screen.getByText("Test Content").parentElement).not.toHaveClass(
      "test-class"
    );
  });

  it("uses the correct initial and animate states", () => {
    render(<WrapperFadeIn {...mockProps} />);
    const wrapper = screen.getByText("Test Content").parentElement;
    expect(wrapper).toHaveStyle("opacity: 0");
    expect(wrapper).toHaveStyle("transform: translateY(40px)");
  });
});
