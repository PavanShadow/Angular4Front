import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CheckoutComponent } from "./components/checkout/checkout.component";

import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { LoginComponent } from "./components/admin/login/login.component";


import { ChefViewComponent } from "./components/chef-view/chef-view.component";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                component: AdminComponent,
                path: "admin"
            },
            {
                component: LoginComponent,
                path: "login"
            },
            
            {
                component: ChefViewComponent,
                path: "chef-view"
            },
            {
                component: StoreFrontComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
