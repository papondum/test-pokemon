import axios from 'axios';
import queryString from 'query-string';
const GET_POKEMON_LIST_URL = "http://localhost:3030/api/cards";
export async function getPokemonList(query) {
  try {
    const response = await axios.get(`${GET_POKEMON_LIST_URL}?${queryString.stringify(query)}`);
    return response;
  } catch (error) {
    return error;
  }
}
