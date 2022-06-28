import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPanelComponent } from './components/admin/login-panel/login-panel.component';
import { FilteredListComponent } from './components/store/product-list/filtered/filtered-list/filtered-list.component';
import { OffertListComponent } from './components/store/product-list/offers/offert-list/offert-list.component';
import { ProductListComponent} from './components/store/product-list/product-list.component';
const routes: Routes = [
  {path:'',component:OffertListComponent},
  {path:'filtered/:min/:max',component:FilteredListComponent},
  {path:'products',component:ProductListComponent},
  {path:'login',component:LoginPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
