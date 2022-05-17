import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../guard/roles/admin.guard';

const routes: Routes = [



  

     /* {
        path:'productM',
        loadChildren: ()=>import('./product/product.module').then(m=>m.ProductModule )

      },*/
  /*{path:"home",component:AdminLayoutComponent,
    children:[
      {path: 'products', component: ProductListComponent}
    ]},*/
  //{path:"**",component:AdminLayoutComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
