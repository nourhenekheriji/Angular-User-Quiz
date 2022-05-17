import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  loginResult="";
  divLoginShow=false;

  constructor(private formBuilder: FormBuilder, private clientService:ClientService,private loginService: LoginService,private router:Router, private activatedRoute: ActivatedRoute) {
    this.activationToken=this.activatedRoute.snapshot.params.id;
   }
   activationToken:any;

  ngOnInit(): void {
    // this.loginService.activateAccount(this.activationToken).subscribe(data=>{
    //   console.log(data);
    //   if(data)
    //   {
    //     this.router.navigate(['login']);
    //     alert("VERIFIED");   
    //   }
    //   else {
    //     this.router.navigate(['login']);
    //     alert("Verif your email again")
    //   }
    // })

  }

  loginForm = this.formBuilder.group({

    email: ['', [
      Validators.required,

    ]],
    password: ['', [
      Validators.required,
    ]],


  });

  get f() { return this.loginForm.controls; }

  login() {

    const formData = new FormData();
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.loginService.getToken(email, password).subscribe(data => {
      if (data == "False"){
        this.divLoginShow=true;
        this.loginResult="Verif your informations";
      }      
      else if (data == "Not Verified")
      { this.divLoginShow=true;
        this.loginResult="Your account is not verified Please check your email"
      }      
      else {

        let user:any;
        let token=data.toString();
        user=this.clientService.getUserFromToken(data.toString()).subscribe(userFromToken=>{
          let role=userFromToken.role;
          

          
          if(role=="CLIENT")
          {
            if(userFromToken.twoFactorAuthentication)
            {
              this.router.navigate(['twoFactorAuthentication/'+token]);

            }
            else{
              localStorage.setItem('token', token);
              localStorage.setItem('role',role);
              this.router.navigate(['User/userProfile']);
            }

            }
          else if (role="ADMIN"){
            localStorage.setItem('token', token);
            localStorage.setItem('role',role);

              this.router.navigate(['User/userProfile']);
          }
          else
          console.log(role);
        });
        
        
      }



    })



  }


}
