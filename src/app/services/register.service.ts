import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ValidatorPayReq } from '../interfaces/requests/ValidatorRequest';
import { Observable } from 'rxjs';
import { ValidatorPayRes } from '../interfaces/responses/ValidatorResponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly http = inject(HttpClient);
  private readonly url: string = 'http://localhost.com';

  constructor() { }

  validatorPayment(object:ValidatorPayReq): Observable<ValidatorPayRes> {
    console.log('DATA', object);
    return this.http.post<ValidatorPayRes>(`${this.url}/validate-pay`, object)
  }
}
