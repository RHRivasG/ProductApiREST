import { IsNotEmpty, IsInt, Length, IsString } from "class-validator";

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  imageURL: string;

  @IsNotEmpty()
  @IsInt()
  prince: number;
}
