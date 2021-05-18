import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'Product Controller';

const getAllProduct = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all products');

    let query = `SELECT * FROM sbshop_product`;
    execute(req, res, query);
};

const getProductReview = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting review products');
    let { product_id } = req.query;
    let query = `SELECT * FROM sbshop_product_review WHERE product_id = ${product_id}`;
    execute(req, res, query);
};

const reviewInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert Review');
    const { product_id, user_id, text_review } = req.body;
    // console.log(req.body);
    let query = `INSERT INTO sbshop_product_review (product_id, user_id, text_review) VALUES ('${product_id}', '${user_id}','${text_review}')`;
    execute(req, res, query);
};

const getProductById = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting review products');
    let { product_id } = req.query;
    let query = `SELECT * FROM sbshop_product WHERE product_id = ${product_id}`;
    execute(req, res, query);
};
const getProductWithType = (req: Request, res: Response, next: NextFunction) => {
    let { category_id } = req.query;
    let query = `SELECT * FROM sbshop_product as p join sbshop_categories as cat on p.product_category = cat.category_id where categories_type = ${category_id}`;
    execute(req, res, query);
};

const productInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert Product');
    const { nameProduct, categoryProduct, promotionProduct, price, quantity, pathPicture } = req.body;
    // console.log(req.body);
    let query = `INSERT INTO sbshop_product (product_name, product_price, product_quantity, product_category, product_img, product_promotion) VALUES ('${nameProduct}','${price}','${quantity}','${categoryProduct}','${pathPicture}','${promotionProduct}')`;
    execute(req, res, query);
};

const productDelete = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Delete user');
    const { product_id } = req.query;
    let query = `DELETE FROM sbshop_product WHERE product_id=${product_id};`;
    execute(req, res, query);
};
const productUpdateInfo = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Update promotion');
    const { product_id } = req.query;
    const { nameProduct, categoryProduct, promotionProduct, price, quantity, pathPicture } = req.body;
    let query = `UPDATE sbshop_product SET product_name = '${nameProduct}', product_price = '${price}', product_quantity = '${quantity}', product_category = '${categoryProduct}', product_img = '${pathPicture}', product_promotion = '${promotionProduct}' WHERE product_id = ${product_id}`;
    execute(req, res, query);
};

export default { getAllProduct, getProductReview, getProductWithType, productInsert, productDelete, getProductById, productUpdateInfo, reviewInsert };
