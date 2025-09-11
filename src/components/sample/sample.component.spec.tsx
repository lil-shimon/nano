import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Sample } from "./sample.component";

describe("Sample", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Sample />);
    expect(asFragment()).toMatchSnapshot();
  });

  it.todo("renders correctly");
});
