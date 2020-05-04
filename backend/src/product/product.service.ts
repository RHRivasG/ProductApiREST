import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entity";
import { ProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly _productRepository: ProductRepository
  ) {}

  async getAll(): Promise<Product[]> {
    const products: Product[] = await this._productRepository.find();
    return products;
  }

  async get(id: number): Promise<Product> {
    if (!id) {
      throw new BadRequestException("id must be sent");
    }
    const product: Product = await this._productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async create(productDto: ProductDto): Promise<Product> {
    const product: Product = await this._productRepository.converter(
      productDto
    );
    return await this._productRepository.save(product);
  }

  async update(id: number, productDto: ProductDto): Promise<Product> {
    const idExists = await this._productRepository.findOne({ where: [{ id }] });
    if (!id) {
      throw new NotFoundException();
    }
    const product: Product = await this._productRepository.converter(
      productDto
    );
    await this._productRepository.update(id, product);
    return product;
  }

  async delete(id: number): Promise<void> {
    const productExists = await this._productRepository.findOne(id);
    if (!id) {
      throw new NotFoundException();
    }
    await this._productRepository.delete(id);
  }
}
