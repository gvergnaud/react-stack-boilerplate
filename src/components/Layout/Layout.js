import React, { Component, PropTypes } from 'react'

import './Layout.less'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ])
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
