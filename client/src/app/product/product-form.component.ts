import { Component, OnInit } from "@angular/core";
import { Product } from "./interfaces/product-interface";
import { ProductService } from "./product.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: "",
    description: "",
    prince: 0,
    imageURL: "",
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  submitProduct() {
    this.productService.createProduct(this.product).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
