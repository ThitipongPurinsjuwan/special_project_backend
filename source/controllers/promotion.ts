import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'Promotion Controller';

const getAllPromotion = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all promotion');

    let query = `SELECT * FROM sbshop_promotion`;
    execute(req, res, query);
};

export default { getAllPromotion };
