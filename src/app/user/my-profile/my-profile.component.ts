// import { Component, OnInit } from '@angular/core';
// import { ClientService } from '../../service/client.service';
// import {  FormControl, Validators,FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { user } from 'src/app/models/user';
// import { mustMatch } from 'src/app/service/validators/mustMatchValidator';
// import { LoginService } from 'src/app/service/login.service';


// @Component({
//   selector: 'app-my-profile',
//   templateUrl: './my-profile.component.html',
//   styleUrls: ['./my-profile.component.css']
// })
// export class MyProfileComponent implements OnInit {
//   httpClient: any;
//  Newuser = new user();
//   UserList: user[];
//   captchaKey = "6LebPGAdAAAAANDjO7cQFalTtuU6LFBBDIHxgY9-";
//   currentUser: user
//   baseUrl: any;
//   pictureToUpdate: any;
//   token:any;
//   twoFactorAuthenticateMessage="";
//   user:any = {};
//   passwordPattern = "(?=.*[a-z])(?=.*[A-Z]).{8,}";
//   emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
//   telPattern = "[0-9]{8}";
//   emailExist="";
  
//   constructor(private router:Router,private service: LoginService , private formBuilder: FormBuilder) {

//   }

//   captcha = new FormControl('', Validators.required);

//   ngOnInit(): void {
   
//     // this.token = localStorage.getItem('token');
//     // this.service.getUserFromToken(this.token).subscribe(data => {
//     //   if(data.twoFactorAuthentication)
//     //   this.twoFactorAuthenticateMessage="Desactivate Two factor authentication"
//     //   else 
//     //   this.twoFactorAuthenticateMessage="Activate Two factor authentication"
//     //   this.currentUser = data;
//     //   this.userToUpdate = data;
//     //   this.baseUrl = this.service.baseUrl;
//     // })
//   }

//   addUserForm = this.formBuilder.group({
//     firstName: ['', Validators.required],

//     lastName: ['',
//       Validators.required
//     ],
//     email: ['', [
//       Validators.required,
//       Validators.pattern(this.emailPattern),

//     ]],
//     password: ['', [
//       Validators.required,
//       Validators.pattern(this.passwordPattern)
//     ]],
//     confirmPassword: ['',
//       Validators.required,
//     ],
//     sexe: ['',
//       Validators.required
//     ],
//     tel: ['', [
//       Validators.required,
//       Validators.pattern(this.telPattern)
//     ]],
//     picture: ['',
//       Validators.required,
//     ],
//     profession: ['DOCTEUR',
//     Validators.required,
//   ],
//     reCaptcha: ['', Validators.required]

//   }, {
//     validator: mustMatch('password', "confirmPassword"),

//   })



//   get f() { return this.addUserForm.controls; }

 

//   // saveUser(){
//   //   if (this.user != 0){
      
//   //     this.service.addUser(this.user).subscribe( data =>{
//   //       console.log(data);
//   //       this.router.navigate(['showUsers']);
        
//   //     },
//   //     error => console.log(error));
//   //   }
    
//   // }

//   // addUser(user: user) {
//   //   this.service.addUser(user).subscribe(
//   //     () => this.UserList.push(user)
//   //   )
    
//   // }

//   addUser(){
//     this.service.ajouteUser(this.Newuser).subscribe(prod => {
//     console.log(prod);
  
//     });
//     this.router.navigate(['showUsers']);}


//   // onSubmit(){
//   //   console.log(this.user);
//   //   this.saveUser();
//   // }


//   userToUpdate = {
//     email: "",
//     firstName: "",
//     lastName: "",
//     picture:""
//   }
//   message: any;
//   public imagePath: any;

//   onSelectFile(event: any) {
    
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.pictureToUpdate = file;

//       const formData = new FormData();
//       formData.append('file', this.pictureToUpdate);
//       this.service.updateUserPicture(formData,this.token).subscribe(data =>{
//         this.router.navigate(['userProfile']);   
           

//       });

//     }


//   }

//   updateClientSubmit() {



//     const formData = new FormData();
//     const user = this.userToUpdate;
//     formData.append('user', JSON.stringify(user));
//     this.service.updateClient(user).subscribe(data => {
//       console.log(JSON.stringify(user));
//       this.router.navigate(['/showUsers']);
//     })
//   }

//   twoFactorAuthenticate(){
//     const formData = new FormData();
//     formData.append('token',this.token)

