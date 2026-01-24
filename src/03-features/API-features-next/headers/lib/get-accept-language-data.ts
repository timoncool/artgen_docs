import {
  GET_headers_acceptLanguage,
  type GET_headers_acceptLanguage_Request,
} from '@/src/01-shared/API/slices-next/headers-routes';
import { axiosInstanceNext } from '@/src/03-features/API-features-next/axios-instance-next/axios-instance-next';

export const getAcceptLanguageData = async (
  requestData: GET_headers_acceptLanguage_Request,
  onSuccess?: (args: any) => void,
  onError?: (args: any) => void,
): Promise<
  | {
      result: string;
      data: any;
    }
  | undefined
> => {
  const { method, url } = GET_headers_acceptLanguage;

  try {
    const response = await axiosInstanceNext[method](url, { params: { ...requestData } });
    const { data } = response.data;
    onSuccess?.(data);
    return onSuccess ? undefined : { result: 'success', data };
  } catch (error: any) {
    const data = {
      code: error?.response?.data?.error_code || 'error',
      title: error?.response?.data?.error_title || null,
      message: error?.response?.data?.error_message || null,
    };

    onError?.(data);
    return onError ? undefined : { result: 'error', data };
  }
};
