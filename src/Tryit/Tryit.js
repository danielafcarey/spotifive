import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUpdateSpotifiveId } from '../actions';

class Tryit extends Component {

  render() {
    return (
      <div className='tryit'>
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
  submitUpdateSpotifiveId: (accessToken) => dispatch(submitUpdateSpotifiveId(accessToken))
})

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit);;
