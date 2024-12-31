import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdjustmentDetails } from "../adjustment-details";

const mockOnOpenChange = jest.fn();
const mockOnSubmit = jest.fn();
const mockOnCancel = jest.fn();

describe("AdjustmentDetails", () => {
  beforeEach(() => {
    mockOnOpenChange.mockClear();
    mockOnSubmit.mockClear();
    mockOnCancel.mockClear();
  });

  it("renders the form fields correctly when open is true", () => {
    render(
      <AdjustmentDetails
        open={true}
        onOpenChange={mockOnOpenChange}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByLabelText("Reason for Adjustment")).toBeInTheDocument();
    expect(screen.getByLabelText("Additional Details")).toBeInTheDocument();
  });

  it("does not render form fields when open is false", () => {
    render(
      <AdjustmentDetails
        open={false}
        onOpenChange={mockOnOpenChange}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.queryByLabelText("Reason for Adjustment")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Additional Details")).not.toBeInTheDocument();
  });

  it("handles form validation on empty submit", async () => {
    const user = userEvent.setup();
    render(
      <AdjustmentDetails
        open={true}
        onOpenChange={mockOnOpenChange}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText("Please select a reason for adjustment")).toBeInTheDocument();
  });

  it("closes the dialog when the cancel button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <AdjustmentDetails
        open={true}
        onOpenChange={mockOnOpenChange}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(mockOnOpenChange).toHaveBeenCalledWith(false);
  });
});
