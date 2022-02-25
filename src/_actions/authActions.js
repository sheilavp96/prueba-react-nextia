import { Types } from './actionTypes';
const axios = require('axios').default;

export const startLogin = (email, id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://qa-api.socioinfonavit.com/api/v1/login',
      data: {
        user: {
          email: email,
          password: id,
        },
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.headers.authorization);
        dispatch(authAction(res.data.email, res.headers.authorization));
      })
      .catch(function (error) {
        console.log(error);
      });
    //   let url = 'https://qa-api.socioinfonavit.com/api/v1/login';
    //   let jsonData = {
    //     user: {
    //       email: email,
    //       password: id,
    //     },
    //   };
    //   const request = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(jsonData),
    //   };
    //   fetch(url, request)
    //     .then(async (response) => {
    //       console.log(response.body);
    //       console.log(response.headers.entries());

    //       const data = await response.json();

    //       console.log(data);
    //       if (data?.error) {
    //         console.log(data.error);
    //       } else {
    //         console.log('funciona');
    //         sessionStorage.setItem('userSS', JSON.stringify(jsonData));
    //         localStorage.setItem('userSS', JSON.stringify(jsonData));
    //         dispatch(authAction(data.email, data.id));
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
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
