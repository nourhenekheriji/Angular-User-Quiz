import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/service/client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private clientService: ClientService,private router: Router) {
  }
  
  guardRole="CLIENT";
  
  canActivate() {

    let role=localStorage.getItem('role');
    let token=localStorage.getItem('token');

    this.clientService.getUserFromToken(token).subscribe(data=>{
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

