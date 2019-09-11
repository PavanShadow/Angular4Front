import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SendOrder } from '../models/send-order.model';

@Injectable()
export class SendOrderService {

  cartproducts: SendOrder[];
  
  readonly baseURL = 'https://designpavan.herokuapp.com/orders';
  // readonly smsurl = 'https://app.notify.lk/api/v1/send?user_id=10760&api_key=rQ8LexGbadgc9bWRvZmd&sender_id=NotifyDEMO&to=94712013009&message=TestWork';
      

  constructor(private http : HttpClient) { }

  sendOrder(sendlist: SendOrder){
    
    return this.http.post(this.baseURL, sendlist);
    
  }
  
  getOrder(): Observable<any>{
    return this.http.get(this.baseURL);
  }
}
