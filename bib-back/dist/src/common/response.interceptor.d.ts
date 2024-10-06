import { CallHandler, ExecutionContext, HttpException, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export type Response<T> = {
    data: T;
};
export declare class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>>;
    errorHandler(exception: HttpException, context: ExecutionContext): void;
    responseHandler(res: any, context: ExecutionContext): {
        data: any;
    };
}
