export const checkResponse = (resp: Response) => {
  if (resp.ok) {
    return resp.json();
  } else throw Error('Ошибка ответа сервера!');
};
