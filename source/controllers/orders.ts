import { NextFunction, Request, Response } from 'express';
import execute from './execute';

const NAMESPACE = 'Orders Controller';

const getAllOrder = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all orders');
    const { status } = req.query;
    let query = `SELECT product_name,user_firstname,user_lastname,in_order_quantity,in_order_price,in_order_total,in_order_date,order_status_name FROM sbshop_in_orders as inOr JOIN sbshop_product as pro`;
    query = query + ` ON inOr.in_order_product_id = pro.product_id`;
    query = query + ` JOIN sbshop_user as u`;
    query = query + ` ON inOr.in_order_user_id = u.user_id`;
    query = query + ` JOIN sbshop_order_status as st`;
    query = query + ` ON inOr.in_order_status = st.order_status_id`;
    query = query + ` WHERE in_order_status = ${status} OR 0 = ${status}`;
    execute(req, res, query);
};
const getOrderList = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all orders');
    let query = `SELECT product_id,product_name,user_firstname,user_lastname,in_order_quantity,in_order_price,in_order_total,in_order_date,order_status_name FROM sbshop_in_orders as inOr JOIN sbshop_product as pro`;
    query = query + ` ON inOr.in_order_product_id = pro.product_id`;
    query = query + ` JOIN sbshop_user as u`;
    query = query + ` ON inOr.in_order_user_id = u.user_id`;
    query = query + ` JOIN sbshop_order_status as st`;
    query = query + ` ON inOr.in_order_status = st.order_status_id`;
    execute(req, res, query);
};
const getOderWithUser = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all orders');
    const { user_id } = req.query;
    let query = `SELECT in_order_id,in_order_product_id,product_name,product_img,in_order_quantity,in_order_price,in_order_total FROM sbshop_in_orders as inOr JOIN sbshop_product as pro`;
    query = query + ` ON inOr.in_order_product_id = pro.product_id`;
    query = query + ` JOIN sbshop_user as u`;
    query = query + ` ON inOr.in_order_user_id = u.user_id`;
    query = query + ` JOIN sbshop_order_status as st`;
    query = query + ` ON inOr.in_order_status = st.order_status_id`;
    query = query + ` WHERE in_order_status = 2 AND inOr.in_order_user_id = ${user_id}`;
    execute(req, res, query);
};
const orderDelete = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Delete order');
    const { order_id } = req.query;
    let query = `DELETE FROM sbshop_in_orders WHERE in_order_id=${order_id};`;
    execute(req, res, query);
};
const getOder = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all orders');
    const { user_id } = req.query;
    let query = `SELECT * FROM sbshop_in_orders WHERE in_order_status = 2 AND in_order_user_id = ${user_id}`;
    execute(req, res, query);
};

const orderInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert order');
    const { product_id, user_id, quantity, price, total, status } = req.body;
    let query = `INSERT INTO sbshop_in_orders (in_order_product_id, in_order_user_id, in_order_quantity, in_order_price, in_order_total, in_order_date,in_order_status) VALUES ('${product_id}','${user_id}','${quantity}','${price}','${total}',CURRENT_TIMESTAMP,'${status}')`;
    execute(req, res, query);
};

export default { getAllOrder, orderInsert, getOderWithUser, getOder, orderDelete, getOrderList };
