import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  updateAccessToken,
  submitUpdateUser
} from '../actions';
import { 
  getAccessToken
} from '../cleaner.js';

class Authorize extends Component {

  componentDidMount = () => {
    const cleanAccessToken = getAccessToken(window.location.hash);
    this.props.updateAccessToken(cleanAccessToken);
  }

  componentDidUpdate = (prevProps) => {
    const { accessToken, submitUpdateUser } = this.props;

    if (prevProps.accessToken !== accessToken) {
      submitUpdateUser(accessToken);
    }
  }

  render() {
    const { loginError, loggedIn } = this.props.user;

    if (loggedIn) {
      return <Redirect to='/search' />;
    }

    return (
      <div className='authorize' >
        <p>{ loginError === null ? '' : 'There was a problem signing in. Please try again.' }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  updateAccessToken: (accessToken) => dispatch(updateAccessToken(accessToken)),
  submitUpdateUser: (accessToken) => dispatch(submitUpdateUser(accessToken))
});

Authorize.propTypes = {
  accessToken: PropTypes.string,
  user: PropTypes.object,
  updateAccessToken: PropTypes.func,
  submitUpdateUser: PropTypes.func
};

export {
  Authorize,
  mapStateToProps,
  mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
