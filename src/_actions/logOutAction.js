import { Types } from './actionTypes';

const logOutAction = {
  log: (user) => ({ type: Types.LOGOUT_SESSION, payload: { user } }),
};
export default logOutAction;
