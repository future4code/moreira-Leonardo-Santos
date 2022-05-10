import connection from "../controller/connection";

export const createUsersTable = async (): Promise<void> => {
    try {
        await connection.schema.createTableIfNotExists('labecommerce_users', (table) => {
            table.string('id').primary;
            table.string('name');
            table.string('email');
            table.string('password');
        })
     
        console.log('Table created');
    } 
    catch (error: any) {
        console.log(error.sql.message || error.message)
    }
    finally {
        connection.destroy();
    };
};

export const createProductsTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_products (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price INT NOT NULL,
                image_url VARCHAR(255)
            );
        `);
     
        console.log('Table created');
    } 
    catch (error: any) {
        console.log(error.sql.message || error.message)
    }
    finally {
        connection.destroy();
    };
};