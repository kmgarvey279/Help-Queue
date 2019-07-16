import ticketListReducer from './../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Ryan & Aimen',
    location : '4b',
    issue : 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen : 15000000000000,
    id: 0
  };

  test('Should return default state is no action type recognised', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
  type: 'ADD_TICKET',
  names: names,
  location: location,
  issue: issue,
  timeOpen: timeOpen,
  id: id
  };
  expect(ticketListReducer({}, action)).toEqual({
    [id] : {
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    }
  });

  test('Should add freshly-calculated Moment-formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'UPDATE_TIME',
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(ticketListReducer({ [id] : sampleTicketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });
