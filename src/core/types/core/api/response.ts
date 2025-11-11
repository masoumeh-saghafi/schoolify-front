export interface BaseResponseEntity<T> {
  data?: T | null | undefined;
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

export default interface BasePaginationDataEntity<T> {
  docs: T[];
  pagination: {
    totalDocs: number;
    page: number;
    size: number;
    totalPages: number;
  };
}

export interface BaseAddResponseEntity {
  id: string;
}
