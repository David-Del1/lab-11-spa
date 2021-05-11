import request from 'superagent';

const URL = 'https://glacial-tor-11765.herokuapp.com/api/books';

export async function getBooks() {
  const response = await request.get(URL);
  return response.body;
}