import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { HttpClient } from '@angular/common/http';
import { CartItem } from "app/models/cart-item.model";
import { Product } from "app/models/product.model";
import { ShoppingCart } from "app/models/shopping-cart.model";

import { ProductsDataService } from "app/services/products.service";
import { ShoppingCartService } from "app/services/shopping-cart.service";
import { SendOrderService } from "app/services/send-order.service";
import { SendOrder, Item } from "app/models/send-order.model";

import { Router } from '@angular/router';

import swal from 'sweetalert2';
import * as moment from 'moment';

declare let paypal: any;
// declare var M: any;


interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: "app-checkout",
  styleUrls: ["./checkout.component.scss"],
  templateUrl: "./checkout.component.html"
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public itemList:SendOrder = new SendOrder();

  today = moment().format('LT');
  tableNo: string;
  telNo: string;
  grossT:number =0;
  // gross:number = 1;
  
  toogle1=true;
  toogle2=true;
  toogle3=true;

  private orderList : SendOrder[];
  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private sendorderservice : SendOrderService,
                     private shoppingCartService: ShoppingCartService,
                     private http: HttpClient,
                     private router: Router) {
          
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }


  
  public ngOnInit(): void {
    
    // this.deliveryOptions = this.deliveryOptionService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p._id === item.productId);
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });
      });
    });
    
  }
  



  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public orderConfirm() {
    this.itemList.date=this.today.toString();
    this.itemList.tnumber=this.tableNo;
    this.itemList.mobileNo=this.telNo;
    this.itemList.items = new Array();
    this.cartItems.forEach(function(value){
      this.itemList.items.push(new Item(value.productId,value.proName,value.quantity));
    },this);
    // console.log(this.itemList);
    this.sendorderservice.sendOrder(this.itemList).subscribe((res) => {

      let message = "You have purchased $"+this.grossT+" value items from our store on "+this.today+"Thank you for visiting Us!";
      console.log(message);
      this.http.get(`https://app.notify.lk/api/v1/send?user_id=11023&api_key=djJ0ltAiLZhPiOhFvtZw&sender_id=NotifyDEMO&to=${'94'+this.telNo}&message=${message}`)
                  .subscribe(data=> {
                    alert("reqested");
                    console.log("data",data);
                  });
      
    });

    this.emptyCart(); //temporary

    swal.fire({
      title: "Order will be soon!",
      text: "You orderd items !",
      type: "success",
      
    }).then(() => {
      this.router.navigateByUrl('/');
    });    

    
    // console.log(this.itemList.items);
  }


  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
  })}

  ngAfterViewInit(): void {
    
    this.grossT=this.shoppingCartService.retrieve().grossTotal;
    //alert(this.shoppingCartService.retrieve().grossTotal);
    console.log(this.grossT);
    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
   
      paypal.Button.render({
        env: 'sandbox',
        style: {
          size: 'medium',
          color: 'blue',
          shape: 'pill',
          label: 'checkout'
          // tagline: 'true'
          
         },
        client: {         
          sandbox: 'Ad8OC35xsz0-ted689Wctn_UHATDlkxEa7Y4io18LUlHiO-SORnNMHo3zamZSem-f6pBxUugkre2gWBp'
        },
        commit: true,
        payment:(data, actions) => {
          return actions.payment.create({
            payment: {
              transactions: [
                { amount: { total: this.grossT, currency: 'USD' } }
              ]
            }
          });
        },
        onAuthorize: (data, actions) => {
          return actions.payment.execute().then((payment) => {
            
            this.emptyCart();
            this.orderConfirm();
            

          })
        }
      }, '#paypal-button');
    });

    
  }

  changeTbl1(value:any){
    this.tableNo=value;
    this.toogle1 = !this.toogle1;
    this.toogle2=true;
    this.toogle3=true;
  }
  changeTbl2(value:any){
    this.tableNo=value;
    this.toogle2 = !this.toogle2;
    this.toogle1=true;
    this.toogle3=true;
  }
  changeTbl3(value:any){
    this.tableNo=value;
    this.toogle3 = !this.toogle3;
    this.toogle1=true;
    this.toogle2=true;
  }
  


}
