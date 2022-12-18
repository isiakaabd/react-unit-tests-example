import App from "../App";
import { it, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<App />);
});

describe("App.js", () => {
  it("Check if the button is in the document", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("check if h1 element is in the document", () => {
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
  it("Check if the current value renders when click", () => {
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("0");
  });
  it("Check if the  value increases when button is clicked", async () => {
    const button = screen.getByRole("button");
    await userEvent.click(button);
    const h1 = screen.queryByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("1");
  });
});
