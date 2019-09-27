import { Component, OnInit, Input } from "@angular/core";
import { CartItem } from "app/models/cart-item.model";

import { Product } from "app/models/product.model";
import { ShoppingCart } from "app/models/shopping-cart.model";
import { SendOrder } from "app/models/send-order.model";

import { SendOrderService } from "app/services/send-order.service";
import { ProductsDataService } from "app/services/products.service";
import { ShoppingCartService } from "app/services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { FileUploader } from 'ng2-file-upload';

import { NgForm } from '@angular/forms';


import swal from 'sweetalert2';

import { AuthService } from  '../../auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
  
})
export class AdminComponent implements OnInit {

  @Input()
  responses: Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader;
  private title: string;

  
  data : SendOrder[];
  public items : SendOrder;
  name = [];
  quantity = [];
  chart = <any>[];
  image : string;

  selectedProduct: Product;
  selectedFile : File = null;
 
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public products: Observable<Product[]>;
  private product: Product[];
  private cartSubscription: Subscription;
  public sendOrders: SendOrder[];
  
  constructor(private productsService: ProductsDataService,
              private sendorderservice: SendOrderService,
              private shoppingCartService: ShoppingCartService,
              private  authService:  AuthService,
              private http:HttpClientModule,
              private router: Router
              ) {

      if(!authService.isLoggedIn){
        router.navigate(['login']);
      }
  }

  


  ngOnInit() {

    this.resetForm();
    this.refreshProducts();
    this.products = this.productsService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.product = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.product.find((p) => p._id === item.productId);
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });
      });
      
    });

    this.onUploadHandler(event);
    

}

onUploadHandler(event){
    // console.log('fired Event "onUpload"');
    // console.log(event.cdnUrl);
    this.image = event.cdnUrl;
    
}

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.productsService.selectedProduct = {
      _id:"",
      name:"",
      description:"",
      price:null,
      image:"",
      updateFrom:null
    }
  }

    onSubmit(form : NgForm){
      // console.log('hello');
      if(form.value._id==""){
      form.value.image=this.image;
      // console.log(form.value.image);
      this.productsService.postProduct(form.value).subscribe((res) => {
        
        this.resetForm(form);
        this.refreshProducts();
        
        swal.fire({
          title: "Added!",
          text: "You added a new product !",
          type: "success",
          
        }).then(() => {
          window.location.reload();
        });
        // 
        
        });
      }else{
        this.productsService.putProduct(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshProducts();
          swal.fire({
            title: "Updated!",
            text: "You updated a product!",
            type: "success",
            
          }).then(() => {
            window.location.reload();
          });
        });

      }

    }

    refreshProducts(){
      this.productsService.getProduct().subscribe((res) => {
        this.productsService.product = res as unknown as Product[];
      });
    }


    onEdit(pro : Product){
      
      this.productsService.selectedProduct = pro;
      
    }

    onDelete(_id: string, form : NgForm) {

      swal.fire({
        title: "Are you sure!",
        text: "You deleted the product!",
        type: "warning",
        
      }).then(() => {
        this.productsService.deleteProduct(_id).subscribe((res) => {
          this.refreshProducts();
          window.location.reload();
        });
        
      });

    
    }


}
