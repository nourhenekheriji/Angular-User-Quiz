import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
//c un dessign packa on observe dans l api test qui returne des Observable a partir de rxjs
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userUrl : string = 'http://localhost:8082/user/users';

  constructor(private http: HttpClient) { }
  // getUsers(){
  //   return this.http.get("http://localhost:8082/user/users");
  // }
  getUsers(){
    return this.http.get<user[]>(this.userUrl);}

    addUser(user :any){
      return this.http.post('http://localhost:8082/user/addUser', user);

    }
    deleteuser(email :any){
      return this.http.post(`http://localhost:8082/user/archiver?email=${email}`,email);
    }
    // ajouteUser( prod: user):Observable<user>{
    //   return this.http.post<user>(this.userUrl, prod, httpOptions);
    //   }

  getToken(email:string,password:string) {
 
     return this.http.get("http://localhost:8082/user/authenticate?email="+email+"&password="+password,{responseType: 'text' as 'json'});
    }

    forgetPasswordRequest(email:any) {
      return this.http.post("http://localhost:8082/user/forgetPasswordRequest",email);
     }

     checkUserPasswordRequestToken(formData:any) {
      return this.http.post("http://localhost:8082/user/checkUserPasswordRequestToken",formData);
     }

     sendSmsTwoFactorAuthentication(token:any) {
      return this.http.get("http://localhost:8082/sendSmsTwoFactorAuthentication?token="+token);
     }

     activateAccount(activationToken:any) {
      return this.http.get("http://localhost:8082/user/activateAccount?activationToken="+activationToken);
     }
     updateUserPicture(formData: any,token:String) {
    return this.http.post("http://localhost:8082/user/updateUserPicture="+token,formData); 
  }

  twoFactorAuthenticate(formData:any,token:String) {

    return this.http.post("http://localhost:8082/user/twoFactorAuthenticate="+token,formData);  
  }
  updateClient(formData:any) {
    return this.http.post("http://localhost:8082/user/updateUser",formData);
  }
  getUserFromToken(token:any)
  {
    return this.http.get<user>("http://localhost:8082/user/getUserByToken?token="+token);
  
  }

  changePasswordClient(password:string, token:string) {
    return this.http.post("http://localhost:8082/user/changePasswordUser?password="+password+"&token="+token,{responseType: 'text' as 'json'},);
  }

}
