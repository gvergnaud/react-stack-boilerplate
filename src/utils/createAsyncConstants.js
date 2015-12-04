let createAsyncConstants  = (...constants) => {
  return constants.reduce((acc, constant) => {
    acc[constant] = {
      REQUEST: `${constant}.REQUEST`,
      SUCCESS: `${constant}.SUCCESS`,
      ERROR: `${constant}.ERROR`
    }
    return acc
  }, {})
}

export default createAsyncConstants
