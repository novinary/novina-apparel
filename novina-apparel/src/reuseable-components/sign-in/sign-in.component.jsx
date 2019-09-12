import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    // prevent the default submit action from firing because we want full control over exactly what
    // this submit is going to do
    event.preventDefault();
    // only clear out our fields for now
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}
export default SignIn;
