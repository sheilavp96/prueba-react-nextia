import { Types } from '../_actions/actionTypes';

const initialState = {
  profile: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      console.log('login', action.payload.user);

      let url = 'https://qa-api.socioinfonavit.com/api/v1/login';
      let jsonData = {
        user: {
          email: action.payload.user.email,
          password: action.payload.user.password,
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
            console.log('errorrrr');
          } else {
            console.log('funciona');
            return { profile: action.payload.user };
            sessionStorage.setItem('userSS', JSON.stringify(jsonData));
            console.log(action.payload.user);
          }
        })
        .catch((err) => {
          console.log(err);
        });

    default:
      console.log(state);
      return state;
  }
};

export default loginReducer;
