import { apiRequestObject } from 'utils/api';
import { REQUEST_TYPES } from 'constants/request-types';

const API_URL = '/delete-todo';

export const deleteTodo = apiRequestObject({
  url: API_URL,
  type: REQUEST_TYPES.POST
});
