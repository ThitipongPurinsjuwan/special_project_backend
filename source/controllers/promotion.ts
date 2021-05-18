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
export default { getAllPromotion, promotionDelete, promotionInsert, getPromotionById };
