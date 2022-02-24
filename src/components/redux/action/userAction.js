import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useDatosUser = () => {
  const dispatch = useDispatch();
  const setDatosUser = useCallback(
    (data) => dispatch({ type: 'SET_DATA_USER', payload: data }),
    [dispatch]
  );
  return {
    setDatosUser,
  };
};
