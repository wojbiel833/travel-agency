/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;
export const getAllTrips = ({ trips }) => trips;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

export const CHANGE_CHECKBOX = createActionName('CHANGE_CHECKBOX');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });

export const changeCheckbox = payload => ({ payload, type: CHANGE_CHECKBOX });

// reducer
export default function reducer(statePart = [], action = {}) {
  // console.log(statePart);
  // console.log(action);
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      if (action.payload.type === 'from') {
        return {
          ...statePart,
          duration: {
            ...statePart.duration,
            from: action.payload.value,
          },
        };
      } else {
        return {
          ...statePart,
          duration: {
            ...statePart.duration,
            to: action.payload.value,
          },
        };
      }

    case CHANGE_CHECKBOX:
      return {
        ...statePart,
        tags: [...action.payload],
      };
    default:
      return statePart;
  }
}
