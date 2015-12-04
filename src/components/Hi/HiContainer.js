import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  ({ user }) => ({ name: user.name })
)
class HiContainer extends Component {

  render() {
    return <Hi name={this.props.name} />
  }

}


export default HiContainer
