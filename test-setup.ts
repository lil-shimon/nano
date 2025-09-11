import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Ensure a fresh DOM for each test
afterEach(() => {
  cleanup();
});
