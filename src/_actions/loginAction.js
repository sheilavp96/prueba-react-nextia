import { Types } from './actionTypes';

const loginAction = {
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
};

export default loginAction;
