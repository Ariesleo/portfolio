class CustomHttpError extends Error {
  httpStatusCode;
  timestamp;
  documentationUrl;

  constructor(httpStatusCode, message, documentationUrl) {
    if (message) {
      super(message);
    } else {
      super('A generic error occurred!');
    }

    // initializing the class properties
    this.status = `${httpStatusCode}`.startsWith('4') ? 'fail' : 'error';
    this.httpStatusCode = httpStatusCode;
    this.timestamp = new Date().toISOString();
    this.documentationUrl = documentationUrl;

    // attaching a call stack to the current class,
    // preventing the constructor call to appear in the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export { CustomHttpError };
