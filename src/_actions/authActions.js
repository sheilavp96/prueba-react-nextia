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
