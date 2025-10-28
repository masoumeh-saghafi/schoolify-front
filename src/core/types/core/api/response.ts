export interface BaseResponseEntity<T> {
  data: T | null;
  errors: string[];
  errorDetails: object;
  message: string;
  isSuccess: boolean;
  statusCode: number;
  isExceptionThrown: boolean;
  requestDate: string;
  responseDate: string;
}
export interface BaseIdDataEntity<T> {
  id: string;
  data: T | null;
}
