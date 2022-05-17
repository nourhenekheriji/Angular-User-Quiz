import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Validators, FormBuilder } from '@angular/forms';
import { mustMatch } from 'src/app/service/validators/mustMatchValidator';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { Client } from 'src/app/models/client';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {
  httpClient: any;
  us : Client = new Client();
  clientList!: Client[];
  users: any;
  passwordPattern = "(?=.*[a-z])(?=.*[A-Z]).{8,}";
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  telPattern = "[0-9]{8}";
  captchaKey = "6LebPGAdAAAAANDjO7cQFalTtuU6LFBBDIHxgY9-";
  emailExist="";
  

  constructor(private router:Router,private service: ClientService, private formBuilder: FormBuilder) {

  }

 
  ngOnInit(): void {
  }
  
  addClientForm = this.formBuilder.group({
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
    // picture: ['',
    //   Validators.required,
    // ],
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

  get f() { return this.addClientForm.controls; }


  addClient(client: Client) {
    this.service.addClient(client).subscribe(
      () => this.clientList.push(client)
    )
    
  }
  // onSubmit() {
  //    const formData = new FormData();
  //   formData.append('file', this.userFile);
  //    const user = this.addClientForm.value;
  //    user.picture=null;
  //    formData.append('client', JSON.stringify(user));


  //    this.service.addClient(formData).subscribe(data => {
  //      if(data!=null){
  //     this.router.navigate(['Admin/showUsers']);
  //      alert("Email verification sent to you")
  //    }

  //      else
  //      this.emailExist="Email Already exist ";


  //    })
    
  //  }
  onSubmit(){
    const formData = new FormData();
    const admin = this.addClientForm.value;
    var myJsonString = JSON.stringify(admin);
console.log("//////"+myJsonString)
    formData.append('admin', JSON.stringify(admin));
this.service.addClient(myJsonString).subscribe((res)=>{
  this.router.navigate(["Admin/showUsers"]);
})
   // console.log("////////"+myJsonString);
  //  this.saveUser();
  }


  // imgURL: any;
  // userFile: any;
  // message: any;
  // public imagePath: any;

  // onSelectFile(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.userFile = file;

  //     var reader = new FileReader();

  //     this.imagePath = file;
  //     reader.readAsDataURL(file);
  //     reader.onload = (_event) => {
  //       this.imgURL = reader.result;

  //     }
  //   }
  // }

  // addClientSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.userFile);
  //   const user = this.addClientForm.value;
  //   user.picture=null;
  //   formData.append('client', JSON.stringify(user));


  //   this.service.addClient(formData).subscribe(data => {
  //     if(data!=null){
  //     this.router.navigate(['Admin/showUsers']);
  //     alert("Email verification sent to you")
  //   }

  //     else
  //     this.emailExist="Email Already exist ";


  //   })
    
  // }
}
