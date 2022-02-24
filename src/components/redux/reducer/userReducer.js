const dataInitial = {
  array: [],
};

const datosUser = (state = dataInitial, { type, ...data }) => {
  switch (type) {
    case 'SET_DATA_USER':
      return { ...state, datos: data.payload };
    default:
      return state;
  }
};
export default datosUser;
