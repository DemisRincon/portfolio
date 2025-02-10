import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfessionalProjectCard from "@/components/ProfesionalProjectCard";
import Providers from "@/library/providers/MainProvider";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("ProfessionalProjectCard", () => {
  const mockProps = {
    description: ["First description", "Second description"],
    enterprise: "Enterprise Name",
    url: "https://enterprise.com",
    name: "Project Name",
    productPhoto: { url: "https://enterprise.com/image.png" },
    buttonText: "Visit Project",
    title: "Project Title",
  };

  it("renders project name, enterprise, and descriptions", () => {
    renderWithTheme(<ProfessionalProjectCard {...mockProps} />);

    expect(screen.getByText("Project Name")).toBeInTheDocument();
    expect(screen.getByText("Enterprise Name")).toBeInTheDocument();
    expect(screen.getByText("First description")).toBeInTheDocument();
    expect(screen.getByText("Second description")).toBeInTheDocument();
  });

  it("renders project image", () => {
    renderWithTheme(<ProfessionalProjectCard {...mockProps} />);

    const image = screen.getByAltText("Project Name");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://enterprise.com/image.png");
  });

  it("opens project URL in a new tab when image is clicked", () => {
    renderWithTheme(<ProfessionalProjectCard {...mockProps} />);

    const image = screen.getByAltText("Project Name");
    expect(image).toBeInTheDocument();

    window.open = jest.fn();
    fireEvent.click(image);
    expect(window.open).toHaveBeenCalledWith(
      "https://enterprise.com",
      "_blank"
    );
  });

  it("opens project URL in a new tab when button is clicked", () => {
    renderWithTheme(<ProfessionalProjectCard {...mockProps} />);

    const button = screen.getByText("Visit Project");
    expect(button).toBeInTheDocument();

    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://enterprise.com",
      "_blank"
    );
  });
});
