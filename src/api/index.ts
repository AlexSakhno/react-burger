export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchData = async () => {
  const data = await fetch(BASE_URL)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else throw Error('Ошибка ответа сервера!');
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
