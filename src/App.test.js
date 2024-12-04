import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Accordions from './components/accordions/accordions';
import Coun from './components/coun/coun';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';
import EmployeesListItem from './components/employees-list-item/employees-list-item'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders accordion items', () => {
 render(<Accordions />);
 const firstQuestion = screen.getByText(/average salary of employees/i); 
 const secondQuestion = screen.getByText(/calculated based on the total salaries/i);
 expect(firstQuestion).toBeInTheDocument();
 expect(secondQuestion).toBeInTheDocument();
});

test('increments counter on button click', () => {
  render(<Coun />);
  const incrementButton = screen.getByRole('button', { name: 'increment' });
  const decrementButton = screen.getByRole('button', { name: 'decrement' });

  fireEvent.click(incrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText('0')).toBeInTheDocument();
 });

 test('renders form with inputs and button', () => {
  render(<EmployeesAddForm onAdd={jest.fn()} />);
  expect(screen.getByText(/Add new employees/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Salary/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
 });
;
test('updates input fields on change', () => {
 render(<EmployeesAddForm onAdd={jest.fn()} />);
 const nameInput = screen.getByPlaceholderText(/Name/i);
 const salaryInput = screen.getByPlaceholderText(/Salary/i);
 fireEvent.change(nameInput, { target: { value: 'John Doe' } });
 fireEvent.change(salaryInput, { target: { value: '5000' } });
 expect(nameInput.value).toBe('John Doe');
 expect(salaryInput.value).toBe('5000');
});

test('calls onAdd with correct values on form submit', () => {
  const mockOnAdd = jest.fn(); 
  render(<EmployeesAddForm onAdd={mockOnAdd} />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const salaryInput = screen.getByPlaceholderText(/Salary/i);
  const submitButton = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
  fireEvent.change(salaryInput, { target: { value: '6000' } });
  fireEvent.click(submitButton);
  expect(mockOnAdd).toHaveBeenCalledWith('Jane Doe', 6000 );
 }); 

 test('clears input fields after form submit', () => {
  render(<EmployeesAddForm onAdd={jest.fn()} />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const salaryInput = screen.getByPlaceholderText(/Salary/i);
  const submitButton = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(nameInput, { target: { value: 'Alex Smith' } });
  fireEvent.change(salaryInput, { target: { value: '7000' } });
  fireEvent.click(submitButton);
  expect(nameInput.value).toBe('');
  expect(salaryInput.value).toBe('');
 });

test('does not call onAdd if fields are empty', () => {
 const mockOnAdd = jest.fn();
 render(<EmployeesAddForm onAdd={mockOnAdd} />);
 const submitButton = screen.getByRole('button', { name: /Add/i });
 fireEvent.click(submitButton);
 expect(mockOnAdd).not.toHaveBeenCalled();
});

test('renders employee name, salary, and correct classes based on props', () => {
  const name = 'John Doe';
  const salary = '5000';
  const increase = true;
  const like = true;
  render(
 <EmployeesListItem
      name={name}
      salary={salary}
      increase={increase}
      sar={like}
      handleClick={() => {}}
      onDelete={() => {}}
    />
  );
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`${salary} £`)).toBeInTheDocument();
  const listItem = screen.getByRole('listitem');
  expect(listItem).toHaveClass('increase');
  expect(listItem).toHaveClass('like');
 });


