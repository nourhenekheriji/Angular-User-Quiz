// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {
//     window.onscroll = function () {
//       myFunction();
//     };

//     var navbar = document.getElementById('navnav');
//     var sticky = navbar?.offsetTop;

//     function myFunction() {
//       if (window.pageYOffset >= 200) {
//         navbar?.classList.add('sticky');
//       } else {
//         navbar?.classList.remove('sticky');
//       }
//       console.log('x' + navbar?.classList);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nava-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavaBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

