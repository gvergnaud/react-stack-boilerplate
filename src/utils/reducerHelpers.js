export let compose = (...mutations) => (state, action) =>
  mutations.reduce(
    (mutatedState, mutation) => ({ ...mutatedState, ...mutation(mutatedState, action) }),
    state
  )

export let nothing = (state) => state

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}
