import { APIrequestMethod } from '@/src/01-shared/types/API';

export type GET_headers_acceptLanguage_Request = object;

export type GET_headers_acceptLanguage_SuccessResponse = object;

export type GET_headers_acceptLanguage_ErrorResponse = object;

export type GET_headers_acceptLanguage_Response =
  | GET_headers_acceptLanguage_SuccessResponse
  | GET_headers_acceptLanguage_ErrorResponse;

export const GET_headers_acceptLanguage = {
  url: '/api/headers/accept-language',
  method: APIrequestMethod.GET,
};
