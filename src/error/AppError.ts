class AppError {
  public readonly status: number;

  public readonly message: string;

  constructor(message: string, status: 400) {
    this.message = message;

    this.status = status;
  }
}

export default AppError;
