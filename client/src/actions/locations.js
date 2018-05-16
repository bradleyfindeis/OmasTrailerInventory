import axios from 'axios';

export const DELETE_LOCATION = 'DELETE_LOCATION';


export const deleteLocation = (id) => {
  return (dispatch) => {
    debugger
    axios.delete(`/api/locations/${id}`)
    .then( res => dispatch({ type: DELETE_LOCATION, id, headers: res.headers  }) )
  }
}

