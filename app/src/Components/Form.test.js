import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Form from "Components/Form";

describe("form submission behaves correctly", () => {
  test("should submit form upon clicking the button after typing sentence", async () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);

    userEvent.type(screen.getByTestId("form-sentence_field-input"), "Hi");

    userEvent.click(screen.getByTestId("form-button"));
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });

  test("should not submit form upon clicking the button without typing sentence", async () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);

    userEvent.click(screen.getByTestId("form-button"));
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(0));
  });
});

describe("input validation behaves correctly", () => {
  test("should show validation error when sentence is not typed", async () => {
    render(<Form />);

    userEvent.type(screen.getByTestId("form-sentence_field-input"), "");

    // The validation error message doesn't appear until the focus from the input is removed. Therefore, I click the button to remove the focus
    userEvent.click(screen.getByTestId("form-button"));
    await waitFor(() =>
      expect(
        screen.getByTestId("form-sentence_field-input-error")
      ).toHaveTextContent("Required")
    );
  });
});
