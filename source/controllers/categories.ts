import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'Categories Controller';

const getAllCategories = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all categories');

    let query = `SELECT * FROM sbshop_categories`;
    execute(req, res, query);
};

const getAllCategoriesBag = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all categories');

    let query = `SELECT * FROM sbshop_categories WHERE categories_type=1`;
    execute(req, res, query);
};

export default { getAllCategories, getAllCategoriesBag };
