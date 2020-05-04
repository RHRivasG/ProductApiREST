import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductFormComponent } from "./product-form.component";

const routes: Routes = [
  { path: "product", component: ProductComponent },
  { path: "product-form", component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
