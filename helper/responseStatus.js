const ResponseStatus = {
  OK: (data, message) => ({
    code: "200",
    status: "OK",
    message: message || "No Error",
    ...(data !== undefined && data !== null ? { data } : {}),
  }),

  SEE_OTHER: (url, message) => ({
    code: "303",
    status: "SEE_OTHER",
    message: message || "Please follow the URL provided",
    ...(url ? { url } : {}),
  }),

  REDIRECT: (url, message) => ({
    code: "303",
    status: "SEE_OTHER",
    message: message || "Please follow the URL provided",
    ...(url ? { url } : {}),
  }),

  INVALID_ARGUMENT: (message) => ({
    code: "400",
    status: "INVALID_ARGUMENT",
    message: message || "Client specified an invalid argument",
  }),

  UNAUTHENTICATED: (message) => ({
    code: "401",
    status: "UNAUTHENTICATED",
    message: message || "Request is not authenticated",
  }),

  PERMISSION_DENIED: (message) => ({
    code: "403",
    status: "PERMISSION_DENIED",
    message: message || "Permission denied",
  }),

  NOT_FOUND: (message) => ({
    code: "404",
    status: "NOT_FOUND",
    message: message || "A specified resource is not found",
  }),

  ALREADY_EXISTS: (message) => ({
    code: "409",
    status: "ALREADY_EXISTS",
    message: message || "Resource already exists",
  }),

  RESOURCE_EXHAUSTED: (message) => ({
    code: "429",
    status: "RESOURCE_EXHAUSTED",
    message: message || "Out of resource",
  }),

  CANCELLED: (message) => ({
    code: "499",
    status: "CANCELLED",
    message: message || "Request cancelled by the client",
  }),

  UNKNOWN: (message) => ({
    code: "500",
    status: "UNKNOWN",
    message: message || "Unknown Server Error",
  }),

  NOT_IMPLEMENTED: (message) => ({
    code: "501",
    status: "NOT_IMPLEMENTED",
    message: message || "API method is not implemented by the server",
  }),

  UNAVAILABLE: (message) => ({
    code: "503",
    status: "UNAVAILABLE",
    message: message || "Service unavailable",
  }),

  DEADLINE_EXCEEDED: (message) => ({
    code: "504",
    status: "DEADLINE_EXCEEDED",
    message: message || "Request deadline exceeded",
  }),
};

export default ResponseStatus;
