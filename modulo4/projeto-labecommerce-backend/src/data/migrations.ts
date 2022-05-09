import connection from "../controller/connection";

export const createTable = async (): Promise<void> => {
    try {
        await connection.schema.createTableIfNotExists('labecommerce_users', (table) => {
            table.string('id').primary;
            table.string('name');
            table.string('email');
            table.string('password');
        })
        connection.destroy();    
        console.log('Table created');
    } 
    catch (error: any) {
        console.log(error.sql.message || error.message)
    }
};