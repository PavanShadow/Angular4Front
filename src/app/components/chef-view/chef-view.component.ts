import { Component, OnInit } from '@angular/core';
import { SendOrder } from "app/models/send-order.model";
import { SendOrderService } from "app/services/send-order.service";
import { Chart } from 'chart.js';

import { Product } from "app/models/product.model";
import { ProductsDataService } from "app/services/products.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements OnInit {

  name = [];
  quantity = [];
  chart = <any>[];


  private product: Product[];
  public products: Observable<Product[]>;
  public sendOrders: SendOrder[];

  show:boolean=false;

  constructor(private sendorderservice: SendOrderService,
              private productsService: ProductsDataService) { }

  ngOnInit() {
    this.products = this.productsService.all();
    this.productsService.all().subscribe((products) => {
      this.product=products;
      
      // console.log(this.product)
    })
    
    this.sendorderservice.getOrder().subscribe((res:SendOrder[]) => {
      this.sendOrders=res;
      
      let i = 0;
      res.forEach(y => {
        
        this.name.push(y.items[i].name);
        this.quantity.push(y.items[i].quantity);
      });
      this.chart = new Chart('canvas', { 
      type:'line',
      data:{
        labels:this.name,
        datasets:[{
          data:this.quantity,
          borderColor: '#3cba9f',
          fill: false
        }]
      },
      options:{
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            display:true
          }],
          yAxes:[{
            display:true
          }],
        }
      }
    });
    });


    
    
  }

  

}
