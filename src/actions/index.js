import axios from 'axios';

export const FETCH_START = 'FETCH_START'; 
export const FETCH_ADD = 'FETCH_ADD';
export const FETCH_ERROR = 'FETCH_ERROR';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers 
// a loading status display in our application, 
// performs an axios call to retreive smurfs from our server, 
// saves the result of that call to our state and shows 
// an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
    dispatch(fetchStart());
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res=>dispatch(addSmurf(res.data)))
    .catch(err=> {dispatch(setError(err))})
}
export const fetchStart = () => {
    return ({type: FETCH_START});
}
export const addSmurf = smurf => {
    return ({type: FETCH_ADD, payload: smurf});
}
export const setError = err => {
    return ({type: FETCH_ERROR, payload: err});
}
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.