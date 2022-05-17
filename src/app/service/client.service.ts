import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { first, map, tap } from 'rxjs/operators';
import { user } from 'src/app/models/user';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.url;
  clientController=environment.clientController;
  

  constructor(private http: HttpClient) {

  }
  // addClient(client: Client, formData: any){
  //   return this.http.post(this.baseUrl, client, formData);}

  //  addClient(formData: any) {
  //    return this.http.post(this.clientController + 'client/addClient', formData);
  //  }
   addClient(client :any){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post('http://localhost:8082/client/addUserClient', client,{ headers: headers});

  }

  addUser(user: any) {
    return this.http.post(this.baseUrl + 'user/addUserX', user);

  }
  generateToken(token:any){
    return this.http.get(this.baseUrl + 'generateToken', token);

  }

  updateClient(formData: any) {
    return this.http.post(this.baseUrl + "updateUser",formData);
  }
  updateClientPicture(formData: any,token:String) {
    return this.http.post(this.baseUrl + "updateUserPicture?token="+token,formData);
  }
  changePasswordClient(formData: any) {
    return this.http.post(this.baseUrl + "changePasswordUser",formData);
  }

  addPicture(formData: any) {

    return this.http.post(this.baseUrl + 'savePicture', formData);

  }   
 
  getUsers() {

    return this.http.get<user[]>(this.baseUrl+"users")
  }
  getUserFromToken(token:any)
  {
    return this.http.get<user>(this.baseUrl+"user/getUserByToken?token="+token);

  }
 

 




  VerifEmailUnique(email: string) {
    
    const users = this.getUsers();
    var i = -1;
    
    return   users.pipe(
      tap(data => {
        
        var stringifiedJson = JSON.stringify(data)
        const parsedJson = JSON.parse(stringifiedJson);

        for (var i = 0; i < parsedJson.length; i += 1) {
          if (parsedJson[i].email == email)
          {
            i = 1;
            
            console.log("hey");
          }

        }
      }))
      
      
    

  }

  isEmailExist(email: any) {

    return this.http.get<Boolean[]>('http://localhost:8082/getUserByEmail?=email=' + email)

  }


  getBoolean(email: string) {

    return this.http.get<Boolean[]>('http://localhost:8082/isEmailExist?=email=' + email)

  }

  twoFactorAuthenticate(formData:any) {

    return this.http.post(this.baseUrl+"twoFactorAuthenticate",formData)
  }









  //   users.forEach(function(value) {


  //     console.log(value.valueOf.bind("email"));
  //  });




}
