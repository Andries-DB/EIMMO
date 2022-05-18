/* eslint-disable @typescript-eslint/ban-types */
export default class BaseError extends Error {
  public errors: {} | undefined;
  public message: string;
  public statusCode: number;
  constructor(message: string, statusCode: number) {
      super();
      this.message = message;
      this.statusCode = statusCode;
  }
}