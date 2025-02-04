import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Providers from "@/library/providers/MainProvider";
import HeroTitle from "@/library/components/HeroTitle";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

describe("HeroSideImageHead", () => {
  it("renders heading and middle heading", () => {
    renderWithTheme(
      <HeroTitle
        heading="Welcome"
        middleHeading={["to my portfolio"]}
        button={{ text: "", bgColor: "", url: "", color: "" }}
        endHeading={""}
      >
        <HeroTitle.Button text="" bgColor="" url="" color="" />
      </HeroTitle>
    );

    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("to my portfolio")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
