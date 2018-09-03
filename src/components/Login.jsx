import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { userLogin } from '../state/actions/auth';


class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.userLogin(this.state, this.props.history);
  };

  render () {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-4-desktop is-offset-4-desktop">
                <form onSubmit={this.handleLogin}>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        name="email"
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}                        
                        required
                      />
                    </p>
                  </div>
                  <div className="control">
                    <button className="button is-primary is-fullwidth">Log In</button>
                  </div>
                  {
                    this.props.showLoginError ? (
                      <p id="error" className="help is-danger">
                        Email or password is incorrect.
                      </p>
                    ) : null
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({
  // showLoginError: state.auth.showLoginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // userLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);