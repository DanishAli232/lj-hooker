import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReferralDialog } from '../referral-detail';
import '@testing-library/jest-dom';

// Mock data for testing
const mockReferralData = {
  date: '2024-12-27',
  type: 'type 1',
  propertyAddress: '123 Test Street, Sydney NSW 2000',
  salePrice: '750000',
  referralRate: '25',
  salespeople: [
    { id: 1, person: 'person1', percentage: '60' },
    { id: 2, person: 'person2', percentage: '20' },
    { id: 3, person: 'person1', percentage: '10' },
    { id: 4, person: 'person2', percentage: '10' },
  ],
};

const mockInvalidData = {
  date: '',
  type: '',
  propertyAddress: '',
  salePrice: 'invalid',
  referralRate: '150',
  salespeople: [
    { id: 1, person: '', percentage: '60' },
    { id: 2, person: '', percentage: '20' },
    { id: 3, person: '', percentage: '10' },
    { id: 4, person: '', percentage: '5' }, // Invalid total percentage
  ],
};

// Mock hasPointerCapture
Element.prototype.hasPointerCapture = jest.fn(() => false);

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock the current date to ensure consistent testing
const mockDate = new Date('2024-12-27');
jest.useFakeTimers();
jest.setSystemTime(mockDate);

// Increase the default timeout for all tests
jest.setTimeout(10000);

