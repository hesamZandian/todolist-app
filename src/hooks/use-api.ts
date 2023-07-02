import { useState } from 'react';

interface useApiProperties {
  apiMethod: any;
  onSuccess?: (response: any) => void;
  onFinally?: () => void;
  onError?: (error: any) => void;
}

const useApi = ({ apiMethod, onSuccess, onFinally, onError }: useApiProperties) => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  const request = (apiData?: any) => {
    return new Promise((resolve, reject) => {
      startLoading();
      // API
      apiMethod(apiData)
        ?.then((response: any) => {
          onSuccess?.(response);
          resolve(response);
          setHasError(false);
        })
        ?.catch((error: any) => {
          onError?.(error);
          reject(error);
          setHasError(true);
        })
        ?.finally(() => {
          endLoading();
          onFinally?.();
        });
    });
  };
  return {
    request,
    hasError,
    pending: loading
  };
};

export default useApi;
