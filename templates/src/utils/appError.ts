class AppError extends Error {
  public errorCode:number
  public type:string
  constructor(errorCode, message, type) {
    super(message);
    this.errorCode = errorCode;
    this.type = type;
    
  }
}
export default AppError;