export interface Product {
  id?: string;
  name: string;
  description: string;
  prince: number;
  imageURL: string;
  createdAt?: Date;
  updatedAt?: Date;
}
