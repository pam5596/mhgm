export default function(error: Error) {
  if (error instanceof BaseError) {
    return JSON.stringify(error.toJson(), null, 4)
  } else {
    return JSON.stringify({
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause
    }, null, 4)
  }
}