import request from 'superagent';

const URL = 'https://glacial-tor-11765.herokuapp.com/api/books';

export async function getBooks() {
  const response = await request.get(URL);
  return response.body;
}

export async function getBook(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addBook(book) {
  const response = await request.post(URL).send(book);
  return response.body;
}

export async function deleteBook(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateBook(book) {
  const response = await (await request.put(`${URL}/${book.id}}`)).send(book);
  return response.body;
}