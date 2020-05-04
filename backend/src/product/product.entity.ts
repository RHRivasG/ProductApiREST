import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true, length: 20, nullable: false })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  imageURL: string;

  @Column({ type: "int" })
  prince: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAp: Date;

  @CreateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;
}
