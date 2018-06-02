import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUpdateSpotifiveId } from '../actions';

class Tryit extends Component {

  handleClick = () => {
    const { 
      accessToken, 
      submitUpdateSpotifiveId 
    } = this.props;
    const { userId } = this.props.user.userInfo

    submitUpdateSpotifiveId(userId, accessToken);
  }

  render() {
    return (
      <div className='tryit'>
        <button
          onClick={ this.handleClick }
        >Add Spotifive</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user,
  artist: state.artist
})

const mapDispatchToProps = (dispatch) => ({
  submitUpdateSpotifiveId: (userId, accessToken) => dispatch(submitUpdateSpotifiveId(userId, accessToken))
})

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit);;
