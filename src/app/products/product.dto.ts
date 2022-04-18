import {Product} from './product.model';
import { createProduct } from '../../05-optionals';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example =Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2=Required<Product>

export interface FindProductDto extends Readonly<Partial<CreateProductDto>> {}
