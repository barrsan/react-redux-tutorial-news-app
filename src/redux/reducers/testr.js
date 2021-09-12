const INITIAL_STATE = {
  value: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'test':
      return state.value;

    default:
      return state;
  }
};
