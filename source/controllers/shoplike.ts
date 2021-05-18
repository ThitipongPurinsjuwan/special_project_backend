import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'ShopLike Controller';

const getAllShopLike = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting Like products');
    let { user_id } = req.query;
    let query = `SELECT * FROM sbshop_like JOIN sbshop_product ON sbshop_like.product_id = sbshop_product.product_id WHERE sbshop_like.user_id = ${user_id}`;
    execute(req, res, query);
};
const shoplikeInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert Product');
    const { user_id, product_id } = req.body;
    // console.log(req.body);
    let query = `INSERT INTO sbshop_like(user_id, product_id) VALUES (${user_id},${product_id})`;
    execute(req, res, query);
};

export default { getAllShopLike, shoplikeInsert };
