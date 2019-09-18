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


  public product: Product[];
  public products: Observable<Product[]>;
  public sendOrders: SendOrder[];

  show:boolean=false;

  constructor(private sendorderservice: SendOrderService,
              private productsService: ProductsDataService) { }

  ngOnInit() {
    // this.products = this.productsService.all();
    this.productsService.all().subscribe((res:Product[]) => {
      this.product=res;
      
      res.forEach(x => {
        // console.log(x.name)
        this.name.push(x.name);
        
      })
      // console.log(this.name)
    })
    
    this.sendorderservice.getOrder().subscribe((res:SendOrder[]) => {
      this.sendOrders=res;

      console.log(res);
      console.log();

      let i = 0;
      let j = 0;
      
      res.forEach(y => {
        
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
