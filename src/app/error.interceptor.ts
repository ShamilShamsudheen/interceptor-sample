import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if([404].includes(error.status)){
        console.log(`${error.error} :message from the server`);
        
      }
      const e = error.error
      return throwError(() => console.log(e))
  }))
};
