import React, { PropTypes } from 'react'


const Hi = ({ name = 'you' }) => (
  <h1>Hi {name} !</h1>
)

Hi.propTypes = {
  name: PropTypes.string
}

export default Hi