//     this.service.twoFactorAuthenticate(formData,this.token).subscribe(data=>{

//       if(data){
//         alert("Activated")
//       this.twoFactorAuthenticateMessage="Desactivate Two factor authentication"
//   }
//       else {
//       this.twoFactorAuthenticateMessage="Activate Two factor authentication"
//       alert("Desactivated")

//     }

//     })

//   }

// }


import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import {  FormControl, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { mustMatch } from 'src/app/service/validators/mustMatchValidator';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  httpClient: any;
  us : user = new user();

  UserList!: user[];
  captchaKey = "6LebPGAdAAAAANDjO7cQFalTtuU6LFBBDIHxgY9-";
  currentUser!: user
  baseUrl: any;
  pictureToUpdate!: any;
  token!:any;
  twoFactorAuthenticateMessage="";
  user:any = {};
  passwordPattern = "(?=.*[a-z])(?=.*[A-Z]).{8,}";
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  telPattern = "[0-9]{8}";
  emailExist="";
  
  constructor(private router:Router,private service: ClientService, private formBuilder: FormBuilder, private userservice: LoginService) {

  }

  captcha = new FormControl('', Validators.required);

  ngOnInit(): void {
   
    this.token = localStorage.getItem('token');
    this.service.getUserFromToken(this.token).subscribe(data => {
      if(data.twoFactorAuthentication)
      this.twoFactorAuthenticateMessage="Desactivate Two factor authentication"
      else 
      this.twoFactorAuthenticateMessage="Activate Two factor authentication"
      this.currentUser = data;
      this.userToUpdate = data;
      this.baseUrl = this.service.baseUrl;
    })
  }

  addUserForm = this.formBuilder.group({
    firstName: ['', Validators.required],

    lastName: ['',
      Validators.required
    ],
    email: ['', [
      Validators.required,
      Validators.pattern(this.emailPattern),

    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]],
    confirmPassword: ['',
      Validators.required,
    ],
    sexe: ['',
      Validators.required
    ],
    tel: ['', [
      Validators.required,
      Validators.pattern(this.telPattern)
    ]],
    picture: ['',
      Validators.required,
    ],
    profession: ['DOCTEUR',
    Validators.required,
  ],
    reCaptcha: ['', Validators.required]

  }, {
    validator: mustMatch('password', "confirmPassword"),

  })


add(){
  console.log("/////"+  JSON.stringify(this.us)
  )
}
  get f() { return this.addUserForm.controls; }

  addUser(user: user) {
    this.service.addUser(user).subscribe(
      () => this.UserList.push(user)
    )
    
  }

  saveUser(){
    if (this.user != 0){
      
      this.service.addUser(this.user).subscribe( data =>{
        console.log(data);
        this.router.navigate(['showUsers']);
        
      },
      error => console.log(error));
    }
    
  }
  
  onSubmit(){
    const formData = new FormData();
    const admin = this.addUserForm.value;
    var myJsonString = JSON.stringify(admin);
console.log(myJsonString)
    formData.append('admin', JSON.stringify(admin));
this.userservice.addUser(myJsonString).subscribe((res)=>{
  console.log("//////"+res)
  this.router.navigate(["Admin/showUsers"]);
})
   // console.log("////////"+myJsonString);
  //  this.saveUser();
  }


  userToUpdate = {
    email: "",
    firstName: "",
    lastName: "",
    picture:""
  }
  message: any;
  public imagePath: any;

  onSelectFile(event: any) {
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pictureToUpdate = file;

      const formData = new FormData();
      formData.append('file', this.pictureToUpdate);
      this.service.updateClientPicture(formData,this.token).subscribe(data =>{
        this.router.navigate(['userProfile']);   
           

      });

    }


  }

  updateClientSubmit() {



    const formData = new FormData();
    const user = this.userToUpdate;
    formData.append('user', JSON.stringify(user));




    this.service.updateClient(user).subscribe(data => {
      console.log(JSON.stringify(user));
      //this.router.navigate(['/showUsers']);
    })
  }

  twoFactorAuthenticate(){
    const formData = new FormData();
    formData.append('token',this.token)

    this.service.twoFactorAuthenticate(formData).subscribe(data=>{

      if(data){
        alert("Activated")
      this.twoFactorAuthenticateMessage="Desactivate Two factor authentication"
  }
      else {
      this.twoFactorAuthenticateMessage="Activate Two factor authentication"
      alert("Desactivated")

    }

    })

  }





}




