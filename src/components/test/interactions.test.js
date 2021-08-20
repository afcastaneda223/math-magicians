import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('User interaction', () => {
  it('Validates Sum', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('+'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('='));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('6');
  });

  it('Validate subtraction', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('-'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('='));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('2');
  });

  it('Validate multiplication', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('x'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('='));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('8');
  });

  it('Validate division', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('÷'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('='));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('2');
  });

  it('Validate module', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('%'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('='));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('0');
  });

  it('Validate AC', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('AC'));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('0');
  });

  it('Show numbers in display', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('1'));
    fireEvent.click(screen.queryByText('2'));
    fireEvent.click(screen.queryByText('3'));
    fireEvent.click(screen.queryByText('4'));
    fireEvent.click(screen.queryByText('5'));
    fireEvent.click(screen.queryByText('6'));
    fireEvent.click(screen.queryByText('7'));
    fireEvent.click(screen.queryByText('8'));
    fireEvent.click(screen.queryByText('9'));
    fireEvent.click(screen.queryByText('0'));
    fireEvent.click(screen.queryByText('.'));

    const display = screen.getByRole('textbox');
    expect(display.value).toBe('1234567890.');
  });
});
