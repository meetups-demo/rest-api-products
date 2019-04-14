import { IProduct } from './entities';
import products from './mocks';
import { Request, Response } from 'express';

class ProductController {
  public static getInstance() {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }

    return ProductController.instance;
  }
  private static instance: ProductController;

  /**
   * Get product list.
   * @returns IProduct[]
   */
  public async list(req: Request, res: Response) {
    try {
      res.send({ error: false, data:  products});
    } catch (e) {
      res.status(500).send({ error: true, data: e });
    }
  };
}

export default ProductController.getInstance();
