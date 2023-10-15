class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; //4xx: fail, 5xx: error
        this.isOperational = true; //Lỗi hoạt động
        //captureStackTrace: Tạo một ngăn xếp của đối tượng lỗi và gán nó cho đối tượng lỗi 
        Error.captureStackTrace(this, this.constructor)

    }
}

export default AppError