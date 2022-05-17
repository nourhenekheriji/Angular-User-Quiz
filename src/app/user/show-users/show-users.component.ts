import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { user } from 'src/app/models/user';
// import { ClientService } from 'src/app/service/client.service';
import { LoginService } from 'src/app/service/login.service';
import { UniqueEmailValidator } from 'src/app/service/validators/uniqueEmailValidator';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  listeUsers : user[];
  hidden : boolean;
  constructor(private service: LoginService) { }
  users: any;


  ngOnInit(): void {
//ki bech naamel methode trajaali observable naamel esem l methode.subscribe---> prods rslt de liste de user

     this.service.getUsers().subscribe(prods=> {console.log(prods); this. listeUsers = prods;});

    // let resp = this.service.getUsers();
    // resp.subscribe((data) => this.users = data);   

    // this.getUsers();

    // this.users = {
    //   id : null,
    //   firstName : null,
    //   lastName : null,
    //   email : null,
    //   sexe : null,
    //   tel : null,
    //   address : null
    // }

  }
  
  @Output() notificationDelete = new EventEmitter<user>();

  sendNotifDelete(email:any){
    this.service.deleteuser(email).subscribe((res)=>{
    
//    this.notificationDelete.emit(this.users.id);
    })
  }
  
  showForm() {
    this.hidden = false;
  }
  hideForm() {
    this.hidden = true;
  }
  // getUsers(){
  //   this.service.getUsers().subscribe(res => this.listeUsers = res)
  // }

  }




