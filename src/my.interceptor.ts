import { HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { HttpInterceptorHandler } from "@angular/common/http/src/interceptor";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class MyInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, handler: HttpInterceptorHandler): Observable<HttpEvent<any>> {
        console.log("before Interception!", request);
        
        const myHeaders = new HttpHeaders({
            'Cotent-Type': 'application/json'
        })
        
        const newRequest = request.clone({
            headers: request.headers.set('Content-Type', 'application/json'),
        })

        console.log("Intercepted!", newRequest);
        
        return handler.handle(newRequest).pipe(
            tap(res => {
                console.log("Tapped!", res);
                return res;
            })
        )
    }
}