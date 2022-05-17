import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddAdminComponent } from '../admin/add-admin/add-admin.component';
import { admin } from '../models/admin';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.url;
  adminController=environment.adminController;
  

  constructor(private http: HttpClient) {}

  // }
  // addAdmin(formData: any) {
  //   return this.http.post(this.adminController + 'addAdmin', formData);
  // }

  addAdmin(admin :any){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8082/admin/addAdmin', admin, { headers: headers});}
}
