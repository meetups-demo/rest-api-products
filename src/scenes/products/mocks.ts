import { commerce } from 'faker';
import { IProduct } from './entities';
let products: IProduct[]= [];
for (let i=0; i < 20; i++) {
  products.push({
    color: commerce.color(),
    department: commerce.department(),
    productName: commerce.productName(),
    price: commerce.price(),
    productAdjective: commerce.productAdjective(),
    productMaterial: commerce.productMaterial(),
    product: commerce.product()
  })
}
export default products;
