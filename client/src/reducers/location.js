import {
  DELETE_LOCATION,
} from '../actions/locations';

const initialState = {
  locations: {},
}

const locations = ( state = initialState, action ) => {
  switch (action.type) {
    case DELETE_LOCATION:
    let returnLocations = locations.filter( l => l.id !== action.id )
      return { ...state, returnLocations }
    default:
      return state
  }
}

export default locations;
