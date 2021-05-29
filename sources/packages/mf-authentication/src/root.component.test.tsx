import React from 'react';
import { render } from '@testing-library/react';
import Root from './root.component';
import '@testing-library/jest-dom';

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
