import { EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";
import { ProductDto } from "./dto/product.dto";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async converter(productDto: ProductDto): Promise<Product> {
    const { name, description, imageURL, prince } = productDto;
    const product = new Product();
    product.name = name;
    product.imageURL = imageURL;
    product.description = description;
    product.prince = prince;
    return product;
  }
}
