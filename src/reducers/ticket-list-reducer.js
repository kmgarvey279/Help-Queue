export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case 'ADD_TICKET':
    const { names, location, issue, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;

  case 'ULTIMATE_TIME';
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;

  default:
    return state;
  }
};
