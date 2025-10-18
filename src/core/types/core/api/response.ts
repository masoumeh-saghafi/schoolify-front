export default interface BaseResponseEntity<T> {
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
