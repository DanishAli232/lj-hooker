import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AccessUserPopup } from "@/components/access-user-popup";

const mockOnOpenChange = jest.fn();

describe("AccessUserPopup", () => {
  it("renders the popup when open is true", () => {
    render(<AccessUserPopup open={true} onOpenChange={mockOnOpenChange} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not render the popup when open is false", () => {
    render(<AccessUserPopup open={false} onOpenChange={mockOnOpenChange} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    const user = userEvent.setup();
    render(<AccessUserPopup open={true} onOpenChange={mockOnOpenChange} />);
    await user.click(screen.getByRole("button", { name: "Access" }));
    expect(screen.getByText("User ID is required")).toBeInTheDocument();
  });

  it("closes the popup when the cancel button is clicked", async () => {
    const user = userEvent.setup();
    render(<AccessUserPopup open={true} onOpenChange={mockOnOpenChange} />);
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(mockOnOpenChange).toHaveBeenCalledWith(false);
  });
});
