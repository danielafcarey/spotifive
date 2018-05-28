import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  updateAccessToken,
  submitUpdateUser
} from '../actions';
import { 
  getAccessToken,
} from '../cleaner.js';

class Authorize extends Component {

  componentDidMount = () => {
    const cleanAccessToken = getAccessToken(window.location.hash);
    this.props.updateAccessToken(cleanAccessToken);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.accessToken !== this.props.accessToken) {
      this.props.submitUpdateUser(this.props.accessToken)
    }
  }

  render() {
    return (
      <div className='authorize' >
      </div>
    )
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
}

export {
  Authorize,
  mapStateToProps,
  mapDispatchToProps
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
