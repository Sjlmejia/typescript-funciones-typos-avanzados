import faker from '@faker-js/faker';

import { addProduct, findProducts, products, updateProduct } from './products/product.service';

for(let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    title: faker.commerce.productName(),
    size: faker.random.arrayElement(['small', 'medium', 'large']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElement(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
 });
console.log(products);

findProducts({
  stock:10,
  color:'red'
});
