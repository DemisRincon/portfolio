import React from "react";
import { render, screen } from "@testing-library/react";
import PageBuilder, { BlockItem } from "../../components/PageBuilder";
import useGetPage from "../../library/hooks/useGetPage";
import "@testing-library/jest-dom";
import Providers from "../../library/providers/MainProvider";

// Mocking the useGetPage hook to control its return values during tests
jest.mock("../../library/hooks/useGetPage");

// Creating a mock for the useGetPage hook
const mockUseGetPage = useGetPage as jest.Mock;

// Helper function to render components with Providers
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};

// Describing the test suite for PageBuilder component
describe("PageBuilder", () => {
  // Test case for rendering error message when there is an error
  it("renders error message when there is an error", () => {
    // Mocking the return value of useGetPage hook to simulate an error
    mockUseGetPage.mockReturnValue({ data: null, error: true });

    // Rendering the PageBuilder component with theme
    renderWithTheme(<PageBuilder />);

    // Asserting that the error message is displayed
    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });

  // Test case for rendering nothing when there is no page data
  it("renders nothing when there is no page data", () => {
    // Mocking the return value of useGetPage hook to simulate no data
    mockUseGetPage.mockReturnValue({ data: null, error: false });

    // Rendering the PageBuilder component with theme
    renderWithTheme(<PageBuilder />);

    // Asserting that the loading message is displayed
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Test case for rendering components based on page data
  it("renders components based on page data", () => {
    // Mock data to be returned by useGetPage hook
    const mockData: BlockItem[] = [
      {
        __typename: "HeroSideImageHead",
        _id: "1",
        heading: "Heading 1",
        subHeading: "Subheading 1",
        middleHeading: ["Middle 1"],
        image: { url: "image1.jpg", name: "Profile Photo" },
        orderInPage: 1,
      },
      {
        __typename: "HeroWithTitleButton",
        _id: "2",
        heading: "Heading 2",
        subHeading: "Subheading 2",
        middleHeading: ["Middle 2"],
        endHeading: "End 2",
        image: { url: "image2.jpg", name: "Image 2" },
        button: {
          text: "Button 2",
          bgColor: "blue",
          url: "url2",
          color: "white",
        },
        orderInPage: 2,
      },
    ];

    // Mocking the return value of useGetPage hook to return mock data
    mockUseGetPage.mockReturnValue({ data: mockData, error: false });

    // Rendering the PageBuilder component with theme
    renderWithTheme(<PageBuilder />);

    // Asserting that the components based on mock data are rendered
    expect(screen.getByText("Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Subheading 1")).toBeInTheDocument();
    expect(screen.getByText("Middle 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });
});
