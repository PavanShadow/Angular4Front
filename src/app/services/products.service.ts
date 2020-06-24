import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "../models/product.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";

let count = 0;

@Injectable()
export class ProductsDataService extends CachcingServiceBase {

  selectedProduct: Product;

  product: Product[];
  public products: Observable<Product[]>;

  readonly baseURL = 'https://designpavan.herokuapp.com/products';

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Product[]> {
    return this.cache<Product[]>(() => this.products,
      (val: Observable<Product[]>) => this.products = val,
      () => this.http
        .get(this.baseURL)
        .map((response) => response.json()
          .map((item) => {
            let model = new Product();
            model.updateFrom(item);
            return model;
          })));
  }

  postProduct(pro: Product) {
    return this.http.post(this.baseURL, pro);
  }

  getProduct() {
    return this.http.get(this.baseURL);
  }

  putProduct(pro: Product) {
    return this.http.put(this.baseURL + `/${pro._id}`, pro);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
