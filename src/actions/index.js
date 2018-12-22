import axios from 'axios';
import queryString from 'query-string';
import { GET_POKEMON_SUCCESS, ADD_CARD } from '../constants';
const GET_POKEMON_LIST_URL = "http://localhost:3030/api/cards";


export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};


export function searchPokemon(filter) {
  return { type: "SEACH_REQUEST", payload: filter }
};

export function getPokemonList(filter, dispatch) {
  return dispatch => {
    try {
      axios.get(`${GET_POKEMON_LIST_URL}?${queryString.stringify(filter)}`)
      .then(response => dispatch(getPokemonSuccess(response.data)));
    } catch (error) {
      return error;
    }
  }
}

export function getPokemonSuccess(response) {
  return { type: GET_POKEMON_SUCCESS, payload: response};
}

export function addThisCard(card) {
  return { type: ADD_CARD, payload: card};
}
