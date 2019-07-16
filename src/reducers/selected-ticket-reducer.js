export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_TICKET';
      return action.TicketId;
  default:
    return state;
  }
};
