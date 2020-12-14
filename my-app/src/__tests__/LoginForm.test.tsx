import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';

import LoginForm from '../LoginForm';
import { Props } from '../LoginForm/LoginForm';

afterEach(cleanup);

function renderLoginForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true,
  };
  return render(<LoginForm {...defaultProps} {...props} />);
}

describe('<LoginForm />', () => {
  test('should display a blank loginform, with remember me checked by default', async () => {
    const { findByTestId } = renderLoginForm();
    const loginForm = await findByTestId('login-form');

    expect(loginForm).toHaveFormValues({
      username: '',
      password: '',
      remember: true,
    });
  });
});
