class ApiError extends Error {
  constructor(err) {
    super();
    if (err && err.message && err.statusCode) {
      this.message = `${err.statusCode} ${err.message}`;
      this.statusCode = err.statusCode;
    } else {
      this.message = 'Something went wrong';
      this.statusCode = 500;
    }
  }

  toString() {
    if (this.errors && Object.keys(this.errors).length > 0) {
      // return getErrorMessages(this.errors);
    }
    return this.message;
  }

  isUnauthorized() {
    return this.statusCode === 401;
  }
}

export default ApiError;
