import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { ProductDto } from "./dto/product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const products: Product[] = await this._productService.getAll();
    return products;
  }

  @Get(":id")
  async getProduct(@Param("id", ParseIntPipe) id: number): Promise<Product> {
    const product: Product = await this._productService.get(id);
    return product;
  }

  @Post()
  async createProduct(@Body() productDto: ProductDto): Promise<Product> {
    const createProduct = await this._productService.create(productDto);
    return createProduct;
  }

  @Patch(":id")
  async updateProduct(
    @Param("id", ParseIntPipe) id: number,
    @Body() productDto: ProductDto
  ) {
    const updateProduct = await this._productService.update(id, productDto);
    return updateProduct;
  }

  @Delete(":id")
  async deleteProduct(@Param("id", ParseIntPipe) id: number) {
    await this._productService.delete(id);
    return true;
  }
}
