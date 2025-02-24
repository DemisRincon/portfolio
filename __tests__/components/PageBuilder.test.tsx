import React from "react";
import { render, screen } from "@testing-library/react";
import PageBuilder from "../../components/PageBuilder";
import useGetPage from "../../library/hooks/useGetPage";
import useManualScroll from "../../library/hooks/useManualScroll";
import Providers from "@/library/providers/MainProvider";

jest.mock("../../library/hooks/useGetPage");
jest.mock("../../library/hooks/useManualScroll");

describe("PageBuilder", () => {
  beforeEach(() => {
    (useGetPage as jest.Mock).mockReturnValue({
      data: [],
      error: null,
    });
    (useManualScroll as jest.Mock).mockImplementation(() => {});
  });

  it("renders loading state initially", () => {
    render(<PageBuilder />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useGetPage as jest.Mock).mockReturnValue({
      data: null,
      error: "Error loading data",
    });
    render(<PageBuilder />);
    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });

  it("renders components based on page data", () => {
    (useGetPage as jest.Mock).mockReturnValue({
      data: [
        {
          __typename: "HeroSideImageHead",
          _id: "1",
          heading: "Heading 1",
          subHeading: "Subheading 1",
          middleHeading: ["Middle Heading 1"],
          image: { url: "image1.jpg", name: "Image 1" },
          orderInPage: 1,
        },
        {
          __typename: "HeroWithTitleButton",
          _id: "2",
          heading: "Heading 2",
          middleHeading: ["Middle Heading 2"],
          button: {
            text: "Button 2",
            bgColor: "blue",
            url: "url2",
            color: "white",
          },
          orderInPage: 2,
        },
      ],
      error: null,
    });
    render(
      <Providers>
        <PageBuilder />
      </Providers>
    );
    expect(screen.getByText("Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Subheading 1")).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });
});
