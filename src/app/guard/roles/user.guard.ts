import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService,private router: Router) {
  }
  
  guardRole="USER";
  
  canActivate() {

    let role=localStorage.getItem('role');
    let token=localStorage.getItem('token');

    this.loginService.getUserFromToken(token).subscribe(data=>{
      if(!data){
        console.log("token expired");
      localStorage.removeItem('token');
      localStorage.removeItem('role');}
    });

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    else{
      if(role==this.guardRole){
        return true;

      }
      else {
        alert('Access denied');
        return false;
      }
    }
    
    
  

  }

}
