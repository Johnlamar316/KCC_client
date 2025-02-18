import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header Component", () => {
  it("renders the title and subtitle", () => {
    render(<Header title="Welcome" subtitle="This is a test" />);
    
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("This is a test")).toBeInTheDocument();
  });

  it("renders the rightElement when provided", () => {
    render(
      <Header title="Welcome" subtitle="This is a test" rightElement={<button>Click Me</button>} />
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("does not render the rightElement if not provided", () => {
    render(<Header title="Welcome" subtitle="This is a test" />);
    
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
