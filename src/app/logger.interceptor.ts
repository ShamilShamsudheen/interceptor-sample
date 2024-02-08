import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way to ${req.url}`);
  const authToken = req.clone({
    headers:req.headers.set('Authorization','Bearer token xyz')
  })
  
  return next(authToken);
};
