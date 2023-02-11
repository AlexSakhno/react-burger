export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const getFetch = async (url: string) => {
  const data = await fetch(`${BASE_URL}${url}`).then((resp) =>
    checkResponse(resp)
  );

  return data;
};

type IdIngredients = {
  ingredients: string[];
};

export const postFetch = async (url: string, data: IdIngredients) => {
  const result = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then((resp) => checkResponse(resp));

  return result;
};

const checkResponse = (resp: Response) => {
  if (resp.ok) {
    return resp.json();
  } else throw Error('Ошибка ответа сервера!');
};
