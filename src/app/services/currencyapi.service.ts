import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyApiResponse } from './payloads/currencyapiresponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyapiService {

  constructor(private Http: HttpClient) { }
  
  public get_conversion_rates(base: string): Observable<CurrencyApiResponse> {
    return this.Http.get<CurrencyApiResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
}
