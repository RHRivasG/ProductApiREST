import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "./interfaces/product-interface";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        this.getProducts();
      },
      (err) => console.log(err)
    );
  }

  submitProduct() {}
}
