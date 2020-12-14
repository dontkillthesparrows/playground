import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TextHook from '../testHook';
import App from '../app/App';

afterEach(cleanup);

it('should return true', () => {
  expect(true).toBe(true);
});

// it('text in state is changed on button click', () => {
//   const { getByText } = render(<TextHook />);

//   expect(getByText(/Initial/i).textContent).toBe('Initial state');
//   fireEvent.click(getByText('change state'));
//   expect(getByText(/Initial/i).textContent).toBe('state changed');
// });

// it('button click changes state', () => {
//   const { getByText } = render(
//     <App>
//       <TextHook />
//     </App>
//   );

//   expect(getByText(/Henrik/i).textContent).toBe('Henrik');
//   fireEvent.click(getByText('change name'));
//   expect(getByText(/Aria/i)).toBe('Aria');
// });
