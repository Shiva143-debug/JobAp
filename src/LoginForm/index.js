// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {useNavigate,Navigate} from 'react-router-dom'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitSuccess = jwtToken => {
//     // const {navigate} = this.props
//     const navigate = useNavigate();
//     Cookies.set('jwt_token', jwtToken, {
//       expires: 30,
//       path: '/',
//     })
//     navigate('/', { replace: true });
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <div className="input-text">
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-field"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//       </div>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <div className="input-text">
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-field"
//           value={username}
//           onChange={this.onChangeUsername}
//         />
//       </div>
//     )
//   }

//   render() {
//     const {showSubmitError, errorMsg} = this.state
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken !== undefined) {
//       return <Navigate to="/" />
//     }
//     return (
//       <div className="login-form-container">
//         <div className="card">
//           <form className="form-container" onSubmit={this.submitForm}>
//             <div className="web-image-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
//                 alt="website logo"
//                 className="web-image"
//               />
//             </div>
//             <div className="input-container">{this.renderUsernameField()}</div>
//             <div className="input-container">{this.renderPasswordField()}</div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//             {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default LoginForm


import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Navigate } from 'react-router-dom';
import './index.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isLoading: false,
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    const { navigate } = this.props;
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    });
    navigate('/home', { replace: true });
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg, isLoading: false });
  };

  submitForm = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <div className="input-text">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <div className="input-text">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    );
  };

  render() {
    const { showSubmitError, errorMsg, isLoading } = this.state;
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
      return <Navigate to="/home" />;
    }
    return (
      <div className="login-form-container">
        <div className="card">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="web-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
                alt="website logo"
                className="web-image"
              />
            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                'Login'
              )}
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const LoginFormWithNavigate = props => {
  const navigate = useNavigate();
  return <LoginForm {...props} navigate={navigate} />;
};

export default LoginFormWithNavigate;
