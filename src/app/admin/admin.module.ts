import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {TopbarComponent} from "./topbar/topbar.component";
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AdminLayoutComponent,
    

  ],
    exports: [
        SidebarComponent,
        TopbarComponent,
        FooterComponent,
      AdminLayoutComponent,
    

    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],

})
export class AdminModule { }
