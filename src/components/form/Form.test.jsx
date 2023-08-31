import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form } from './Form';
import formData, { addValues } from '../../store/formDataSlice';

describe('Testing form', () => {
  const testData = {
    firstName: 'Valdemar',
    lastName: 'Pivodrinker',
    email: 'katzenjammer3000@ukr.net',
    message: 'Chernigivske svitle and suhariki with cheese, please',
  };

  const testDataErrors = [
    { field: 'firstName', error: 'Required' },
    { field: 'lastName', error: 'Required' },
    { field: 'email', error: 'Required' },
    { field: 'message', error: 'Must be 10 characters or more' },
  ];

  const pushToStoreMock = jest.fn();
  let originalAlert;

  beforeEach(() => {
    pushToStoreMock.mockClear();
    originalAlert = window.alert;
    window.alert = jest.fn();
  });

  afterEach(() => {
    window.alert = originalAlert;
  });

  it('should have editable fields', async () => {
    render(<Form pushToStore={pushToStoreMock} />);

    Object.keys(testData).forEach((field) => {
      const input = screen.getByTestId(field);
      fireEvent.change(input, { target: { value: testData[field] } });
    });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(pushToStoreMock).toHaveBeenCalledWith(testData);
      expect(window.alert).toHaveBeenCalledWith('Your personal data was succesfully delivered to 3rd parties');
      expect(screen.queryAllByTestId('errorMessage')).toHaveLength(0);
    });
  });

  it('should render proper errors when nothing entered', async () => {
    render(<Form pushToStore={pushToStoreMock} />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errors = screen.getAllByTestId('errorMessage');
      expect(errors).toHaveLength(4);
      errors.forEach((er, i) => {
        expect(er.innerHTML).toEqual(testDataErrors[i].error);
      });
      expect(pushToStoreMock).not.toHaveBeenCalled();
      expect(window.alert).not.toHaveBeenCalled();
    });
  });

  it('should correctly interact with store', () => {
    const previousState = { list: [] };

    expect(formData(previousState, addValues(testData))).toEqual({ list: [testData] });

    const updatedState = { list: [testData] };

    expect(formData(updatedState, addValues(testData))).toEqual({ list: [testData, testData] });
  });
});
