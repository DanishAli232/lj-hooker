import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReferralDialog } from '../referral-detail'

// Mock the onOpenChange function
const mockOnOpenChange = jest.fn()


describe('ReferralDialog', () => {
  beforeEach(() => {
    mockOnOpenChange.mockClear()
  })

  it('renders the form fields correctly', () => {
    render(<ReferralDialog open={true} onOpenChange={mockOnOpenChange} />)
    
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Property Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Sale Price ($)')).toBeInTheDocument()
    expect(screen.getByLabelText('Referral Rate (%)')).toBeInTheDocument()
    expect(screen.getByText('Salesperson Split')).toBeInTheDocument()
  })

  it('handles form validation', async () => {
    const user = userEvent.setup()
    render(<ReferralDialog open={true} onOpenChange={mockOnOpenChange} />)
    
    // Try to submit empty form
    await user.click(screen.getByRole('button', { name: 'Save' }))
    
    // Check for validation messages
    // expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByText('Type is required')).toBeInTheDocument()
    expect(screen.getByText('Property address is required')).toBeInTheDocument()
    expect(screen.getByText('Sale price is required')).toBeInTheDocument()
    expect(screen.getByText('Referral rate is required')).toBeInTheDocument()
    expect(screen.getAllByText('Salesperson is required')).toHaveLength(4)
  })
  it('can close dialog', async () => {
    const user = userEvent.setup()
    render(<ReferralDialog open={true} onOpenChange={mockOnOpenChange} />)
    
    // Click cancel button
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    
    // Verify dialog close was triggered
    expect(mockOnOpenChange).toHaveBeenCalledWith(false)
  })
  it('renders the dialog when open is true', () => {
    render(<ReferralDialog open={true} onOpenChange={mockOnOpenChange} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
})
