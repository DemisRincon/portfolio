import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSideImageHead from "@/library/components/HeroSideImageHead";
import Providers from "@/library/providers/MainProvider";

// Helper function to render components with Providers
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("HeroSideImageHead", () => {
  it("renders heading and middle heading", () => {
    renderWithTheme(
      <HeroSideImageHead
        heading="Welcome"
        middleHeading={["Developer", "Designer", "Creator"]}
        image={{ url: "path/to/image.jpg" }}
      >
        <HeroSideImageHead.Subheading subHeading="to my portfolio" />
      </HeroSideImageHead>
    );

    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("to my portfolio")).toBeInTheDocument();
    expect(screen.getByAltText("Profile Photo")).toHaveAttribute(
      "src",
      "path/to/image.jpg"
    );
  });

  it("renders middle heading text that changes over time", () => {
    jest.useFakeTimers();
    renderWithTheme(
      <HeroSideImageHead
        heading="Welcome"
        middleHeading={["Developer", "Designer", "Creator"]}
        image={{ url: "path/to/image.jpg" }}
      >
        <HeroSideImageHead.Subheading subHeading="to my portfolio" />
      </HeroSideImageHead>
    );

    expect(screen.getByText("Developer")).toBeInTheDocument();
    jest.advanceTimersByTime(3500);
  });

  it("renders sliced text when sliceText is true", () => {
    renderWithTheme(
      <HeroSideImageHead
        heading="Welcome"
        middleHeading={["Developer"]}
        image={{ url: "path/to/image.jpg" }}
        sliceText={true}
      >
        <HeroSideImageHead.Subheading subHeading="to my portfolio" />
      </HeroSideImageHead>
    );

    expect(screen.getByText("Welcome")).toHaveStyle("flex-direction: column;");
  });

  it("renders image with photo styling when isPhoto is true", () => {
    renderWithTheme(
      <HeroSideImageHead
        heading="Welcome"
        middleHeading={["Developer"]}
        image={{ url: "path/to/image.jpg" }}
        isPhoto={true}
      >
        <HeroSideImageHead.Subheading subHeading="to my portfolio" />
      </HeroSideImageHead>
    );

    const profileImage = screen.getByAltText("Profile Photo");
    expect(profileImage).toHaveStyle("border-radius: 50%;");
    expect(profileImage).toHaveStyle(
      "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
    );
  });
});
