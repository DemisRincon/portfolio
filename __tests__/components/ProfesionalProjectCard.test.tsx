import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfessionalProjectCard from "../../components/ProfesionalProjectCard";
import Providers from "@/library/providers/MainProvider";

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  useAnimation: jest.fn().mockReturnValue({
    start: jest.fn(),
    subscribe: jest.fn(),
  }),
}));

jest.mock("../../library/hooks/useScrollOnView", () =>
  jest.fn(() => jest.fn())
);
jest.mock("../../library/hooks/useTransformOnScroll", () =>
  jest.fn(() => ({ y: 1, ref: jest.fn() }))
);

describe("ProfessionalProjectCard", () => {
  const mockProps = {
    description: ["First description", "Second description"],
    enterprise: "Test Enterprise",
    url: "https://example.com",
    name: "Test Project",
    productPhoto: {
      url: "https://example.com/image.jpg",
      md: "https://example.com/image-md.jpg",
    },
    buttonText: "Learn More",
    title: "Test Title",
  };

  it("renders project name correctly", () => {
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders enterprise name correctly", () => {
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    expect(screen.getByText("Test Enterprise")).toBeInTheDocument();
  });

  it("renders descriptions correctly", () => {
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    expect(screen.getByText("First description")).toBeInTheDocument();
    expect(screen.getByText("Second description")).toBeInTheDocument();
  });

  it("renders button with correct text", () => {
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });

  it("opens the correct URL when image is clicked", () => {
    window.open = jest.fn();
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    const image = screen.getByAltText("Test Project");
    fireEvent.click(image);
    expect(window.open).toHaveBeenCalledWith("https://example.com", "_blank");
  });

  it("opens the correct URL when button is clicked", () => {
    render(
      <Providers>
        <ProfessionalProjectCard {...mockProps} />
      </Providers>
    );
    const button = screen.getByText("Learn More").closest("a");
    expect(button).toHaveAttribute("href", "https://example.com");
  });
});
