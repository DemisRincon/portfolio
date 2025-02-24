import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Providers from "@/library/providers/MainProvider";
import PersonalProject from "@/components/PersonalProject";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("PersonalProject", () => {
  const props = {
    projectName: "My Project",
    details: "This is a sample project.",
    technologies: "React, TypeScript",
    urlGithub: "https://github.com/myproject",
    urlApp: "https://myproject.com",
    image: { url: "https://myproject.com/image.png" },
  };

  it("renders project details correctly", () => {
    renderWithTheme(<PersonalProject {...props} />);

    expect(screen.getByText("My Project")).toBeInTheDocument();
    expect(
      screen.getByText("Technologies used: React, TypeScript")
    ).toBeInTheDocument();
    expect(screen.getByText("This is a sample project.")).toBeInTheDocument();
    expect(screen.getByAltText("My Project")).toHaveAttribute(
      "src",
      "https://myproject.com/image.png"
    );
  });

  it("opens GitHub link on image click", () => {
    renderWithTheme(<PersonalProject {...props} />);
    const image = screen.getByAltText("My Project");

    global.open = jest.fn();
    fireEvent.click(image);

    expect(global.open).toHaveBeenCalledWith(
      "https://github.com/myproject",
      "_blank"
    );
  });

  it("opens GitHub link on GitHub button click", () => {
    renderWithTheme(<PersonalProject {...props} />);
    const githubButton = screen.getByText("Github");

    global.open = jest.fn();
    fireEvent.click(githubButton);

    expect(global.open).toHaveBeenCalledWith(
      "https://github.com/myproject",
      "_blank"
    );
  });

  it("renders App button with correct link", () => {
    renderWithTheme(<PersonalProject {...props} />);
    const appButton = screen.getByText("App").closest("a");

    expect(appButton).toHaveAttribute("href", "https://myproject.com");
    expect(appButton).toHaveAttribute("target", "_blank");
    expect(appButton).toHaveAttribute("rel", "noopener noreferrer");
  });
});