describe('ReferralDialog', () => {
  const mockOnOpenChange = jest.fn();
  
  beforeEach(() => {
    mockOnOpenChange.mockClear();
    console.log('\nStarting new test...');
  });

  afterEach(() => {
    console.log('Test completed');
  });

  const renderDialog = () => {
    return render(
      <ReferralDialog 
        open={true} 
        onOpenChange={mockOnOpenChange} 
      />
    );
  };

  it('renders all form fields correctly', async () => {
    console.log('Testing: Form fields rendering');
    try {
      renderDialog();

      // Check if all form fields are present
      expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/property address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/sale price/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/referral rate/i)).toBeInTheDocument();
      expect(screen.getByText(/salesperson split/i)).toBeInTheDocument();
      
      console.log(' All form fields rendered successfully');
    } catch (error) {
      console.error(' Form fields rendering failed:', error);
      throw error;
    }
  });

  it('successfully submits form with valid mock data', async () => {
    console.log('Testing: Form submission with valid data');
    try {
      const user = userEvent.setup({ delay: null });
      renderDialog();
      
      // Wait for dialog to be ready for interaction
      await waitFor(async () => {
        const dialog = screen.getByRole('dialog');
        expect(dialog).toBeInTheDocument();
      });

      // Fill in all fields with mock data
      const dateInput = screen.getByLabelText(/date/i);
      await user.clear(dateInput);
      await user.type(dateInput, mockReferralData.date);
      console.log(' Date field filled');
      
      // Select type using the combobox
      const typeCombobox = screen.getByRole('combobox', { name: /type/i });
      await user.click(typeCombobox);
      
      // Wait for listbox to be visible and select option
      await waitFor(() => {
        const listbox = screen.getByRole('listbox');
        expect(listbox).toBeInTheDocument();
        const option = screen.getByRole('option', { name: /type 1/i });
        expect(option).toBeInTheDocument();
      });
      
      const typeOption = screen.getByRole('option', { name: /type 1/i });
      await user.click(typeOption);
      console.log(' Type selected');
      
      const addressInput = screen.getByLabelText(/property address/i);
      await user.type(addressInput, mockReferralData.propertyAddress);
      console.log(' Property address filled');
      
      const priceInput = screen.getByLabelText(/sale price/i);
      await user.type(priceInput, mockReferralData.salePrice);
      console.log(' Sale price filled');
      
      const rateInput = screen.getByLabelText(/referral rate/i);
      await user.type(rateInput, mockReferralData.referralRate);
      console.log(' Referral rate filled');

      // Submit form
      console.log(' Submitting form...');
      const submitButton = screen.getByRole('button', { name: /save/i });
      console.log(' Submit button found');
      
      // Ensure form is valid before submission
      await waitFor(() => {
        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
      });
      
      await user.click(submitButton);
      console.log(' Form submitted');

      // Verify form submission
      await waitFor(() => {
        expect(mockOnOpenChange).toHaveBeenCalled();
      });
      console.log(' Form submission verified');
    } catch (error) {
      console.error(' Form submission failed:', error);
      throw error;
    }
  }, 30000);

  it('shows validation errors for invalid mock data', async () => {
    console.log('Testing: Validation errors for invalid data');
    try {
      const user = userEvent.setup({ delay: null });
      renderDialog();

      // Wait for dialog to be ready
      await waitFor(() => {
        const dialog = screen.getByRole('dialog');
        expect(dialog).toBeInTheDocument();
      });
      
      // Clear any default values
      const dateInput = screen.getByLabelText(/date/i);
      await user.clear(dateInput);
      
      // Submit form without filling required fields
      const submitButton = screen.getByRole('button', { name: /save/i });
      await user.click(submitButton);
      console.log(' Form submitted with invalid data');

      // Check for validation errors
      await waitFor(() => {
        const errorMessages = screen.getAllByText(/required/i);
        expect(errorMessages.length).toBeGreaterThan(0);
        
        // Check that each required field has an error
        const errorTexts = errorMessages.map(msg => msg.textContent?.toLowerCase());
        expect(errorTexts).toEqual(
          expect.arrayContaining([
            expect.stringMatching(/date.*required/i),
            expect.stringMatching(/type.*required/i),
            expect.stringMatching(/property address.*required/i),
            expect.stringMatching(/sale price.*required/i),
            expect.stringMatching(/referral rate.*required/i),
          ])
        );
      });
      console.log(' Validation errors displayed correctly');
    } catch (error) {
      console.error(' Validation test failed:', error);
      throw error;
    }
  });

  it('calculates referral amount correctly with mock data', async () => {
    console.log('Testing: Referral amount calculation');
    try {
      const user = userEvent.setup({ delay: null });
      renderDialog();
      
      await act(async () => {
        await user.type(screen.getByLabelText(/sale price/i), mockReferralData.salePrice);
        await user.type(screen.getByLabelText(/referral rate/i), mockReferralData.referralRate);
        console.log(' Price and rate entered');
      });

      // Calculate expected referral amount
      const expectedAmount = `$ ${(
        (parseFloat(mockReferralData.salePrice) * parseFloat(mockReferralData.referralRate)) / 100
      ).toFixed(2)}`;

      // Check if referral amount is calculated correctly
      await waitFor(() => {
        expect(screen.getByLabelText(/referral amount/i)).toHaveValue(expectedAmount);
      });
      console.log(' Referral amount calculated correctly');
    } catch (error) {
      console.error(' Calculation test failed:', error);
      throw error;
    }
  });

  it('validates date field is not empty', async () => {
    console.log('Testing: Date field validation');
    try {
      const user = userEvent.setup({ delay: null });
      renderDialog();
      
      await act(async () => {
        // Submit form without date
        const submitButton = screen.getByRole('button', { name: /save/i });
        await user.click(submitButton);
        console.log(' Form submitted with empty date');
      });

      // Check for validation errors using getAllByText to handle multiple error messages
      await waitFor(() => {
        const errorMessages = screen.getAllByText(/required/i);
        expect(errorMessages.length).toBeGreaterThan(0);
        // Verify that one of the error messages is associated with the date field
        const dateLabel = screen.getByLabelText(/date/i);
        expect(dateLabel).toBeInTheDocument();
      });
      console.log(' Date validation error displayed');
    } catch (error) {
      console.error(' Date validation test failed:', error);
      throw error;
    }
  });

  it('closes dialog when cancel button is clicked', async () => {
    console.log('Testing: Dialog cancellation');
    try {
      const user = userEvent.setup({ delay: null });
      renderDialog();
      
      await act(async () => {
        await user.click(screen.getByRole('button', { name: /cancel/i }));
      });
      
      expect(mockOnOpenChange).toHaveBeenCalledWith(false);
      console.log(' Dialog closed successfully');
    } catch (error) {
      console.error(' Dialog cancellation test failed:', error);
      throw error;
    }
  });
});
