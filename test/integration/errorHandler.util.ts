export const errorHandler = (callback: () => Promise<void>) => {
  return async () => {
    try {
      return await callback()
    } catch(e) {
      console.log(e)
    }
  }
}