import { HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { HttpInterceptorHandler } from "@angular/common/http/src/interceptor";
import { Observable } from "rxjs";

export class MyInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, handler: HttpInterceptorHandler): Observable<HttpEvent<any>> {
        console.log("Intercepted!", request);
        
        return handler.handle(request)
    }
}