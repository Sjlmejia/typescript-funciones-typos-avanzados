import { BaseModel } from "./../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'small' | 'medium' | 'large';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  color: string;
  price: number;
  stock:number;
  size?: Sizes;
  category: Category;
  isNew: boolean;
  tags: string[];
}

