import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin.model';

@Injectable()
export class AdminService {

  readonly baseUrl = 'http://localhost:3000/admins';


  constructor(private http : HttpClient) { }

  getAdmin() : Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
