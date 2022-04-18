type Sizes = 'small' | 'medium' | 'large';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock:number;
  size: Sizes;
}

const products: Product[] = [];
products.push({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  stock: 10,
  size: 'small',
});

const addProduct = (data: Product) => {
  products.push(data);
}
