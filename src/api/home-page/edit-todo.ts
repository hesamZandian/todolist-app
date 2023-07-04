import { apiRequestObject } from 'utils/api';
import { REQUEST_TYPES } from 'constants/request-types';

const API_URL = '/update-todo';

export const editTodo = apiRequestObject({
  url: API_URL,
  type: REQUEST_TYPES.POST
});
