/* eslint-disable react-hooks/exhaustive-deps */
import { noop } from 'lodash';
import { useEffect, useState } from 'react';
import { Nullable } from 'utils/types';

interface Properties {
  apiData?: any;
  apiMethod: any;
  onFinally?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (response: any) => void;
}

export const usePageData = ({
  apiMethod,
  onError = noop,
  onSuccess = noop,
  onFinally = noop,
  apiData = null
}: Properties) => {
  const [data, setData] = useState<Nullable<GResponse>>(null);
  const [pending, setPending] = useState(false);

  const fetchData = () => {
    setPending(true);
    try {
      apiMethod(apiData)
        .then((response: any) => {
          setData(response);
        })
        .catch((error: any) => {
          onError?.(error);
        })
        .finally(() => {
          onFinally?.();
          setPending(false);
        });
    } catch {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data && !pending) onSuccess?.(data);
  }, [data, pending]);

  return {
    data,
    pending,
    reload: fetchData
  };
};
