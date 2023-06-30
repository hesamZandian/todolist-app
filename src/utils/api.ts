import { get, post } from 'services/api';
import { REQUEST_TYPES } from 'constants/request-types';

interface apiRequestProperties {
  url: string;
  type: GRequestMethod;
  transformer: (data: any) => any;
  inputTransformer: (data: any) => any;
}

export function apiRequestObject({
  url,
  transformer,
  inputTransformer,
  type = REQUEST_TYPES.GET
}: apiRequestProperties) {
  const apiCall = (data: any) => {
    const transformedData = inputTransformer ? inputTransformer(data) : data;
    const dataIsFormData = transformedData instanceof FormData;
    const modifiedData = dataIsFormData ? data : transformedData;

    const handleRequestByType = () => {
      switch (type) {
        case REQUEST_TYPES.GET: {
          return get({
            url,
            config: {
              params: modifiedData
            }
          });
        }
        case REQUEST_TYPES.POST: {
          return post({
            url,
            data: modifiedData
          });
        }

        default: {
          return new Promise<{ data: string }>((resolve, reject) => {
            resolve({ data: 'test' });
          });
        }
      }
    };

    return new Promise((resolve, reject) => {
      try {
        const handleResponse = (response: any) => {
          if (transformer) {
            resolve(transformer({ data: response }));
          }
          resolve(response);
        };
        handleRequestByType().then(handleResponse);
      } catch (error) {
        reject(error);
      }
    });
  };

  apiCall.url = url;
  return apiCall;
}
