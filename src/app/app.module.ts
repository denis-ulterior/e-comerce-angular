import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { StoreAppComponent } from './components/store/store-app.component';
import { FiltersComponent } from './components/store/filters/filters.component';
import { ProductListComponent } from './components/store/product-list/product-list.component';
import { ProductItemComponent } from './components/store/product-list/product-item/product-item.component';
import { ProductListService } from './components/store/product-list/product-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/shared/banner/banner.component';
import { LoginPanelComponent } from './components/admin/login-panel/login-panel.component';
import { OffertListComponent } from './components/store/product-list/offers/offert-list/offert-list.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    BannerComponent,
    LoginPanelComponent,
    OffertListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
