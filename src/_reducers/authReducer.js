import { Types } from '../_actions/actionTypes';

const dataInitial = {
  email: '',
  id: '',
};

export const authReducer = (state = dataInitial, action) => {
  switch (action.type) {
    case Types.login:
      return {
        email: action.payload.email,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
