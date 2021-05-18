import { NextFunction, Request, Response } from 'express';
import { parseJsonText } from 'typescript';
import { Connect, Query } from '../config/mysql';

const execute = (req: Request, res: Response, query: string, err = {}) => {
    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    return res.status(500).json({
                        message: error.message,
                        error,
                        err: err
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default execute;
