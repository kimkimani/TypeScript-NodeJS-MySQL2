import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'mysql_server',
        user: 'blog',
        password: 'blog',
        database: 'blog',
        connectionLimit: 10
    });

    return connection;
}