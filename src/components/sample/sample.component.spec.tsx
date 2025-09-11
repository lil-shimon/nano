import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sample } from "./sample.component";

describe("Sample", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Sample />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<Sample />);
    expect(
      screen.getByRole("heading", { name: /sample header/i })
    ).toBeInTheDocument();
  });
});
