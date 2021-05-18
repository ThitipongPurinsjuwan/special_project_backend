import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'Promotion Controller';

const getAllPromotion = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all promotion');

    let query = `SELECT * FROM sbshop_promotion`;
    execute(req, res, query);
};

const promotionDelete = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Delete promotion');
    const { promotion_id } = req.query;
    let query = `DELETE FROM sbshop_promotion WHERE promotion_id=${promotion_id};`;
    execute(req, res, query);
};
const promotionInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert promotion');
    const { promotion_name, sales_percentage, promotion_date_start, promotion_date_end } = req.body;
    let query = `INSERT INTO sbshop_promotion (promotion_name, sales_percentage, promotion_date_start, promotion_date_end) VALUES ('${promotion_name}','${sales_percentage}','${promotion_date_start}','${promotion_date_end}')`;
    execute(req, res, query);
};
const getPromotionById = (req: Request, res: Response, next: NextFunction) => {
    let { promotion_id } = req.query;
    let query = `SELECT * FROM sbshop_promotion WHERE promotion_id = ${promotion_id}`;
    execute(req, res, query);
};
const promotionUpdateInfo = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Update user');
    const { product_id } = req.query;
    const { nameProduct, categoryProduct, promotionProduct, price, quantity, pathPicture } = req.body;
    let query = `UPDATE sbshop_product SET product_name = '${nameProduct}', product_price = '${price}', product_quantity = '${quantity}', product_category = '${categoryProduct}', product_img = '${pathPicture}', product_promotion = '${promotionProduct}' WHERE product_id = ${product_id}`;
    execute(req, res, query);
};
export default { getAllPromotion, promotionDelete, promotionInsert, getPromotionById, promotionUpdateInfo };
