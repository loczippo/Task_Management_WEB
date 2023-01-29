import axios, { AxiosError } from 'axios';
import { ErrorResponse } from '../interfaces/error.interface';

const isAxiosError = <T>(error: unknown): error is AxiosError<T> => {
    return axios.isAxiosError(error)
}

const getAxiosErrorResponse = (error: unknown): ErrorResponse => {
    const unknownAxiosToAxiosError = error as AxiosError;
    const errorAxiosData = unknownAxiosToAxiosError.response?.data as ErrorResponse;
    return errorAxiosData || "";
}

export { isAxiosError, getAxiosErrorResponse };