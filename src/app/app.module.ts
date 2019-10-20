import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule } from 'ng2-file-upload';

import { UcWidgetModule } from 'ngx-uploadcare-widget';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { AdminComponent } from './components/admin/admin.component';

import { ProductsDataService } from "./services/products.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { LocalStorageServie, StorageService } from "./services/storage.service";
import { SendOrderService } from "./services/send-order.service";

import { AdminService } from "./services/admin.service";
import { ChefViewComponent } from './components/chef-view/chef-view.component';
import { LoginComponent } from './components/admin/login/login.component';

import {AuthService} from "app/auth/auth.service";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDN1C2X4xyC169alIrhvLupk7mZNro6pQc",
  authDomain: "designproject-d0329.firebaseapp.com",
  databaseURL: "https://designproject-d0329.firebaseio.com",
  projectId: "designproject-d0329",
  storageBucket: "designproject-d0329.appspot.com",
  messagingSenderId: "272077004339",
  appId: "1:272077004339:web:427f4508a04ca4c69a4d46"
};  

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    AdminComponent,
    ChefViewComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FileUploadModule,
    UcWidgetModule,
  ],
  providers: [
    ProductsDataService,
    LocalStorageServie,
    SendOrderService,
    AdminService,
    AuthService,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
