import mysql from 'mysql';
import config from './config';

const params = config.mysql;

const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        const connectionn = mysql.createConnection(params);

        connectionn.connect((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(connectionn);
        });
    });

const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });

export { Connect, Query };
