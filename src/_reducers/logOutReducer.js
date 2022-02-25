import { Types } from '../_actions/actionTypes';
const initialState = {
  user: 'nada',
};

const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGOUT_SESSION:
      sessionStorage.removeItem('userSS');
      localStorage.removeItem('userSS');
      console.log('log', action.payload.user);
      let url = 'https://qa-api.socioinfonavit.com/api/v1/logout';
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(url, request)
        .then(async (res) => {
          const data = await res.json();
          return {};
        })
        .catch((err) => {
          console.log(err);
        });

      return {};
    default:
      return {};
  }
};

export default logOutReducer;
