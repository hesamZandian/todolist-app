import { apiRequestObject } from 'utils/api';
import { REQUEST_TYPES } from 'constants/request-types';

const API_URL = '/todos';

export const getTodos = apiRequestObject({
  url: API_URL,
  type: REQUEST_TYPES.GET
});
