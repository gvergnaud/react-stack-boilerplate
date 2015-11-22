export let compose = (...mutations) => (state, action) => mutations.reduce(
  (mutatedState, mutation) => ({
    ...mutatedState,
    ...mutation(mutatedState, action)
  }),
  state
)

export let createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    (handlers.hasOwnProperty(action.type))
      ? handlers[action.type](state, action)
      : state

export let nothing = (state) => state
