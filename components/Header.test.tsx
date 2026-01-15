import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "./Header";

it("should display the heading", () => {
  render(<Header />);
  const logo = screen.getByRole("heading", { name: "Despesas Simples" });
  expect(logo).toBeInTheDocument();
});

it("should display the mode toggle", () => {
  render(<Header />);
  const btns = screen.getAllByRole("button");

  const toggleButton = btns.find((btn) => btn.id.includes("radix-_r_0_"));

  expect(toggleButton).toBeInTheDocument();
});
