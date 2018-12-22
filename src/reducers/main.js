import { GET_POKEMON_SUCCESS, ADD_CARD } from "../constants";
import { fromJS } from 'immutable';
const initialState = fromJS({
  myList: [],
  queryList: [],
});

export function main(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return state.set('queryList', action.payload);
    case ADD_CARD:
      return state.set('myList', [...state.toJS().myList, action.payload]);
    default:
      return state;
  }
}
