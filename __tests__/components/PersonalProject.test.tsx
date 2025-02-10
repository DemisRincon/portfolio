import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Providers from "@/library/providers/MainProvider";
import PersonalProject from "@/components/PersonalProject";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("PersonalProject", () => {
  const mockProps = {
    projectName: "My Project",
    details: "This is a sample project.",
    technologies: "React, TypeScript",
    urlGithub: "https://github.com/myproject",
    urlApp: "https://myproject.com",
    image: { url: "https://myproject.com/image.png" },
  };

  it("renders project name, details, and technologies", () => {
    renderWithTheme(<PersonalProject {...mockProps} />);

    expect(screen.getByText("My Project")).toBeInTheDocument();
    expect(screen.getByText("This is a sample project.")).toBeInTheDocument();
    expect(
      screen.getByText("Technologies used: React, TypeScript")
    ).toBeInTheDocument();
  });

  it("renders project image", () => {
    renderWithTheme(<PersonalProject {...mockProps} />);

    const image = screen.getByAltText("My Project");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://myproject.com/image.png");
  });

  it("opens GitHub URL in a new tab when GitHub button is clicked", () => {
    renderWithTheme(<PersonalProject {...mockProps} />);

    const githubButton = screen.getByText("Github");
    expect(githubButton).toBeInTheDocument();

    window.open = jest.fn();
    fireEvent.click(githubButton);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/myproject",
      "_blank"
    );
  });

  it("opens App URL in a new tab when App button is clicked", () => {
    renderWithTheme(<PersonalProject {...mockProps} />);

    const appButton = screen.getByText("App");
    expect(appButton).toBeInTheDocument();

    window.open = jest.fn();
    fireEvent.click(appButton);
    expect(window.open).toHaveBeenCalledWith("https://myproject.com", "_blank");
  });

  it("opens App URL in a new tab when image is clicked", () => {
    renderWithTheme(<PersonalProject {...mockProps} />);

    const image = screen.getByAltText("My Project");
    expect(image).toBeInTheDocument();

    window.open = jest.fn();
    fireEvent.click(image);
    expect(window.open).toHaveBeenCalledWith("https://myproject.com", "_blank");
  });
});
