// import { Ingredient } from "app/models/ingredient.model";

export class Product {
  public _id: string;
  public name: string;
  public description: string;
  public price: number;
  public image: string;
  // public ingredients: Ingredient[];

  public updateFrom(src: Product): void {
    this._id = src._id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.image = src.image;
    // this.ingredients = src.ingredients.map((i) => {
    //   let ingredient = new Ingredient();
    //   ingredient.updateFrom(i);
    //   return ingredient;
    // });
  }
}
