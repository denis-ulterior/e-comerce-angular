import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPanelComponent } from './components/admin/login-panel/login-panel.component';
import { StoreAppComponent } from './components/store/store-app.component';

const routes: Routes = [
  {path:'',component:StoreAppComponent},
  {path:'login',component:LoginPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
