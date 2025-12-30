class AppError extends Error {
  public errorCode:number
  public type:string
  constructor(errorCode:number, message:string, type:string) {
    super(message);
    this.errorCode = errorCode;
    this.type = type;
    
  }
}
export default AppError;