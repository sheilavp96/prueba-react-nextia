import { Types } from './actionTypes';

export const startLogin = (email, id) => {
  return (dispatch) => {
    let url = 'https://qa-api.socioinfonavit.com/api/v1/login';
    let jsonData = {
      user: {
        email: email,
        password: id,
      },
    };
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    };
    fetch(url, request)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (data?.error) {
          console.log(data.error);
        } else {
          console.log('funciona');
          sessionStorage.setItem('userSS', JSON.stringify(jsonData));
          localStorage.setItem('userSS', JSON.stringify(jsonData));
          dispatch(authAction(data.email, data.id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const authAction = (email, id) => {
  return {
    type: Types.login,
    payload: {
      email,
      id,
    },
  };
};
