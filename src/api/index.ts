export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchData = async () => {
  try {
    const data = await fetch(BASE_URL).then((resp) => {
      return resp.json();
    });

    return data;
  } catch (error) {
    throw Error('Ошибка запроса');
  }
};
