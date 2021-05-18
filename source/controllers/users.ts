import { NextFunction, Request, Response } from 'express';
import execute from './execute';
const NAMESPACE = 'Users Controller';

const getAllUser = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting all user');

    let query = `SELECT * FROM sbshop_user`;
    execute(req, res, query);
};

const getUserPosition = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting user & position');

    let query = `SELECT * FROM sbshop_user join sbshop_user_status on sbshop_user.	user_status_id = sbshop_user_status.user_status_id`;
    execute(req, res, query);
};

const getUserByUsernamePassword = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting username user');
    const { user_username, user_password } = req.body;
    let query = `SELECT * FROM sbshop_user WHERE user_username = '${user_username}' AND user_password='${user_password}'`;
    execute(req, res, query);
};

const getUserById = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Getting username user');
    let { user_id } = req.query;
    let query = `SELECT * FROM sbshop_user WHERE user_id = ${user_id}`;
    execute(req, res, query);
};

const userInsert = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Insert user');
    const { user_firstname, user_lastname, user_address, user_phone_number, user_username, user_password, user_status_id } = req.body;
    let query = `INSERT INTO sbshop_user (user_firstname, user_lastname, user_username, user_password, user_status_id, user_address,user_phone_number) VALUES ('${user_firstname}','${user_lastname}','${user_username}','${user_password}','${user_status_id}','${user_address}','${user_phone_number}')`;
    execute(req, res, query);
};

const userUpdateInfo = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Update user');
    const { user_id } = req.query;
    const { user_firstname, user_lastname, user_address, user_phone_number, user_email } = req.body;
    let query = `UPDATE sbshop_user SET user_firstname = '${user_firstname}', user_lastname = '${user_lastname}', user_address = '${user_address}', user_phone_number = '${user_phone_number}',user_email = '${user_email}' WHERE user_id = ${user_id}`;
    execute(req, res, query);
};

const userDelete = (req: Request, res: Response, next: NextFunction) => {
    console.info(NAMESPACE, 'Delete user');
    const { user_id } = req.query;
    let query = `DELETE FROM sbshop_user WHERE user_id=${user_id};`;
    execute(req, res, query);
};

export default { getAllUser, userUpdateInfo, userDelete, userInsert, getUserByUsernamePassword, getUserById, getUserPosition };
